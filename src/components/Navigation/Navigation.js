import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Navigation.css';

var navHeader = {
  fontSize: '22px'
};

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Navigation">
        <Navbar className="fixed-top nav-underline" dark expand="md">
          <NavbarBrand className="nav-home code underline almost-white" style={ navHeader } href="/">Austin Kellar</NavbarBrand>
          <NavbarToggler onClick={ this.toggle } />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="code underline" href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="code underline" href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route exact path="/" component={ Home } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />
      </div>
    );
  }
}

export default Navigation;