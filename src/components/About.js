import React, { Component } from 'react';
import './components.css'

class About extends Component {

    // constructor(props) {
    //     super(props);
    //     }
    // }

    render() {

        return (
            <div className="about">
                <h2>About</h2>
                {/* <h3>About</h3> */}
                <div class='text'>
                    <p>
                        <span>
                            I have been interested in programming since high school learning the basics of programming with online resource (and that's before Youtube existed). 
                            While studying Finance in college, I soon became the "coder" in all group projects when it was not yet cool.
                            <br></br>
                            Fast forward to 2015, I moved to the US and discovered the concept of bootcamps. I was sold and attended the Flatiron Online Web Developer program.
                            <br></br>
                            Since then I oriented my career towards coding, becoming the "Mr Automation" of my company. I took an got an internal data science certification using R and Pyton.
                            <br></br>
                            On the side, I've been focusing on building projects and deepening my knowledge of programming and exploring new technologies 
                        </span>
                        <span> </span>
                        <a 
                            href="https://twitter.com/search?q=%23datascience&src=typed_query" 
                            target='_blank' 
                            rel="noopener noreferrer">
                                #datascience, 
                        </a>
                        <span> </span>
                        <a 
                            href="https://twitter.com/search?q=%23bitcoinprotocol&src=typed_query" 
                            target='_blank' 
                            rel="noopener noreferrer">
                                #bitcoinprotocol
                            </a>
                        <span> ...</span>
                    </p>
                </div>
            </div>
        )
    }

}

export default About;