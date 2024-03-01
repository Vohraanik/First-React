import React, { useState } from 'react';

function CityFun(props) {
    const [CityName, setCityName] = useState('Surat');
    const [VillageName, setVillageName] = useState('Kathor');

    const changeCity = ()=>{
        setCityName('Vadodra');
        setVillageName('Padra');
    }
    return (
        <div>
            <h1>This is City Function based Component</h1>
            <h1>My City Name is {CityName}</h1>
            <h1>My Village Name is {VillageName}</h1>
            <button onClick={changeCity}>Change City</button>
        </div>
    );
}

export default CityFun;