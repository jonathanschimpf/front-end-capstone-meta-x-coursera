import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { submitAPI } from '../../../utils/fakeAPI'; 
import pages from '../../../utils/pages';
import BookingForm from './BookingForm'; 
import { fetchAPI } from '../../../utils/fakeAPI'; 

const Bookings = () => {
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes] = useState([]);

  const updateAvailableTimes = async date => {
    const response = await fetchAPI(new Date(date));
    setAvailableTimes(response);
  };

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get('confirmedBooking').path);
  };

  return (
    <div className="bookings">
      <h2><font size="+2"> 🍋</font> Reserve Your Table 
      <font size="+2"> 🍋</font></h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={updateAvailableTimes}
        submitData={submitData}
      />
    </div>
  );
};

export default Bookings;
