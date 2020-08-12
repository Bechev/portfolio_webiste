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
                <h3 className="project_name"></h3>
                <img
                    className="project_image"
                    width='250px'
                    src={this.props.image}
                    alt=''
                >
                </img>
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
        )
    }

}

export default Project;