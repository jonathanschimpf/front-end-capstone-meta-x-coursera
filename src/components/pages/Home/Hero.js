import { Link } from 'react-router-dom';
import tastygrublittlelemon from './assets/tastygrublittlelemon.jpeg';
import './Hero.css';
import pages from '../../../utils/pages';

// Images sourced from Unsplash+ (unsplash.com)
// The world’s most popular creative platform.
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Downtown Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist. Dinners here are not <b>just about the food</b> but also about the sense of togetherness, celebration of great food, and appreciation of the joys of life.
          </p>
          <div className="buttonbox">
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a Table
          </Link>
          </div>
        </div>
        <div className="padmeuptop hero-div-container padmedownbelow">
        <img 
          className="hero-image" 
          src={tastygrublittlelemon} 
          alt="Restaurant food" 
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
