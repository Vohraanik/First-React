import React, { Component } from 'react'
import CityFunProp from './CityClassProp';

export default class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'India',
      timeZone:'Gmt-5:30',
    };
  }

  changeCountry = () => {
    this.setState({
      name:'USA',
      timeZone:'-5:00',
    })
  }
  render() {
    return (
        <>
       <h1>My Country Name is {this.state.name}</h1>
       <h1>My TimeZone is {this.state.timeZone}</h1>
       <button onClick={this.changeCountry}>Change Country</button>
       <CityFunProp CityName={this.state.name}/>
        </>
  
    )
  }
}
