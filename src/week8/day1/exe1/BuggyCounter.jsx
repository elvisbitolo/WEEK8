import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    if (this.state.counter === 5) {
      // Simulation of a crash
      throw new Error('I crashed!');
    }
    return (
      <div 
        onClick={this.handleClick} 
        className="cursor-pointer p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center inline-block min-w-32"
      >
        <span className="text-xl font-mono">{this.state.counter}</span>
      </div>
    );
  }
}

export default BuggyCounter;
