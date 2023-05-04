import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>123 Main St.</p>
              <p>Anytown, USA 12345</p>
              <p>Phone: 555-555-5555</p>
              <p>Email: info@example.com</p>
          </div>
        </div>
        <div className={classes.col}>
          <div className="social-media">
              <h3>Connect with us</h3>
              <ul>
                <li><a href="https://www.facebook.com/example"><i className="fab fa-facebook"></i>facebook</a></li>
                <li><a href="https://www.twitter.com/example"><i className="fab fa-twitter"></i>twitter</a></li>
                <li><a href="https://www.instagram.com/example"><i className="fab fa-instagram"></i>instagram</a></li>
                <li><a href="https://www.linkedin.com/company/example"><i className="fab fa-linkedin"></i>linkedin</a></li>
              </ul>
          </div>
        </div>
        <div className={classes.col}>
          <div className="navigation">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/properties">Properties</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <p>&copy; {new Date().getFullYear()} RentUp Real Estate. All rights reserved.</p>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer