import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImage from './assets/logo.png';
import './Header.css';
import pages from '../../utils/pages';

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Header = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid nav-bar">
        <a className="nav-bar-logo" href={pages.get('home').path}>
          <img src={logoImage} alt="Little Lemon logo" />
        </a>
        <button 
          className="nav-bar-stack" 
          type="button" 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ?
            <FontAwesomeIcon icon={faXmark} size="2x" /> : 
            <FontAwesomeIcon icon={faBars} size="2x" />}
        </button>
        <ul 
          className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'} 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {navLinks.map((navLink, index) => 
            <li key={index}>
              <a 
                className={pathname === navLink.path ? 'current-location' : ''} 
                href={navLink.path} // Use href instead of react-router-dom Link
              >
                {navLink.name}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
