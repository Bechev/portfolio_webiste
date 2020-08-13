import React, { Component } from 'react';
import './components.css'


class Link extends Component {

    // constructor(props) {
    //     super(props);
    //     };
    // }

    render() {

        return (
            // <div>

                <a
                className={'logo '}
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img
                    class = {this.props.class}
                    width='30px'
                    src={this.props.image}
                    alt=''
                    >
                    </img>
                </a>
            // {/* </div> */}
        );
    }
}

export default Link;