import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.scss';

const Projects = () => {
  return (
    <div className='wrapper'>
      <h1>My Recent Projects</h1>
      <div className='projects'>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className='projects'>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <a className='projects__button' href='#'>
        More on Github
      </a>
    </div>
  );
};

export default Projects;
