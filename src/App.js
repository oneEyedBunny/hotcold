import React from 'react';
import Header from './header';
import Form from './form';
import Output from './output';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: this.createAnswer,
      guess: ''
    }
  }

  createAnswer() {
    return Math.floor(Math.random() * 100);
  }

  generateNewGame() {
    console.log(testing);
  }

  render() {
    console.log("testing here");


    return (
      <div className='header'>
        <Header />
      </div>
      <div className='quiz-container'>
        <div>Make Your Guess!</div>
        <div className='input-area'>
          console.log("Hi");
          <Form />
        </div>
        <div className='output-area'>
          <Output /> 
        </div>
      </div>
    );
  }
}

