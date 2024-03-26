import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../reducer/ActionType";
export const increment = ()=>(dispatch)=>{
    dispatch({type:INCREMENT_COUNTER});

}

export const decrement = ()=>(dispatch)=>{
    dispatch({type:DECREMENT_COUNTER});

}