import React from 'react';
import hacker from '../img/hacker.png';

import myphoto from '../img/myphoto.png';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <img className='navbar__profile' src={myphoto} alt='personal' />
        <a className='navbar__button' href='#'>
          Contact me
        </a>
      </div>
      <div className='header__content'>
        <h1>UI Designer & Full Stack Developer </h1>
        <p>
          I design and code beautifully simple things, and I love what I do.
        </p>
        <img className='header__png' src={hacker} alt='hacker' />
      </div>
    </div>
  );
};

export default Header;
