import React from 'react';
import "./whyUs.css";

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <h2>Why to Choose Us?</h2>
            < div className="reasonContainer">
                <div className="feature">
                    <div className="feature-icon">
                        <i className="fas fa-home"></i>
                    </div>
                    <h3>Extensive Property Listings</h3>
                    <p>We offer a vast selection of high-quality properties to suit your needs and preferences.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">
                        <i className="fas fa-handshake"></i>
                    </div>
                    <h3>Trusted Real Estate Agents</h3>
                    <p>Our team of experienced and reliable real estate agents is dedicated to providing personalized assistance throughout your property journey.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">
                        <i className="fas fa-money-bill-wave"></i>
                    </div>
                    <h3>Competitive Pricing</h3>
                    <p>We offer competitive pricing options for both buyers and sellers.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3>Secure and Confidential</h3>
                    <p>Your privacy and security are of utmost importance to us.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
