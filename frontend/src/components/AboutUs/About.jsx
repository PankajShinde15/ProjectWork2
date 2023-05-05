import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">

      <section className="company-section">
        <h2>Our Company</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tortor id sapien maximus ultricies. Nam lobortis aliquet magna eu consectetur. In hac habitasse platea dictumst.</p>
      </section>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <div className="team-member-info">
            <h3>John Doe</h3>
            <p>Realtor</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <div className="team-member-info">
            <h3>Jane Smith</h3>
            <p>Broker</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 My Real Estate Company</p>
      </footer>
    </div>
  );
}

export default AboutUs;
