import React from 'react';
// import logo from './logo.svg';
import '../assets/style/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-left">
          <div className="header-logo">
            <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="logo" />
          </div>
          <div className="header-category">
            <a>WOMEN</a>
            <a>MEN</a>
            <a>PLACE CUSTOM ORDER</a>
          </div>
        </div>
        
        <div className="header-search">
          <input placeholder="Search for items, brands and categories"></input>
          <button>
            <img src={process.env.PUBLIC_URL+'/images/searchbutton.svg'} alt="searchbutton" />
          </button>
        </div>
        <div className="header-buttons">
          <div className="button-icon">
            <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
          </div>
          <div className="button-icon">
            <img src={process.env.PUBLIC_URL+'/images/shoppingbag.svg'} alt="shoppingbag" />
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="header-bottom">

      </div>
    </div>
  );
}

export default Header;
