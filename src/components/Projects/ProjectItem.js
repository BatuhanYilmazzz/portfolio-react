import React from 'react';
import './ProjectItem.scss';

const ProjectItem = ({ header, content, img }) => {
  return (
    <div className='card'>
      <div className='overlay'></div>
      <img src={img} alt='projects' />
      <div className='info'>
        <h2>{header}</h2>
        <p>{content}</p>
        <a href='www.batuhan.com'>Live</a>
      </div>
    </div>
  );
};

export default ProjectItem;
