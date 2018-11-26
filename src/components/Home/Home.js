import React, { Component } from 'react';
import './Home.css';

var bio = (
  <p className="indented">
    I'm a full stack Web Developer from Thousand Oaks, California.
    I love to line dance, workout at CrossFit and purchase Spider-Man themed 
    household goods. At work, I love to develop in the MEAN stack, Django, React and Bootstrap,
    though while working at ZPower, I also enjoyed using C#.NET and Python.
    In June 2019, I will attain my BS in Computer Science: Game Design from UC Santa Cruz. 
    After that, I will be ready and excited to start working in industry! If you want a punctual, 
    hard-working, Spider-Man loving web developer, I'm your guy!
  </p>  
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Bello'
    };
  }
  
  componentDidMount() {
    var self = this;
    setTimeout(() => {
      self.setState({
        greeting: 'Hello'
      });
    }, 500)
  }

  render() {
    return (
      <div className="Home">
        <div className="name-plate name-plate-sizing">
            <div className="source-sans almost-white">{ this.state.greeting + ', my name is Austin.' }</div>
        </div>
        <div className="bio bio-sizing almost-white code">
          { bio }
        </div>
      </div>
    );
  }
}

export default Home;