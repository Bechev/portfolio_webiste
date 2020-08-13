import React from 'react';
import About from './components/About.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import ScrollArrow from './components/ScrollArrow'
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="background">
        <h1>Bertrand Chevalier</h1>
        <div className="description">
          I love coding, building and learning.
        </div>
        <Contact/>
        <About/>
        <br></br>
        <Portfolio/>
        <ScrollArrow/>
      </div>
    </div>
  );
}

export default App;
