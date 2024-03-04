import React, { useState } from 'react';
import CityFunProps from './CityFunProps';


function CountryFun(props) {
    console.log(props);
    const [CountryName, setCountryName] = useState('India');
    const [TimeZone, setTimeZone] = useState('Gmt-5:30');
  



    const changeCountryName = () => {
        setCountryName('USA');
        setTimeZone('-5:00');
    }


    return (
        <>
            <h1 className="text-2xl font-bold mb-4">This is Country Function based Component</h1>
            <h1 className="text-xl">My country name is {CountryName}</h1>
            <h3 className="text-lg">My time zone is {TimeZone}</h3>
           
          
            <button onClick={changeCountryName}>  Change Country</button>
        <CityFunProps cn ={CountryName} />
            </>
    );
}

export default CountryFun;
