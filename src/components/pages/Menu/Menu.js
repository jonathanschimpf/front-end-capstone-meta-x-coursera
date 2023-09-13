import React from 'react';
import './Menu.css';
import LittleLemonMenu from './MenuFile/Little-Lemon-Menu.png';

const Menu = () => {
  return (
    <section>
        <div className="menuTitleCentered">
        <h1>
  Lunch+Dinner Menu 
  <span role="img" aria-label="lemon" className="lemonCalc">
    <span className="emoji"> 🍋</span>
  </span>
</h1>
        </div>
      <div className="littleLemonMenuCentered">
        <img src={LittleLemonMenu} className="littleLemonMenuImg" alt="The Little Lemon Menu" />
      </div>
    </section>
  );
};

export default Menu;
