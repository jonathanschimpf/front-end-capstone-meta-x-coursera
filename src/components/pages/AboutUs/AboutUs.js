import littleLemonCookingTeamOne from './assets/littlelemoncookingteam-1.png';
import littleLemonCookingTeamTwo from './assets/littlelemoncookingteam-2.png';
import littleLemonCookingTeamThree from './assets/littlelemoncookingteam-3.png';
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="container grid about-us"> 
      <div className="about-us-description">
        <h2>Where Chicago Meets Italy!<font className="lemonCalc"> 🍋</font></h2>
    

        <br/>

       <p>
       At Little Lemon, we bring the warm and inviting flavors of Italy right to the heart of Chicago. Nestled in the bustling cityscape, our restaurant is a culinary haven that celebrates the essence of authentic Italian cuisine. With each dish crafted with love and precision, we take pride in offering you a taste of Italy that will transport your taste buds to the charming streets of Rome or the picturesque vineyards of Tuscany.
        </p>

        <br/>

        <p>Within the pages of our menu lies a symphony of flavors, skillfully orchestrated to captivate your palate and leave a lasting impression. Our selection boasts an enticing array of antipasti, each morsel designed to tantalize your taste buds and awaken your senses. The handmade pasta dishes, lovingly rolled and prepared, are a testament to the dedication and artistry of our culinary team. As you savor each bite, the flavors will meld harmoniously, melting in your mouth and inviting you to explore every nuance. Our succulent main courses, carefully curated to delight even the most discerning of palates, create an experience that lingers in memory. Every dish on our menu carries with it a narrative, a story of its origin from the various regions of Italy. The techniques employed to craft these culinary treasures breathe life into each plate, connecting you to the rich culinary heritage of our beloved country.
        </p>

        <br/>

        <p>The team behind Little Lemon poured their hearts into every aspect of the restaurant, from the carefully selected wines that perfectly complement each dish to the warm and attentive service that makes every guest feel like family. We believe that dining is not just about eating; it is an experience that should awaken the senses, evoke cherished memories, and create new ones.
        </p>
        <br/>
      </div>
      <div className="about-us-chefs">
        <div className="about-us-image-div1">
        <img src={littleLemonCookingTeamOne} className="about-us-image-team1" alt="The Little Lemon Cooking Team #1" />
        </div>
        <div className="about-us-image-div2">
        <img src={littleLemonCookingTeamTwo} className="about-us-image-team2" alt="The Little Lemon Cooking Team #2" />
        </div>
        <div className="about-us-image-div3">
        <img src={littleLemonCookingTeamThree} className="about-us-image-team3"alt="The Little Lemon Cooking Team #3" />  
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
