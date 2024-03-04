import React, { Component } from 'react'

export class CityFunProp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>My City is {this.props.CityName === "India" ? "Delhi":"NewYork"}</h1>
      </>
    )
  }
}

export default CityFunProp;
