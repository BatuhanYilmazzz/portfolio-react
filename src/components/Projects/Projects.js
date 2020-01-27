import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.scss';
import netflix from '../img/netflix.jpg';
import minimalism from '../img/minimalism.jpg';
import fashion from '../img/fashion.png';
import food from '../img/food.png';
import weather from '../img/weather.png';
import budget from '../img/budget.png';

const Projects = () => {
  const header = 'header';
  const content =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt. ';

  return (
    <div className='wrapper'>
      <h1>My Recent Projects</h1>
      <div className='projects'>
        <ProjectItem header={header} content={content} img={netflix} />
        <ProjectItem header={header} content={content} img={minimalism} />
        <ProjectItem header={header} content={content} img={fashion} />
        <ProjectItem header={header} content={content} img={food} />
        <ProjectItem header={header} content={content} img={weather} />
        <ProjectItem header={header} content={content} img={budget} />
      </div>
      <a className='projects__button' href='https://github.com/BatuhanYilmazzz'>
        More on Github
      </a>
    </div>
  );
};

export default Projects;
