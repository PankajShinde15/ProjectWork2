import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <Slider {...settings}>
        <div className="testimonial-item">
          <img src="https://th.bing.com/th?id=OIP.9iP5hfylm0iGQPmS8s1cOgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Person" />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod diam vitae metus dictum, eget ultrices sapien rhoncus.
            Fusce quis velit lacus. "
          </p>
          <p className="testimonial-person">- John Doe</p>
        </div>
        <div className="testimonial-item">
          <img src="https://th.bing.com/th?id=OIP.9iP5hfylm0iGQPmS8s1cOgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Person" />
          <p className="testimonial-text">
            "Sed euismod diam vitae metus dictum, eget ultrices sapien
            rhoncus. Fusce quis velit lacus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit."
          </p>
          <p className="testimonial-person">- Jane Smith</p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
