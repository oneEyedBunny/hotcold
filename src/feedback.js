import React from 'react';

function determineFeedback(props) {
  let guess = props.state.currentGuess;
  let differene = Math.abs(guess - props.state.correctAnswer);
  console.log(difference);

  if(guess = props.state.answer) {
    return props.state.feedback = "You guessed the number!"

  } else if (difference <=15 ) {
    return props.state.feedback = "Very Hot"

  } else if (difference <=30 ) {
    return props.state.feedback = "Warm"

  } else {
    return props.state.feedback = "Cold"
  }
}

export default function Feedback (props) {

  return (
    <div> {determineFeedback(props)}
    </div>

  )
}
