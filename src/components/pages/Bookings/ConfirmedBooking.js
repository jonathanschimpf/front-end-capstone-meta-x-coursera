import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
    <div className="container reservation-cormirmed">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your reservation has been successfully made.</h2>
      <p>Can't wait to see you soon!</p>
      <br/>
    </div>
  );
};

export default ConfirmedBooking;
