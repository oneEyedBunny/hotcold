  import React from 'react';

  export default function GuessCount(props) {
      return (
          <h2 id="guessCount">
              Guess # <span id="count">{props.guesses.length}</span>
          </h2>
      );
  }
