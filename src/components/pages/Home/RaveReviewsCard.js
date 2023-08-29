import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RaveReviewsCard.css';

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const RaveReviewsCard = ({ customer }) => {
  return (
    <article className="rave-reviews-card">
      <img src={customer.image} alt={customer.fullName} />
      <br/>
      <h4>{customer.fullName}</h4>
      <span>
        {customer.rating.map((ratingPoint, index) => 
          <FontAwesomeIcon 
            key={index} 
            icon={ratingLevels[ratingPoint]} 
            size="lg" 
          />
        )}
      </span>
      <br/>
      <blockquote><p>"{customer.says}"</p></blockquote>
    </article>
  );
};

export default RaveReviewsCard;
