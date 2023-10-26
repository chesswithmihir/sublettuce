import React from 'react';
import '../css/Landing.css';
import userIcon from '../images/userIcon.png'

const Main = () => {
  return (
    <div>
    <div id="header-wrapper">
      <header id="header" className="container">
        {/* <img src= {userIcon} alt="Icon" style={{ "width": `30px`}} ></img> */}
        <h3>Sublettuce Logo</h3>
        <nav id="nav">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/about">FAQ</a></li>
            <li><a href="/about">Contact</a></li>
            {/* <li className="current"><a href="/">List Your Lease</a></li> */}
          </ul>
        </nav>
      </header>
    </div>
    

    <div id="main-wrapper">
      <div className="container">
        <div className="row">

          <div className="col-4 col-12-medium" >
          {/* <section className="last"> */}
                <h2>You deserve a seamless sublease</h2>
              {/* </section>           */}

          <div className="col-8 col-12-medium imp-medium">
            <div id="content">
            <a href="/about" className="button">Join the Waitlist</a>
              <ul>
                  <li>- Early Access</li>
                  <li>- First 100 users get platinum access</li>
                </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Main;
