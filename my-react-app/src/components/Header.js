import React from 'react';
import About from './About'; // Import the About component


const Header = () => {
  return (
    <div id="header-wrapper">
      <header id="header" className="container">
        <div id="logo">
          <h1><a href="/">SubLettuce</a></h1>
        </div>
        <nav id="nav">
          <ul>
            <li className="current"><a href="/">Welcome</a></li>
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
            <li><a href="/about">About Us</a></li>
            {/* <li><a href="right-sidebar.html">Right Sidebar</a></li> */}
            {/* <li><a href="no-sidebar.html">No Sidebar</a></li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
