import React, { useState } from 'react';
import CountryFun from './CountryFun';


function CityFun({cn}) {
  
    return (
      <>
      <h1>This is City is {cn==="India"?"Delhi":"NewYork"}</h1>
      </>
    );
}

export default CityFun;
