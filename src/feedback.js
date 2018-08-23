import React from 'react';

function determineFeedback(props) {
    let guess = props.state.currentGuess
    let differene = Math.abs(guess - props.state.correctAnswer);

    if(guess = props.state.answer) {
        return props.state.feedback = "You guessed the number!"
        
    } elseif (difference <=15 ) {
        return props.state.feedback = "Very Hot"

    } elseif (difference <=30 ) {
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
