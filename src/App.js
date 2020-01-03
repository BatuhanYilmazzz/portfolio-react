import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import './components/index.css';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Header />
        <h2>My recent work</h2>
        <Cards />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
