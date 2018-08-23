import React from 'react';

export default function Header(props) {

  return (
    <div className='header'>
    <div className='new-game'></div>
    <button onClick={props.onClick} >New Game</button>
    <div>Hot or Cold?</div>
    </div>
  )
}
