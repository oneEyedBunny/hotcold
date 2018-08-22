import React from 'react';

export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = { value: ''};
        
        this.onSubmit = this.onSubmit.bind(this);
    }

      onSubmit(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
    }

    return (
        <form className="guess" onSubmit={(e) => this.onSubmit(e)}>
            <input
                type="number"
                // ref={input => this.textInput = input}
                aria-label="your number guess"
                min = "1"
                max = "100"
            />
            <button>Guess</button>
            <button type="button" value={this.state.value} onClick={() => this.onSubmit}>
            </button>
        </form>
    );
}