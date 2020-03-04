import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <img
          className='navbar__profile'
          src='./img/myphoto.webp'
          alt='personal'
        />
        <a className='navbar__button' href='mailto:a.batuhan.yilmaz@gmail.com'>
          Contact
        </a>
      </div>
      <div className='header__content'>
        <h1>UI Designer & Frontend Developer </h1>
        <p>
          Everything you can imagine is real. <br /> Let's make it real.
        </p>
        <img className='header__png' src='./img/hacker.webp' alt='hacker' />
        <ul>
          <li>
            <a href='https://github.com/BatuhanYilmazzz'>
              <span>
                <i className='fab fa-github fa-2x'></i>
              </span>
            </a>
          </li>
          <li>
            <a href='https://gitlab.com/BatuhanYilmazz'>
              <span>
                <i className='fab fa-gitlab fa-2x'></i>
              </span>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/batuhnnylmazz'>
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
        </ul>
        <div className='bounce'>
          <i className='fas fa-chevron-down fa-2x'></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
