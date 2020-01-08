import React from 'react';
// import logo from './logo.svg';
import '../assets/style/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-logo">
        <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="logo" />
        </div>
        <div className="header-category">
          <a>WOMEN</a>
          <a>MEN</a>
        </div>
      </div>
      <div className="header-bottom">

      </div>
    </div>
  );
}

export default Header;
