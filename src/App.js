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
        I love coding, in Python, in Ruby, in JavaScript and other languages I have yet to discover.
        <br></br>
        I focus on building and learning.
      </div>
      <Contact/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
