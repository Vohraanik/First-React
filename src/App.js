import React , { useState } from "react";
import Country from "./user/components/Country";
import City from "./user/components/City";
import CountryFun from "./user/components/CountryFun";
import CityFun from "./user/components/CityFun";
import Counter from "./user/components/Counter";
import CounterClassFun from "./user/components/CounterClassFun";
import CityFunProp from "./user/components/CityFunProp";
import CountryFunProp from "./user/components/CountryFunProp";







function App() {


  return (
    <>
      {/* <Country /> */}
      {/* <City /> */}
      {/* <CountryFun />
      <CityFun /> */}
      {/* <Counter />
      <CounterClassFun /> */}
<CityFunProp changeCityProp="Nevada" changeStateProp="Las Vegas" />
<CountryFunProp  changeCountryProp="India" changeCityProp="Delhi" />
    </>
  );
}

export default App;
