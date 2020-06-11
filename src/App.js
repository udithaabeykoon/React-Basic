import React, { Component } from 'react';
import './App.css';
import Output from './Output/Output';
import Input from './Input/Input';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    userInput: ''
  };

  inputChangeHandlet = (event) => {
    this.setState({
      userInput: event.target.value
    });
  };

  onClickChar = (index) =>{
    console.log(index);
    const name = this.state.userInput.split('');
    name.splice(index,1);
    this.setState({
      userInput:name.join('')
    });
    
    
  };


  render() {

    const CharList = this.state.userInput.split('').map((char,index) => {
      return <Char 
      character={char} 
      key={index}
      click={()=>{this.onClickChar(index)}}
      />
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandlet}
          value={this.state.userInput}>

        </input>

        <p>{this.state.userInput}</p>
        <Validation count={this.state.userInput.length}/>
        {CharList}

      </div>
    );
  }
}

export default App;
