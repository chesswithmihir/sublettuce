import React from 'react';
import pic01 from '../images/room1.jpeg'
import pic02 from '../images/room2.webp'
import pic03 from '../images/room3.webp'

const Features = () => {
  return (
    <div id="features-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-4 col-12-medium">
            <section className="box feature">
              {/* Add inline styles to the image tag */}
              <a href="#" className="image featured">
                <img src={pic01} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              </a>
              <div className="inner">
                <header>
                  <h2>1234 Elm Street, Los Angeles, CA 90001, USA </h2>
                  <p>$1,000/mo</p>
                </header>
                <p>"Charming bungalow with vintage appeal, nestled in a quiet neighborhood. Cozy and comfortable living awaits."</p>
              </div>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="box feature">
              {/* Add inline styles to the image tag */}
              <a href="#" className="image featured">
                <img src={pic02} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              </a>
              <div className="inner">
                <header>
                  <h2>5678 Oak Avenue, Los Angeles, CA 90002, USA</h2>
                  <p>$1,250/mo</p>
                </header>
                <p>"Modern urban oasis with stunning city views. Stylish design, abundant natural light, and great amenities."</p>
              </div>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="box feature">
              {/* Add inline styles to the image tag */}
              <a href="#" className="image featured">
                <img src={pic03} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              </a>
              <div className="inner">
                <header>
                  <h2>9876 Maple Lane, Los Angeles, CA 90003, USA</h2>
                  <p>$1,200/mo</p>
                </header>
                <p>"Spacious family home with a backyard paradise. Ideal for entertaining, close to schools and parks."</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Features;
