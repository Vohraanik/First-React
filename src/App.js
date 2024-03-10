import React , { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Medicines from "./user/containers/medicines/Medicines"
import Doctor from "./user/containers/doctor/Doctor";
import SimpleComponent from "./user/components/lifeCycle/SimpleComponent ";
import UpdateComponent from "./user/components/lifeCycle/UpdateComponent ";
import ShouldUpdateComponent from "./user/components/lifeCycle/ShouldUpdateComponent";
import ComponentWILLMOUNT from "./user/components/lifeCycle/Mount.js";
import Timer from "./user/containers/timer/Timer";
import TimerFun from "./user/containers/timer/TimerFun";
import Products from "./user/containers/products/Products";
import Loading from "./user/containers/loading/Loading";

function App() {
  return (
    <>
    {/* <Medicines/>
    <Doctor /> */}
    {/* <SimpleComponent /> */}
    {/* <UpdateComponent /> */}
    {/* <ShouldUpdateComponent /> */}
    {/* <ComponentWILLMOUNT /> */}
    {/* <Timer/> */}
    {/* <TimerFun /> */}
    {/* <Products/> */}
    <Loading/>
    </>
  );
}

export default App;
