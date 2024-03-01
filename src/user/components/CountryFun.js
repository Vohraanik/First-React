import React,{useState} from 'react';


function CountryFun(props) {
const [CountryName, setCountryName] = useState('India');
const [TimeZone, setTimeZone] = useState('Gmt-5:30');

const changeCountryName = ()=>{

    setCountryName('USA');
    setTimeZone('-5:00');
}
    return (
        <div>
            <h1>This is Country Function based Component</h1>
            <h1>my country name is {CountryName}</h1>
            <h3>my time zone is {TimeZone}</h3>
            <button onClick={changeCountryName}>Change Name</button>
        </div>
    );
}

export default CountryFun;