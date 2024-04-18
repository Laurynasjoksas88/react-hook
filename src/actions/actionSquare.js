import { ADDSQUARE, REMOVESQUARE } from "../constants/square.js";

export const ADD_SQUARE = "ADD_SQUARE";
export const REMOVE_SQUARE = "REMOVE_SQUARE";

export const addSquare = () => ({ type: ADD_SQUARE });
export const removeSquare = () => ({ type: REMOVE_SQUARE });