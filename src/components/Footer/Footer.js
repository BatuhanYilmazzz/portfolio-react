import React from 'react';
import logo from '../img/logo.png';
import angelist from '../img/angelist.png';
import envelope from '../img/envelope.png';
import github from '../img/github.png';
import twitter from '../img/twitter.png';
import linkedin from '../img/linkedin.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__up'>
        <h2>Start a project</h2>
        <p>
          Interested in working together? We should <br /> queue up a chat. I’ll
          buy the coffee.
        </p>
        <button>Let's go</button>
      </div>
      <div className='footer__down'>
        <div className='footer__down__container'>
          <img
            src={logo}
            alt='logo'
            className='footer__down__container__logo'
          />
          <h2>
            Living, learning, & leveling up <br /> one day at a time.
          </h2>
          <ul>
            <li>
              <a href='#'>
                <img src={github} alt='github' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={twitter} alt='twitter' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={linkedin} alt='linkedin' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={angelist} alt='angelist' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={envelope} alt='envelope' />
              </a>
            </li>
          </ul>
          <p>Created with REACT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
