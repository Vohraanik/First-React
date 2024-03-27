import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    console.log(count);

    const handleinc = () =>{
        dispatch(increment());
    }


    const handledec = () =>{
            dispatch(decrement());
    }
    return (
        <div>
            <h1>This is Counter Page</h1>
            <button onClick={handledec}>-</button>
            {count}
            <button onClick={handleinc} >+</button>
            
        </div>
    );
}

export default Counter;