import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';
import ProjectModal from '../ProjectModal/ProjectModal';
import './ProjectCard.css';

var cardColor = {
  backgroundColor: 'rgb(168, 166, 166)'
};

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    const { title, img, description, inProgress, background, technologies, date, screenshot, redirect } = this.props;
    var displayStatus = "hidden"

    if (inProgress) {
      displayStatus = "";
    }

    return (
      <Card className="project-card" style={ cardColor } onClick={ this.toggle }>
        <CardTitle className="source-sans card-title">{ title } <span className={ displayStatus + " in-progress" }>In-Progress</span></CardTitle>
          <div className="card-img-container">
            <CardImg top className="card-img" src={ img } />
          </div>
        <CardBody className="card-body">
          <CardText className="">{ description }</CardText>
        </CardBody>
        <ProjectModal 
          modal={ this.state.modal } 
          toggle={ this.toggle }
          title={ title }
          background={ background }
          technologies={ technologies }
          date={ date }
          screenshot={ screenshot }
          redirect={ redirect }
        />
      </Card>
    );
  }
}

export default ProjectCard;