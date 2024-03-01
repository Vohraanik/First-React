import React, { Component } from 'react'

export default class CounterClassFun extends Component {
    constructor(){
      super()
      this.state ={
        count:0
    }  
    }
   
  render() {

    return (
      <div>
        <h1>This is Counter Class Component</h1>
        <h1>Add Counter Value is {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })} disabled={this.state.count < 5 ? false : true}>+</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })} disabled={this.state.count > 0 ? false : true}>-</button>
        
      </div>
    )
  }
}
