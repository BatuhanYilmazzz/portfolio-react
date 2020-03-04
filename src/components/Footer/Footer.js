import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__up'>
        <h2>Work together</h2>
        <p>
          Do you have an idea ? Let's <br /> make it real together.
        </p>
        <button>Let's go</button>
      </div>
      <div className='footer__down'>
        <div className='footer__down__container'>
          <h1>B&Y</h1>
          <h2>
            He believed he could, <br /> so he did.
          </h2>
          <ul>
            <li>
              <a href='https://github.com/BatuhanYilmazzz'>
                <span>
                  <i className='fab fa-github'></i>
                </span>
              </a>
            </li>
            <li>
              <a href='https://gitlab.com/BatuhanYilmazz'>
                <span>
                  <i className='fab fa-gitlab'></i>
                </span>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/batuhnnylmazz'>
                <i className='fab fa-twitter '></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/ahmetbatuhanyilmaz/'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>
            <li>
              <a href='https://angel.co/ahmet-batuhan-yilmaz'>
                <i className='fab fa-angellist'></i>
              </a>
            </li>
            <li>
              <a href='mailto:a.batuhan.yilmaz@gmail.com'>
                <i className='far fa-envelope'></i>
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
