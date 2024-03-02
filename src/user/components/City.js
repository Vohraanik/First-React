import React, { Component } from 'react'

export default class City extends Component {
  constructor(props){
    // console.log(props);
    super(props);

    this.state = {
      name:'Surat',
      village:'Kathor',
    };

  }

  handleChange = () => {
    this.setState({
      name:'Vadodra',
      village:'Padra',
    })
  }
  render() {
 
    
    return (
        <>
          <h1>My City is {this.state.name}</h1>
          <h1>My Village Name is {this.state.village}</h1>
          <button onClick={this.handleChange}>changeCity</button>
        </>
    
    )
  }
}

