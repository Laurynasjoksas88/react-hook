import { INCREMENT } from "../constants/constants";
import { DECREMENT } from "../constants/constants";

export const incrementFunction=()=>{
    return{
        type: INCREMENT,
    };
};

export const decrementFunction=()=>{
    return{
        type: DECREMENT,
    };
};




export const addCustomNumberOfSquares = () => {
    return {
        type: ADD_SQUARE,
        payload: inputValue,
}
}