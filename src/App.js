import React from 'react';
import Header from './header';
import Form from './form';
import Feedback from './feedback';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: this.createAnswer(),
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
      answer: createAnswer(),
      currentGuess: "",
      guesses: [],
      feedback: "Make your guess!"
    })
  }

  render() {
    const guessList = this.state.guesses.toSting();

    return (
      <div className="page-container">
      <div>
      <Header onClick={event => this.generateNewGame()} />
      </div>
      <div>
      <Feedback  props={this.state}/>
      </div>
      <div>
      <div>
      <Form />
      </div>
      <div className='guess-list'>
      {guessList}
      </div>
      </div>
      </div>
    );
  }
}
