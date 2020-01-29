import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.scss';
import netflix from '../img/netflix.jpg';
import minimalism from '../img/minimalism.jpg';
import fashion from '../img/fashion.png';
import food from '../img/food.png';
import weather from '../img/weather.png';
import budget from '../img/budget.png';

const netflixx = 'Netflix';
const netflixxcontent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt. ';

const minimalismm = 'Minimalism';
const minimalismmcontent =
  'Lorem ipsum dolor sit amet  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, perspiciatis.';

const fashionn = 'Fashion Design';
const fashionncontent =
  'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, excepturi.';

const recipee = 'RecipeApp';
const recipeecontent =
  'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.';

const weatherr = 'Weather App';
const weatherrcontent =
  'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.';

const budgett = 'Budget App';
const budgettcontent =
  'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.';

const Projects = () => {
  return (
    <div className='wrapper'>
      <h1>My Recent Projects</h1>
      <div className='projects'>
        <ProjectItem
          header={netflixx}
          content={netflixxcontent}
          img={netflix}
        />
        <ProjectItem
          header={minimalismm}
          content={minimalismmcontent}
          img={minimalism}
        />
        <ProjectItem
          header={fashionn}
          content={fashionncontent}
          img={fashion}
        />
        <ProjectItem header={recipee} content={recipeecontent} img={food} />
        <ProjectItem
          header={weatherr}
          content={weatherrcontent}
          img={weather}
        />
        <ProjectItem header={budgett} content={budgettcontent} img={budget} />
      </div>
      <a className='projects__button' href='https://github.com/BatuhanYilmazzz'>
        More on Github
      </a>
    </div>
  );
};

export default Projects;
