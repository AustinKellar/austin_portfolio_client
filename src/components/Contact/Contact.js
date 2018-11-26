import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  };

  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  };

  onSend(event) {
    var name = this.state.name;
    var email = this.state.email;
    var message = document.getElementById('message').innerText;

    console.log(name);
    console.log(email);
    console.log(message);
  }

  render() {
    return (
      <div className="Contact">
        <div className="email-header lightgray code">Like my work? Contact me.</div>
        <div className="message-box">
          <div className="name-email">
            <div className="name">
              <input required className="code input" placeholder="Name" value={ this.state.name } onChange={ this.onNameChange }/>
            </div>
            <div className="email">
              <input required className="code input" placeholder="Email" value={ this.state.email } onChange={ this.onEmailChange }/>
            </div>
          </div>
          <div className="message">
            <div id="message" contentEditable="true" className="code textarea" type="textarea" data-text="Message"></div>
          </div>
          <button className="right send lightgray" onClick={ this.onSend }><FontAwesomeIcon icon={ faPaperPlane }/></button>
        </div>
      </div>
    );
  }
}

export default Contact;