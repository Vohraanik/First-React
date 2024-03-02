import React, { useState } from 'react'

const CityFunProp = ({changeCityProp,changeStateProp}) => {
    console.log(changeCityProp,changeStateProp);
    const [CityName, setCityName] = useState(changeCityProp);
    const [VillageName, setVillageName] = useState('GuruGram');
    const [StateName, setStateName] = useState(changeStateProp);

    const changeCity =()=>{
        setCityName('NewYork');
        setVillageName('Cicago');
        setStateName('NewJersy');
        
    }
  return (
    <div>
      <>
        <h1 >This is City Component</h1>
        <h1 >My City Name is {CityName}</h1>
        <h1>My Village Name is {VillageName}</h1>
        <h1 >My State Name is {StateName}</h1>
        <button onClick={changeCity}>  Change City</button>

      </>
    </div>
  )
}

export default CityFunProp
