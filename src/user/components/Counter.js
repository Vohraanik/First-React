import React, { useState } from "react";


function Counter(props) {
    const [AddCounter, CountAddState] = useState(0);



    const AddState = () => {
        CountAddState(AddCounter + 1)
    }
    const SubState = () => {
        CountAddState(AddCounter - 1)
    }


    return (
        <div>
            <h1>This is Counter Component</h1>
            <h1>Add Counter Value is {AddCounter}</h1>
            <button onClick={AddState} disabled={AddCounter < 5 ? false : true}>+</button>
            <button onClick={SubState} disabled={AddCounter > 0 ? false : true}>-</button>

        </div>
    );
}

export default Counter;