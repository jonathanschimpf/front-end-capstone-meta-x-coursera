import './RaveReviews.css';
import RaveReviewsCard from './RaveReviewsCard';
import Headshot_SarahGarrison from './assets/Headshot_SarahGarrison.jpg';
import Headshot_MalikCarter from './assets/Headshot_MalikCarter.jpg';
import Headshot_IsabelaSantos from './assets/Headshot_IsabelaSantos.jpg';
import Headshot_KevinNguyen from './assets/Headshot_KevinNguyen.jpg';

// Images sourced from Unsplash+ (unsplash.com)
// The world’s most popular creative platform.
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

const customers = [
  {
    fullName: 'Sarah Garrison',
    image: Headshot_SarahGarrison,
    rating: [1, 1, 1, 1, 1],
    says: `I had the most amazing time celebrating my birthday at Little Lemon. The ambiance was charming, and the service was top-notch. My friends and I were blown away by the variety of dishes on the menu. I ordered the Bruschetta al Pomodoro, and it was the best I've ever had. The Little Lemon bars for dessert were a perfect ending to a perfect night. Thank you for making my birthday so special!`,
  },
  {
    fullName: 'Malik Carter',
    image: Headshot_MalikCarter,
    rating: [1, 1, 1, 1, 1],
    says: `If you're looking for an authentic Italian experience, look no further. Little Lemon exceeded all my expectations. The flavors of every meal I ordered transported me straight to Greece! The attention to detail in each dish was evident, and the wine selection was impressive. Can't wait to return and try more of their mouthwatering dishes.`,
  },
  {
    fullName: 'Isabela Santos',
    image: Headshot_IsabelaSantos,
    rating: [1, 1, 1, 1],
    says: `As a foodie, I can be a tough critic, but Little Lemon impressed me beyond words. Their Bruschetta al Pomodoro was a work of art - fresh, flavorful, and beautifully presented. My taste buds were in heaven! The attention to detail in every dish and the warm hospitality made it a dining experience to remember. Already planning my next visit!`,
  },
  {
    fullName: 'Kevin Nguyen',
    image: Headshot_KevinNguyen,
    rating: [1, 1, 1, 1, 1],
    says: `You won't find better Italian food anywhere else. Everything that I sampled melted in my mouth. The staff was incredibly friendly, and the chef's passion for their craft was evident in every dish. From the moment I stepped inside, I felt like I was transported to Italy. If you love authentic Italian flavors, this restaurant is a must-visit!`,
  },
];

let RaveReviews = () => {
  return (
    <section className="rave-reviews">
      <div className="container grid">
        <h2>Rave Reviews</h2>
        {customers.map((customer, index) => 
          <RaveReviewsCard key={index} customer={customer} />
        )}
     </div>
     <br/>
     <br/>
     <br/>
    </section>
  );
};

export default RaveReviews;
