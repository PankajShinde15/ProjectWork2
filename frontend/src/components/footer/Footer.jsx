import React from 'react';
import { BsHouseDoor } from 'react-icons/bs'

// import logo from './logo.svg';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <h1>Real Estate <BsHouseDoor /></h1>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>123 Main Street</p>
          <p>Anytown, USA 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>

        <div className="social-links">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} /><span>Facebook</span>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} /><span>Twitter</span>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} /><span>Instagram</span>
          </a>
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/About">About Us</a>
          <a href="/Listings">Listings</a>
          <a href="/Contact">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
