import React, { Component } from 'react';

import murderRobotDog from './plain/murderRobotDog';
import './App.css';

class App extends Component {
  constructor(props) {
    //pass to parent
    super(props);
    //set initial state
    this.state = {
      murderRobotDog: { }
    }

  }

  componentDidMount() {

    this.setState({murderRobotDog: murderRobotDog('guerilla') });
  }

  bark() {
    this.state.murderRobotDog.bark();
  }

  drive() {
    this.state.murderRobotDog.drive();
  }

  kill() {
    this.state.murderRobotDog.kill();
  }

  render() {
    return (
      <div>
        <button onClick={(e) => {
          this.bark();
        } }>bark</button>
        <button onClick={(e) => {
          this.drive();
        } }>drive</button>
        <button onClick={(e) => {
          this.kill();
        } }>kill</button>
      </div>
    );
  }
}

export default App;
