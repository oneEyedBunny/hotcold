import React from 'react';

export default function Output(props) {
    let guess = this.state.guess

    return (
        if(guess = this.state.answer) {
            //text > you guess correctly
        } elseif (guess> this.state.answer + 15 || guess< this.state.answer  + 15) {
            //log +guess
            //text > very hot
        } elseif (guess> this.state.answer  + 20 || guess< this.state.answer  + 20) {
            //log +guess
            //text >> hot
        } else {
            //log +guess
            // text >> cold
        }
    )
}