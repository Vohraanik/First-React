import React, { Component } from 'react'
import Student from './Student';

export default class ComponentWILLMOUNT extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true
        }
    }
    
  render() {
    return (
      <div>
        <>
        {
            this.state.show ? <Student /> :<h1>Chiled Component Remove</h1>
        }
        <button onClick={() => this.setState({ show: !this.state.show })} >toggle Chiled Component</button>
        </>
      </div>
    )
  }
}
