import cacioEPepe from './assets/cacioEPepe.png';
import risottoAllaMilanese from './assets/risottoallamilanese.jpg';
import littleLemonBars from './assets/littlelemonbars.jpg';
import './WeekSpecials.css';
import MealCard from './MealCard';
import React from 'react'

// Images sourced from Unsplash+ (unsplash.com)
// The world’s most popular creative platform.
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

const meals = [
{
    name: 'Risotto alla Milanese',
    image: risottoAllaMilanese,
    price: '$20.50',
    description: `Indulge in our unique take on the classic Risotto Alla Milanese, where timeless tradition meets modern innovation. Using the finest Carnaroli rice, our saffron-infused risotto boasts a mesmerizing fragrance and a vibrant golden hue. Slow-cooked to perfection in a delicate saffron broth, each velvety spoonful is enriched with the subtle nuttiness of freshly grated Grana Padano cheese. Experience the essence of Milan in every bite, a true celebration of Italian culinary heritage.`,
  },
  {
    name: 'Cacio e Pepe',
    image: cacioEPepe,
    price: '$17.99',
    description: `Savor the essence of Italian simplicity with our exquisite Cacio e Pepe special. Immerse yourself in the allure of velvety Pecorino Romano-coated spaghetti, adorned with the tantalizing dance of crackling black pepper. This dish is a true masterpiece of taste, embodying the heart of Italian cuisine. Let the harmonious blend of premium cheese and aromatic pepper envelop your senses, creating a symphony of flavors that lingers on your palate, a testament to the artistry of Italian culinary tradition.`,
  },
  {
    name: 'Little Lemon Bars',
    image: littleLemonBars,
    price: '$7.99',
    description: `Discover the sheer delight of our Little Lemon Bars, a divine dessert that captures the essence of summer in every delectable bite. Embark on a culinary journey with this Italian-inspired twist, where the tangy zest of lemons harmoniously dances with the comforting sweetness of a delicate crust. Savor the luscious fusion of vibrant citrus flavors and irresistible sweetness. Prepare to be enchanted by the flawless balance of tangy and sweet in each scrumptious morsel.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <React.Fragment className="week-specials-header">
        <h2 >Brand New Specials</h2>
      </React.Fragment>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
