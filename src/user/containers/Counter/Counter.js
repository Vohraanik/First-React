import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();

    const handleinc = () =>{
        dispatch(increment());
    }


    const handledec = () =>{
            dispatch(decrement());
    }
    return (
        <div>
            <h1>This is Counter Page</h1>
            <button onClick={handleinc} >+</button>
            {0}
            <button onClick={handledec}>-</button>
            
        </div>
    );
}

export default Counter;