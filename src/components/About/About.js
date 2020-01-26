import React from 'react';

import './About.scss';

const About = () => {
  return (
    <React.Fragment>
      <div className='about'>
        <div className='about__content'>
          <h1>
            Hi, I’m Batuhan. <br /> Nice to see you.
          </h1>
          <p>
            ince beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </div>
      <div className='about__skill'>
        <div className='about__skill__designer'>
          <h2>UI Designer</h2>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <h4>Things I can do for you</h4>
          <p>UI/UX Design, Web Design ,Mobile Design</p>
          <h4>Design Tools:</h4>
          <ul>
            <li>Adobe xd</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
        <div className='about__skill__developer'>
          <h2>Full Stack Developer</h2>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h4>Software I can offer you</h4>
          <p>
            Html5,Css3,Javascript,React,
            <br />
            Scss,Nodejs,Express
          </p>
          <h4>Dev Tools</h4>
          <ul>
            <li>Bootstrap</li>
            <li>Github</li>
            <li>Terminal</li>
            <li>Git</li>
            <li>Vscode</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
