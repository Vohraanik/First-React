import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <p>This is a simple class component.</p>
      </div>
    );
  }
}

export default SimpleComponent;
