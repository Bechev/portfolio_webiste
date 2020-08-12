import React, { Component } from 'react';
import Project from './Project.js'
import image_placeholder from '../images/image_placeholder.jpg'
import blackjack_screenshot from '../images/blackjack_screenshot.png'
import losertictactoe_screenshot from '../images/losertictactoe_screenshot.png'
import './components.css'



class Portfolio extends Component {

    // constructor(props) {
    //     super(props);
    //     }
    // }

    render() {

        return (
            <div className="portfolio">
                <h2>Some stuff I built</h2>
                <Project 
                    link="http://bertrandchevalier.com/losertictactoe/index.html" 
                    name="Losing Tic Tac Toe"
                    image={losertictactoe_screenshot} 
                    description="This project makes Tic Tac Toe interesting again by changing the game's objective. You're X, the AI is O, try to lose, good luck."
                    technology={[ "HTML", "Vanilla Javascript", "Minimax Algorithm"]}/>
                
                <Project 
                    link="https://lightnino.herokuapp.com/" 
                    name="Online Black Jack"
                    image={blackjack_screenshot} 
                    description="When gambling is illegal, you can always play Black Jack here. And you won't lose money. Won't make any either though..."
                    technology={[ "React", "Ruby on Rails", "Postgres"]}/>

                <Project 
                    link="https://simmering.herokuapp.com/" 
                    name="Simmering"
                    image={image_placeholder} 
                    description="A website that changes the way you do your groceries by making it easy to eat seasonal and local food while reducing waste"
                    technology={[ "React-Redux", "Ruby on Rails", "Devise-token-auth"]}/>
            </div>  
        )
    }
}

export default Portfolio;