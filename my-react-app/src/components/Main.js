import React from 'react';
import stock_home from '../images/stock_home.jpeg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'


const Main = () => {
  return (
    <div id="main-wrapper">
      <div className="container">
        <div className="row gtr-200">
          <div className="col-4 col-12-medium">
            <div id="sidebar">
            <div className="col-6"><a href="#" className="image fit"><img src={stock_home} alt="" /></a></div>

              {/* <section className="widget thumbnails">
              
                <h3>Interesting stuff</h3>
                <div className="grid">
                  <div className="row gtr-50">
                    <div className="col-6"><a href="#" className="image fit"><img src={pic04} alt="" /></a></div>
                    <div className="col-6"><a href="#" className="image fit"><img src={pic05} alt="" /></a></div>
                    <div className="col-6"><a href="#" className="image fit"><img src={pic06} alt="" /></a></div>
                    <div className="col-6"><a href="#" className="image fit"><img src={pic07} alt="" /></a></div>
                  </div>
                </div>
                <a href="#" className="button icon fa-file-alt">More</a>
              </section> */}

            </div>
          </div>
          <div className="col-8 col-12-medium imp-medium">

            {/* Content */}
            <div id="content">
              <section className="last">
                <h2>So what's this all about?</h2>
                <p>
                  Our mission is to make sure that you have the best time finding a place to sublease
                  or that you have the best time subletting your apartment to others. Our platform
                  handles communication of both in an efficient and affordable manner.
                </p>
                <a href="/about" className="button icon solid fa-arrow-circle-right">Continue Reading</a>
              </section>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
