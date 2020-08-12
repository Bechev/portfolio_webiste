import React, { Component } from 'react';
import Project from './Project.js'
import './components.css'



class Portfolio extends Component {

    // constructor(props) {
    //     super(props);
    //     }
    // }

    render() {

        return (
            <div className="portfolio">
                <h2>Stuff I built</h2>
                <Project/>
            </div>
        )
    }
}

export default Portfolio;