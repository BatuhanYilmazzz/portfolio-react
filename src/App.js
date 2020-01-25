import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
