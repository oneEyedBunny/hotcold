import React from 'react';
import Header from './header';
import Form from './form';
import Feedback from './feedback';
import GuessCount from './guess-count';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: this.createAnswer,
      currentGuess: "",
      guesses: [],
      feedback: "Make your guess!"
    }
  }

  createAnswer() {
    return Math.floor(Math.random() * 100);
  }

  generateNewGame() {
    this.setState( {
      answer: this.createAnswer,
      guesses: [],
    })
  }

  render() {
    console.log("testing here");

    return (
      <div>
        <Header />
      </div>
      <div>
       <Feedback  props={this.state}/>
     </div>
      <div>
        <div>
          <Form />
        </div>
        <div className='guess-list'>
          {this.props.state.guesses} 
        </div>
      </div>
    );
  }
}

