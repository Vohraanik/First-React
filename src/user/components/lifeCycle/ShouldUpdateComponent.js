import React, { Component } from 'react';

class ShouldUpdateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log('Component rendered');
    return (
      <div>
        <h1>shouldComponentUpdate Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment Count</button>
      </div>
    );
  }
}

export default ShouldUpdateComponent;
