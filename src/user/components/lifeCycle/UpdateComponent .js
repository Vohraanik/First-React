import React, { Component } from 'react';

class UpdateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    if (prevState.count !== this.state.count) {
      console.log('Count has changed:', this.state.count);
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Update Component Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment Count</button>
      </div>
    );
  }
}

export default UpdateComponent;
