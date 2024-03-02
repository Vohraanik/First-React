import React, { useState } from 'react';
import CountryFun from './CountryFun';


function CityFun() {
    const [CityName, setCityName] = useState('Delhi');
    const [VillageName, setVillageName] = useState('Kathor');
  

    const changeCity = () => {
        setCityName('NewYork');
        setVillageName('Padra');
    }

    return (
        <div>
            <h1 >This is City Function based Component</h1>
          
            <h1 >My City Name is {CityName}</h1>
            <h1>My Village Name is {VillageName}</h1>
            <button onClick={changeCity}>  Change City</button>
        </div>
    );
}

export default CityFun;
