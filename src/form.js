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
    let value= event.target.value
    let guess= parseInt(value, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
    } else {
      this.setState({value: value});
      this.props.guesses.push(value);
      this.props.ondetermineFeedback();
    }
  }

  render () {
    const guesses = this.props.guesses;

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
      <GuessCount guesses={guesses} />
      </div>
      </form>
    );
  }
}
