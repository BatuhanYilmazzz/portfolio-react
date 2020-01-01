import React from 'react';
import './index.css';

const CardItem = ({ work, index }) => {
  return (
    <div className='card'>
      <img src={work.photo} />
      <div className='info'>
        <h1>{work.h1}</h1>
        <p>{work.p}</p>
        <button>
          <i className='fab fa-github fa-2x'></i>
        </button>
      </div>
    </div>
  );
};

export default CardItem;
