import React, { Component } from 'react';
import './components.css'


class Link extends Component {

    // constructor(props) {
    //     super(props);
    //     };
    // }

    render() {

        return (
            <div>

                <a
                className={'logo ' + this.props.class}
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img
                    width='30px'
                    src={this.props.image}
                    alt=''
                    >
                    </img>
                </a>
            </div>
        );
    }
}

export default Link;