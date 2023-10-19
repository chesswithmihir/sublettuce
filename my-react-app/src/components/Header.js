import React from 'react';
import About from './About'; // Import the About component
import userIcon from '../images/userIcon.png'


const Header = () => {
  return (
    <div id="header-wrapper">
      <header id="header" className="container">
        
        <img src= {userIcon} alt="Icon" style={{ "width": `50px`}} ></img>
        


        <nav id="nav">
          <ul>
            {/* <li>
              <a href="#">Dropdown</a>
              <ul>
                <li><a href="#">Lorem ipsum dolor</a></li>
                <li><a href="#">Magna phasellus</a></li>
                <li>
                  <a href="#">Phasellus consequat</a>
                  <ul>
                    <li><a href="#">Lorem ipsum dolor</a></li>
                    <li><a href="#">Phasellus consequat</a></li>
                    <li><a href="#">Magna phasellus</a></li>
                    <li><a href="#">Etiam dolore nisl</a></li>
                  </ul>
                </li>
                <li><a href="#">Veroeros feugiat</a></li>
              </ul>
            </li> */}

            <li><a href="/about">How it Works</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/about">Support</a></li>

            <li className="current"><a href="/">List Your Lease</a></li>

            {/* <li><a href="right-sidebar.html">Right Sidebar</a></li> */}
            {/* <li><a href="no-sidebar.html">No Sidebar</a></li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
