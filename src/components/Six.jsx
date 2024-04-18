import { useReducer, useState } from "react";
import { decrementFunction, incrementFunction } from "../action/actionObjects";
import { counterReducer } from "../reducers/counterReducer";

function Six() {
  count[(count, setCount)] = useState(0);

  const [counter, dispatchCounter] = useReducer(counterReducer, 0)

  return (
    <div>
      <button onClick={() => dispatchCounter(incrementFunction()) }> Increment</button>
      
      <button onClick={() => dispatchCounter(decrementFunction()) }> Decrement</button>
    </div>
  );
}

export default Six
