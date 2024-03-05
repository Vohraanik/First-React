import React , { useState } from "react";
import Medicines from "./user/containers/medicines/Medicines"
import Doctor from "./user/containers/doctor/Doctor";
import SimpleComponent from "./user/components/lifeCycle/SimpleComponent ";
import UpdateComponent from "./user/components/lifeCycle/UpdateComponent ";
import ShouldUpdateComponent from "./user/components/lifeCycle/ShouldUpdateComponent";
import ComponentWILLMOUNT from "./user/components/lifeCycle/Mount.js";
import Timer from "./user/containers/timer/Timer";

function App() {
  return (
    <>
    {/* <Medicines/>
    <Doctor /> */}
    {/* <SimpleComponent /> */}
    {/* <UpdateComponent /> */}
    {/* <ShouldUpdateComponent /> */}
    {/* <ComponentWILLMOUNT /> */}
    <Timer/>
    </>
  );
}

export default App;
