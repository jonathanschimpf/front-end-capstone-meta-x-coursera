import React, { useState, useEffect } from 'react';
import FormField from './FormField';
import { fetchAPI } from '../../../utils/fakeAPI';

const BookingForm = ({
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const occasions = [
    'Date',
    'Anniversary',
    'Get-together with friends',
    'Birthday',
    'Celebration',
    'Family Reunion',
    'Graduation',
    'Bachelorette Party',
    'Bachelor Party',
    'Engagement',
    'Business Meeting',
    'Networking',
    'New Job',
    'Job Promotion',
    'First Meeting',
    'Client Dinner',
    'Team Building',
  ];


  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState('');
  const [numberOfGuests, setNumberGuests] = useState(1);
  const [occasion, setOccasion] = useState(occasions[0]);
  const [availableTimes, setAvailableTimes] = useState([]);
   // Initialize with an empty array

  useEffect(() => {
    // Fetch times using fetchAPI and update availableTimes
    const times = fetchAPI(new Date(date));
    setAvailableTimes(times);
    setTime(times[0] || ''); // Sets the first time as the default
  }, [date]);

  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests >= 1 && numberOfGuests <= 10;
  const isOccasionValid = () => occasion !== '';
  const areAllFieldsValid = () =>
    isDateValid() &&
    isTimeValid() &&
    isNumberOfGuestsValid() &&
    isOccasionValid();

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion });
  };

  return (
     <form onSubmit={handleFormSubmit}>
      <FormField 
        label="Date" 
        htmlFor="booking-date" 
        hasError={!isDateValid()} 
        errorMessage="Please choose a valid date"
      >
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          min={minimumDate} 
          value={date} 
          required={true} 
          onChange={handleDateChange}
        />
      </FormField>
      <FormField 
        label="Time" 
        htmlFor="booking-time" 
        hasError={!isTimeValid()} 
        errorMessage="Please choose a valid time"
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required={true} 
          onChange={handleTimeChange}
        >
          {availableTimes.map(time => (
            <option data-testid="booking-time-option" key={time}>
              {time}
            </option>
          ))}
        </select>
      </FormField>
      <FormField 
        label="Number of Guests" 
        htmlFor="booking-number-guests" 
        hasError={!isNumberOfGuestsValid()} 
        errorMessage="Please enter a number between 1 and 10"
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={1} 
          max={10} 
          required={true} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField 
        label=" What's the Occasion?" 
        htmlFor="booking-occasion" 
        hasError={!isOccasionValid()} 
        errorMessage="Please choose a valid occasion"
      >
        <select 
          id="booking-occasion" 
          name="booking-occasion" 
          value={occasion} 
          required={true} 
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion => (
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </FormField>
      <button 
        className="button-primary" 
        type="submit" 
        disabled={!areAllFieldsValid()}
      >
        Reserve
      </button>
    </form>
  );
};

export default BookingForm;



