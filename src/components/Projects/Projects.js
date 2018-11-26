import React, { Component } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoaded: false,
      error: ''
    };
  }

  componentWillMount() {
    fetch('/api/projects')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            projects: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error: error
          })
        }
      )
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="Projects">
          <h2 className="code lightgray projects-header">Here's some of my work.</h2>
          <div className="project-card-container">
            {
              this.state.projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={ index } 
                    title={ project.title } 
                    img={ project.img } 
                    description={ project.description } 
                    inProgress={ project.inProgress } 
                    background={ project.background }
                    technologies={ project.technologies }
                    date={ project.date }
                    screenshot={ project.screenshot }
                    redirect={ project.redirect }
                  />
                )
              })
            }
          </div>
        </div>
      );
    } else {
      return (
        <div className="Projects">
          <FontAwesomeIcon className="almost-white fa-spin" icon={ faAtom } size="6x"/>
        </div>
      );
    }
  }
}

export default Projects;