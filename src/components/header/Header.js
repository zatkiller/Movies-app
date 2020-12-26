import React from 'react';
// import logo from '../../../src/logo.svg';

import './Header.scss';

const Header = () => {
  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">{/* <img src={logo} alt="" /> */}Cinema App</div>
          <div className="header-menu-toggle" id="header-mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="header-nav">
            <li className="header-nav-item">Now Playing</li>
            <li className="header-nav-item">Now Movies</li>
            <input className="search-input" type="text" placeholder="Search for a movie" />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
