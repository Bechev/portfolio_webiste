import React from 'react';
import About from './components/About.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import './App.css';

function App() {
  topFunction(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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
        <button onclick={this.topFunction()} id="myBtn" title="Go to top">Top</button>
      </div>
    </div>
  );
}

export default App;
