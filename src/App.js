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

  changeAgeHandler = (newName) => {
    this.setState( {
      persons: [
        {name: newName, age: 48},
        {name: 'William', age: 33}
      ]
    })   
  }

  render() {
    return (
      <div className="App">
        Hello
        <button onClick={this.changeAgeHandler.bind(this, 'bob')}>Change Name</button>
        <UserOutput 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.changeAgeHandler}/>
        <UserOutput 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <UserInput />
      </div>
    );
  }
}
export default App;
