import React, { Component } from 'react';
import Project from './Project.js'
import image_placeholder from '../logos/image_placeholder.jpg'
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
                <Project 
                    link="http://bertrandchevalier.com/losertictactoe/index.html" 
                    name="Losing Tic Tac Toe"
                    image={image_placeholder} 
                    description="This project does this and that and that"
                    technology={[ "HTML", "Vanilla Javascript", "Minimax Algorythm"]}
                >
                </Project>
                <Project 
                    link="www.placeholder.com" 
                    image={image_placeholder} 
                    description="This project does this and that and that"
                    technology={[ "tech1", "tech2", "tech3"]}
                >
                </Project>
            </div>
        )
    }
}

export default Portfolio;