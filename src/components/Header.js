import React from 'react';
import logo from '../img/logo.png';
import myphoto from '../img/myphoto.png';
import './index.css';

const Header = () => {
  return (
    <React.Fragment>
      <nav className='navbar'>
        <img src={logo} alt='logo' className='navbar-logo' />
        <a href='#' className='button pulse'>
          Contact Me
        </a>
      </nav>
      <header className='header'>
        <img src={myphoto} alt='profile photo' className='myphoto' />
        <h1>UI Designer & Front-end Developer </h1>
        <h2>Hi.I'm Batuhan Yılmaz</h2>
        <p>I chase the simplicity, and I love what I do.</p>
        <img src='' alt='' className='myphoto' />
        <div className='links'>
          <i className='fab fa-twitter fa-2x'></i>
          <i className='fab fa-angellist fa-2x'></i>
          <i className='fab fa-github fa-2x'></i>
          <i className='fab fa-dribbble fa-2x'></i>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
