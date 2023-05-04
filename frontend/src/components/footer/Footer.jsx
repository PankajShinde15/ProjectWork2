import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <table>
          <tbody>
            <tr>
              <td>
                <div className={classes.col}>
                    <a class="navbar_left__oW8NW" href="/">Real Estate <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path></svg>
                    </a>
                  </div>
              </td>
              <td>
                <div className={classes.col}>
                    <div className="contact-info">
                      <h3>Contact Us</h3>
                      <p>123 Main St.</p>
                      <p>Anytown, USA 12345</p>
                      <p>Phone: 555-555-5555</p>
                      <p>Email: info@example.com</p>
                  </div>
                </div>
              </td>
              <td>
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
              </td>
            <td>
              <div className={classes.col}>
                <div className="navigation">
                  <h3>Navigation</h3>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about Us">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/properties">Properties</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <div className={classes.legal}>
              <p>&copy; {new Date().getFullYear()} Example Real Estate. All rights reserved.</p>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Use</a></li>
              </ul>
            </div>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
      </div>
    </footer>
  )
}

export default Footer