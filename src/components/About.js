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
                            I started my career in France as a Strategy and Operations consultant in the Financial industry.
                            I have been interested in programming since high school learning the basics of programming with online resource (before Youtube existed!). 
                            While stuging Finance in college, I soon became the "coder" in all group projects when it was not yet cool.
                            <br></br>
                            In 2015, I moved to the US where I discovered the concept of bootcamps. I was sold and attended the Flatiron Online Web Developer program.
                            Since then I've been focusing on building projects and deepening my knowledge of programming  
                        </span>
                        <span> </span>
                        <a href="https://twitter.com/search?q=%23datascience&src=typed_query" target='_blank' rel="noopener noreferrer">#datascience</a>
                        <span> </span>
                        <a href="https://twitter.com/search?q=%23bitcoinprotocol&src=typed_query" target='_blank' rel="noopener noreferrer">#bitcoinprotocol</a>
                        <span> ...</span>
                    </p>
                    {/* <p>
                        Started as a Strategy and Operations consultant, transformed into a software engineer through the magic of the Flatiron School bootcamp
                        <br></br>
                        I love back-ends, python, Ruby and hating Javascript.
                        <br></br>
                        This only thing I love more than seeing my code work and being used is to learn new stuff #datascience, #bitcoinProtocol
                    </p>     */}
                </div>
            </div>
        )
    }

}

export default About;