import React from 'react';
import { Link } from 'react-router-dom';
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import logoWhiteImage from './assets/logo-white.png';
import pages from '../../utils/pages';

const navLinks = Array.from(pages.values()).filter(
  page => page.anchorable && page.name !== 'Confirmed Booking'
);

const contacts = [
  { type: 'address', icon: faLocationDot, info: '17 W 35th St, Chicago, IL 60616' },
  { type: 'phone', icon: faPhone, info: '(312) 599-1234' },
  { type: 'email', icon: faEnvelope, info: 'imhungry@littlelemon.com' },
];


const socials = [
  { icon: faFacebook, name: 'facebook' },
  { icon: faInstagram, name: 'instagram' },
  { icon: faYoutube, name: 'youtube' },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img
          className="site-footer-logo"
          src={logoWhiteImage}
          alt="Little Lemon Logo"
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
           {contacts.map((contact, index) => (
           <p key={index}>
           <FontAwesomeIcon className="yellow" icon={contact.icon} />{' '}
           {contact.type === 'email' ? (
           <a href={`mailto:${contact.info}`}>{contact.info}</a>
          ) : (
           contact.info
          )}
    </p>
  ))}
</address>

        </div>
        <div className="site-footer-social">
          <h4>Socials</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
