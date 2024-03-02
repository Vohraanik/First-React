import React, { useState } from 'react'

const CountryFunProp = ({changeCountryProp,changeCityProp}) => {
    console.log(changeCountryProp,changeCityProp);
    const [CountryName, setCountryName] = useState(changeCityProp);
    const [TimeZone, setTimeZone] = useState('Gmt-5:30');
    const [CityName, setCityName] = useState(changeCountryProp);

    const changeCountry =()=>{
        setCountryName('USA');
        setTimeZone('-5:00');
        setCityName('newyork');
    }
  return (
    
      <>
        <h1 >This is Country Function based Component</h1>
        <h1 >My country name is {CountryName}</h1>
        <h3 >My time zone is {TimeZone}</h3>
        <h3 >My City Name is {CityName}</h3>

        <button onClick={changeCountry}>  Change Country</button>
      </>

  )
}

export default CountryFunProp
