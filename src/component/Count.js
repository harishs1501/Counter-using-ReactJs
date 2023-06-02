import React from 'react';
import '../App.css';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  Changenum() {
    this.setState({
      num: this.state.num + 1,
    });
  }

  render() {
    return (
        <div>
        <h1>No of clicks - {this.state.num}</h1>
        <button onClick={() => this.Changenum()}>Count when button clicked</button>
      </div>
    );
  }
}

export default Count;