import React from 'react';
import About from './components/About.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bertrand Chevalier</h1>
      <div className="description">
        I love coding, building and learning.
      </div>
      <Contact/>
      <About/>
      <br></br>
      <br></br>
      <br></br>
      <Portfolio/>
    </div>
  );
}

export default App;
