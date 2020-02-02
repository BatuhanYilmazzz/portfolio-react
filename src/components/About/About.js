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
            I graduated with a degree in Aeronautical Engineering from the
            Turkish Air Force Academy , had worked for several years as a
            project officer at Turkish Air Force and received 8+ certificates of
            excellence from the top commanders of the Turkish Air Force before
            making the switch to software dev. <br /> <br />
            Design has been always my passion. I decided to give a chance to
            myself, so here I am. You can see down below my skills I can offer
            you. Also I'm currently looking for my next development
            position--feel free to reach out if you'd like to talk!
          </p>
        </div>
      </div>
      <div className='about__skill'>
        <div className='about__skill__designer'>
          <h2>UI Designer</h2>
          <p>
            Design has been always part of me.I always aim to simplicity on
            every projects.
          </p>
          <h4>Things I can do for you</h4>
          <p>UI/UX Design, Web Design ,Mobile Design</p>
          <h4>Design Tools</h4>
          <ul>
            <li>Adobe xd</li>
            <li>Adobe Photoshop CC</li>
          </ul>
        </div>
        <div className='about__skill__developer'>
          <h2>Full Stack Developer</h2>
          <p>
            Coding sth is like bringing pieces of puzzle together for me. I love
            it and enjoy with it.
          </p>
          <h4>Software I can offer you</h4>
          <p>
            Html5,Css3,Scss,Javascript,
            <br />
            React,Nodejs,Express
          </p>
          <h4>Dev Tools</h4>
          <ul>
            <li>Github</li>
            <li>Terminal</li>
            <li>Vscode</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
