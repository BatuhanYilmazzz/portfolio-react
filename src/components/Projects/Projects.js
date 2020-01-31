import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.scss';
import netflix from '../img/netflix.png';
import minimalism from '../img/minimalism.jpg';
import fashion from '../img/fashion.jpg';
import recipe from '../img/recipe.jpg';
import weather from '../img/weather.jpg';
import budget from '../img/budget.jpg';

const netflixx = 'Netflix Landing Page';
const netflixxcontent =
  ' This is one my favourite projects.I love having Netflix in my life.So I decided to make meaningfull for myself.Also it is full responsive for every device.';
const createdwithnetflix = '#React Hooks, #Scss';
const sourcenetflix = 'https://www.google.com.tr/';

const minimalismm = 'Minimalism';
const minimalismmcontent =
  'I can easily say that minimalism has huge impact in my daily life and tried to reflect one of my part in this website.It is full responsive and has reusable components in every part.';
const createdwithminimalism = '#Html5, #Css3, #Scss';
const sourceminimalism = 'https://batuhanyilmazzz.github.io/MinimalistDesign/';

const fashionn = 'Fashion B&Y';
const fashionncontent =
  'This project one my website projects.It was builded with Scss and it is full responsive.';
const createdwithfashion = '#Html5, #Css3, #Scss';
const sourcefashion = 'https://batuhanyilmazzz.github.io/MinimalistDesign/';

const recipee = 'Recipe App';
const recipeecontent =
  'This project is all about cooking.You can reach recipes that you want to cook.If you want more about it , app will direct you.Have a nice meal.';
const createdwithrecipe = '#React Hooks, #Scss, #RestAPI';
const sourcerecipe = 'https://batuhanyilmazzz.github.io/MinimalistDesign/';

const weatherr = 'Weather App';
const weatherrcontent =
  'Will you go camping and need every information about the weather?You are at right place.With this app you can easily learn  wind speed,humidity etc.Have a nice camping.';
const createdwithweather = '#React Hooks, #Scss, #RestAPI';
const sourceweather = 'https://batuhanyilmazzz.github.io/MinimalistDesign/';

const budgett = 'Expense Calculator';
const budgettcontent =
  'This project designed for calculate your daily or monthly expense.It was created by using Context API.You can use in every devices so it is full responsive.';
const createdwithbudget = '#React Hooks, #ContextAPI';
const sourcebudget = 'https://batuhanyilmazzz.github.io/MinimalistDesign/';

const Projects = () => {
  return (
    <div className='wrapper'>
      <h1>My Recent Projects</h1>
      <div className='projects'>
        <ProjectItem
          header={netflixx}
          content={netflixxcontent}
          created={createdwithnetflix}
          img={netflix}
          source={sourcenetflix}
        />
        <ProjectItem
          header={weatherr}
          content={weatherrcontent}
          created={createdwithweather}
          img={weather}
          source={sourceweather}
        />
        <ProjectItem
          header={recipee}
          content={recipeecontent}
          created={createdwithrecipe}
          img={recipe}
          source={sourcerecipe}
        />
        <ProjectItem
          header={fashionn}
          content={fashionncontent}
          created={createdwithfashion}
          img={fashion}
          source={sourcefashion}
        />
        <ProjectItem
          header={minimalismm}
          content={minimalismmcontent}
          created={createdwithminimalism}
          img={minimalism}
          source={sourceminimalism}
        />

        <ProjectItem
          header={budgett}
          content={budgettcontent}
          created={createdwithbudget}
          img={budget}
          source={sourcebudget}
        />
      </div>
      <a className='projects__button' href='https://github.com/BatuhanYilmazzz'>
        More on Github
      </a>
    </div>
  );
};

export default Projects;
