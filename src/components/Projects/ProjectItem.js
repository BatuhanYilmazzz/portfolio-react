import React from 'react';
import './ProjectItem.scss';

const ProjectItem = ({ header, content, img }) => {
  return (
    <div className='card'>
      <div className='overlay'></div>
      <img src={img} alt='projects' />
      <div className='info'>
        <h3>{header}</h3>
        <p>{content}</p>
        <button>More</button>
      </div>
    </div>
  );
};

export default ProjectItem;
