import React from 'react';
import hacker from '../img/hacker.png';

import myphoto from '../img/myphoto.jpg';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <img className='navbar__profile' src={myphoto} alt='personal' />
        <a className='navbar__button' href='mailto:a.batuhan.yilmaz@gmail.com'>
          Contact me
        </a>
      </div>
      <div className='header__content'>
        <h1>UI Designer & Frontend Developer </h1>
        <p>
          Everything you can imagine is real. <br /> Let's make it real.
        </p>
        <img className='header__png' src={hacker} alt='hacker' />
        <ul>
          <li>
            <a href='https://github.com/BatuhanYilmazzz'>
              <span>
                <i className='fab fa-github fa-2x'></i>
              </span>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/batuhan38008916'>
              <i className='fab fa-twitter fa-2x'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/ahmetbatuhanyilmaz/'>
              <i className='fab fa-linkedin-in fa-2x'></i>
            </a>
          </li>
          <li>
            <a href='https://angel.co/ahmet-batuhan-yilmaz'>
              <i className='fab fa-angellist fa-2x'></i>
            </a>
          </li>
          <li>
            <a href='mailto:a.batuhan.yilmaz@gmail.com'>
              <i className='far fa-envelope fa-2x'></i>
            </a>
          </li>
        </ul>
        <div className='bounce'>
          <i className='fas fa-chevron-down fa-2x'></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
