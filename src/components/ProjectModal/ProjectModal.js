import React, { Component } from 'react';
import { Button, Badge, Modal, ModalBody, ModalFooter } from 'reactstrap';
import './ProjectModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

var technologyBadges = function(technologies) {
  return technologies.map((technology, index) => {
    return (
      <div key={ index } className="technology-badge"><Badge>{ technology }</Badge></div>
    );
  });
};

var assembleTechnologies = function(technologies) {
  return (
    <div className="technologies">
      { technologyBadges(technologies) }
    </div>
  );
};

var splitBackgroundParagraphs = function(background) {
  return background.map((paragraph, index) => {
    return (
      <div key={ index } className="source-sans indented modal-paragraph">
        { paragraph }
      </div>
    );
  });
};

var assembleBackground = function(background) {
  return <div className="modal-background">
    { splitBackgroundParagraphs(background) }
  </div>
};

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technologyBadges: '',
      background: '',
      imgHide: 'hidden',
      iconHide: '',
      projectStatus: ''
    };
    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.viewProject = this.viewProject.bind(this);
  }

  componentDidMount() {
    var project = '';
    if (this.props.redirect === '') {
      project = 'hidden';
    }
    this.setState({
      technologyBadges: assembleTechnologies(this.props.technologies),
      background: assembleBackground(this.props.background),
      projectStatus: project
    })
  }

  handleImageLoad() {
    this.setState({
      imgHide: '',
      iconHide: 'hidden'
    });
  }

  viewProject() {
    var win = window.open(this.props.redirect, '_blank');
    win.focus();
  }

  render() {
    return (
      <Modal isOpen={ this.props.modal } toggle={ this.props.toggle } size="lg">
        <ModalBody className="modal-background-color">
          <div className="top-row">
            <div className="descriptors">
              <div className="source-sans modal-title">{ this.props.title }<span className="source-sans modal-date right">{ this.props.date }</span></div>
            </div>
            <div>
              <a href={ this.props.screenshot }><img className={ this.state.imgHide + ' modal-img' } onLoad={ this.handleImageLoad } src={ this.props.screenshot } alt="A screenshot of the project"/></a>
              <FontAwesomeIcon className={ this.state.iconHide + ' fa-spin'} icon={faAtom} size="6x"/>
            </div>
          </div>
          <div className="code technologies">{ this.state.technologyBadges }</div> 
          <div className="modal-background indented source-sans">
          { this.state.background }
          </div>
        </ModalBody>
        <ModalFooter className="modal-background-color modal-footer-border">
          <div className={ this.state.projectStatus }>
          <Button onClick={ this.viewProject }>View Project</Button>
          </div>
          <Button onClick={ this.props.toggle }>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ProjectModal;