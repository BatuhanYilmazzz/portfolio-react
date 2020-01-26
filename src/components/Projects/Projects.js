import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.scss';
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/three.png';
import four from '../img/four.png';
import five from '../img/five.png';
import six from '../img/one.png';

const Projects = () => {
  const header = 'header';
  const content =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt. ';

  return (
    <div className='wrapper'>
      <h1>My Recent Projects</h1>
      <div className='projects'>
        <ProjectItem header={header} content={content} img={one} />
        <ProjectItem header={header} content={content} img={two} />
        <ProjectItem header={header} content={content} img={three} />
        <ProjectItem header={header} content={content} img={four} />
        <ProjectItem header={header} content={content} img={five} />
        <ProjectItem header={header} content={content} img={six} />
      </div>
      <a className='projects__button' href='https://github.com/BatuhanYilmazzz'>
        More on Github
      </a>
    </div>
  );
};

export default Projects;
