import React, { useState } from 'react';
import CardItem from './CardItem';
import './index.css';
import photo from '../img/one.png';
import photo2 from '../img/two.png';
import photo3 from '../img/three.png';
import photo4 from '../img/four.png';
import photo5 from '../img/five.png';
import photo6 from '../img/one.png';

const Cards = () => {
  const [works, setWorks] = useState([
    {
      h1: 'Lorem, ipsum dolor. Lorem, ipsum dolor.',
      p:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, commodi.',
      photo: photo
    },
    {
      h1: 'Lorem, ipsum dolor.',
      p:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, commodi.',
      photo: photo2
    },
    {
      h1: 'Lorem, ipsum dolor.',
      p:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, commodi.',
      photo: photo3
    },
    {
      h1: 'Lorem, ipsum dolor.',
      p:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, commodi.',
      photo: photo4
    },
    {
      h1: 'Lorem, ipsum dolor.',
      p:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, commodi.',
      photo: photo5
    },
    {
      h1: 'Lorem, ipsum dolor.',
      p:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, commodi.',
      photo: photo6
    }
  ]);
  return (
    <div className='wrapper'>
      {works.map((work, index) => (
        <CardItem key={index} work={work} />
      ))}
    </div>
  );
};

export default Cards;
