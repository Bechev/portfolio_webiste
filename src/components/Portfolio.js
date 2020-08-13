import React, { Component } from 'react';
import Project from './Project.js'
import image_placeholder from '../images/image_placeholder.jpg'
import simmering_screenshot from '../images/simmering_screenshot.png'
import losertictactoe_screenshot from '../images/losertictactoe_screenshot.png'
import blackjack_screenshot from '../images/blackjack_screenshot.png'
import onedayonepun_screenshot from '../images/1day1pun_screenshot.png'
import pythonblackjack_screenshot from '../images/pythonblackjack_screenshot.png'
import './components.css'



class Portfolio extends Component {

    render() {

        return (
            <div className="portfolio">
                <h2>Some stuff I built</h2>
                <Project 
                    link="http://bertrandchevalier.com/Simmering%20demo.mp4" 
                    name="Meal Planning WebApp"
                    image={simmering_screenshot}
                    description="A website that changes the way you do your groceries by making it easy to eat seasonal and local food while reducing waste"
                    technology={[ "React-Redux", "Ruby on Rails", "SQLite database", "Selenium scripts to scrap websites to populate database"]}/>

                <Project 
                    link="https://lightnino.herokuapp.com/" 
                    name="Online Black Jack"
                    image={blackjack_screenshot} 
                    description="When gambling is illegal, you can always play Black Jack here. And you won't lose money. Won't make any either though..."
                    technology={[ "React", "Ruby on Rails", "Postgres database", "ActiveRecord"]}/>

                <Project 
                    link="http://bertrandchevalier.com/losingtictactoe/index.html" 
                    name="Losing Tic Tac Toe"
                    image={losertictactoe_screenshot} 
                    description="This project makes Tic Tac Toe interesting again by changing the game's objective. You're X, the AI is O, try to lose, good luck."
                    technology={[ "HTML", "Vanilla Javascript", "Minimax Algorithm"]}/>

                <Project 
                    link="https://bertrandchevalier.com/Python%20blackjack%20demo.mp4" 
                    name="Python CLI BlackJack"
                    image={pythonblackjack_screenshot} 
                    description="Do I like too much developping Black Jack games? Probably, but this is in Python and CLI only. So it changes a bit. No?"
                    technology={[ "Python", "Pytest", "Python Error handling"]}/>
                
                <Project 
                    link="https://twitter.com/1day1pun" 
                    name="One day, one pun"
                    image={onedayonepun_screenshot} 
                    description="Too lame to be dad jokes, too important not to exist. Your daily pun provided through Twitter"
                    technology={[ "Twitter bot", "Ruby on Rails", "Heroku"]}/>

            </div>  
        )
    }
}

export default Portfolio;