import React from 'react';
import Header from '../presentation-components/header';
import Form from './form';
import Feedback from '../presentation-components/feedback';

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
      answer: this.createAnswer(),
      currentGuess: "",
      guesses: [],
      feedback: "Make your guess!"
    })
  }

  // changeFeedback(feedback){
  //   this.setState({
  //     feedback: feedback
  //   })
  // }

determineFeedback() {
    let guess = this.state.currentGuess;
    let difference = Math.abs(guess - this.state.answer);
    console.log(difference);

    if(guess === this.state.answer) {
      this.setState({
        feedback: "You guessed the number!"
      })

    } else if (difference <=15 ) {
      this.setState({
        feedback: "Very Hot"
      })

    } else if (difference <=30 ) {
      this.setState({
        feedback: "Warm"
      })

    } else {
      this.setState({
        feedback: "Cold"
      })
    }
  }


  render() {
    const guessList = this.state.guesses.toString();

    return (
      <div className="page-container">
      <div>
      <Header onClick={event => this.generateNewGame()} />
      </div>
      <div>
      <Feedback feedback={this.state.feedback}/>
      </div>
      <div>
      <div>
      <Form guesses={this.state.guesses} onDetermineFeedback = {event => this.determineFeedback()}/>
      </div>
      <div className='guess-list'>
      {guessList}
      </div>
      </div>
      </div>
    );
  }
}
