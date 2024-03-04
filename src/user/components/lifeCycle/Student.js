import React, { Component } from 'react'

export default class Student extends Component {
    componentWillUnmount() {
        alert('Studenet Component Unmount');
    }
  render() {
    return (
      <div>
         <h1>Studenet Component Unmount</h1>
  
      </div>
    )
  }
}
