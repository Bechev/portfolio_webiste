import React from 'react';
import About from './components/About.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bertrand Chevalier</h1>
      <Contact/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
