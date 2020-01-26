import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
