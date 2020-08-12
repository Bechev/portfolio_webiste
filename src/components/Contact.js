import React, { Component } from 'react';
import Link from './Link.js'
import email_logo from '../logos/email_logo.png';
import twitter_logo from '../logos/twitter_logo.png';
import github_logo from '../logos/github_logo.png';
import './components.css'


class Contact extends Component {

    // constructor(props) {
    //     super(props);
    //     }
    // }

    render() {

        return (
            <div className="contact">
                <Link link="mailto:bertrand.chevalier@gmail.com" image={email_logo} class="email"/>
                <Link link="https://github.com/Bechev" image={github_logo} class="github"/>
                <Link link="https://twitter.com/bct_here" image={twitter_logo} class="twitter"/>
            </div>
        )
    }

}

export default Contact;