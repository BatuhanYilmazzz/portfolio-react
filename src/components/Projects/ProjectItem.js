import React from 'react';
import project from '../img/project.jpg';
import './ProjectItem.scss';

const ProjectItem = () => {
  return (
    <div className='card'>
      <img src={project} alt='projects' />
      <div className='info'>
        <h1>Protester</h1>
        <p>
          Lorem Ipsum is simply dummy text from the printing and typeseting
          industry
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default ProjectItem;
