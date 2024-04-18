import { ADD_SQUARE } from "../constants/constants";

export const addCustomNumberOfSquaresReducer = (state,action) => {
  let stateCopy= [...state];

switch(action.type) {
case ADD_SQUARE:
  for(let i=0; i<action.payload; i++) {
    stateCopy.push(0)
  }
  break;

  default:
  break;
}

return stateCopy;

}

