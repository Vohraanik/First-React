import React , { useState } from "react";
import Medicines from "./user/containers/Medicines"
import Doctor from "./user/containers/Doctor";
import SimpleComponent from "./user/components/lifeCycle/SimpleComponent ";
import UpdateComponent from "./user/components/lifeCycle/UpdateComponent ";
import ShouldUpdateComponent from "./user/components/lifeCycle/ShouldUpdateComponent";
import ComponentWILLMOUNT from "./user/components/lifeCycle/Mount.js";

function App() {
  return (
    <>
    {/* <Medicines/>
    <Doctor /> */}
    {/* <SimpleComponent /> */}
    {/* <UpdateComponent /> */}
    {/* <ShouldUpdateComponent /> */}
    <ComponentWILLMOUNT />
    </>
  );
}

export default App;
