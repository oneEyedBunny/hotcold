import React from 'react';
import GuessCount from './guess-count';

export default class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
    value= event.target.value
    guess= parseInt(value, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
    } else {
      this.setState({value: value});
      guesses.push(value);
    }
  }

  render () {
    const guesses = this.props.state.guesses;

    return (
      <form onSubmit={event => this.onSubmit(event)}>
      <input
      type="number"
      name="userGuess"
      value="this.props.state.value"
      aria-label="your number guess"
      min="1"
      max="100"
      required
      />
      <button
      type="submit"
      name="submit"
      id="guessButton"
      >Guess
      </button>
      <div>
      <GuessCount {...guesses} />
      </div>
      </form>
    );
  }
}
