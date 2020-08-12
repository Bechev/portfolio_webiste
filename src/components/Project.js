import React, { Component } from 'react';
import './components.css'


class Project extends Component {

    renderTechnology(){
        return(
            this.props.technology.map(technology => {
                return(
                    <li>
                        {technology}
                    </li>
                )
            })
        )
    }


    render() {
        
        return (
            <div className="project">
                <a 
                href={this.props.link} 
                target="_blank"
                rel="noopener noreferrer">

                    <div className="project_header">
                        <h3 className="project_name">
                            <a href={this.props.link} 
                            target="_blank"
                            rel="noopener noreferrer">
                                {this.props.name}
                            </a>
                        </h3>
                    </div>

                    <div className="project_body">
                        <img
                            className="project_image"
                            width='250px'
                            height='250px'
                            src={this.props.image}
                            alt=''
                        ></img>

                        <div className="project_card">
                            <div className="project_description">
                                {this.props.description}
                            </div>

                            <div className="project_technology">
                                <ul>
                                    {this.renderTechnology()}
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </a>
            </div>
        )
    }

}

export default Project;