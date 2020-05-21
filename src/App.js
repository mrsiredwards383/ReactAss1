import React, { Component } from 'react';
import './App.css';
import './UserInput.js';
import './UserOutput.js';
import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Bella', age: 17},
      {name: 'William', age: 22}
    ]
  }

  render() {
    return (
      <div className="App">
        Hello
        <UserInput />
        <UserOutput name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <UserOutput name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}
export default App;
