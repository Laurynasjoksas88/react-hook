import React, { useReducer } from "react";
import { addSquare, removeSquare } from "actions/actionSquare";
import squareReducer from "reducers/squareReducer";

function Square() {
  const [squares, dispatch] = useReducer(squareReducer, []);

  return (
    <div>
      <button onClick={() => dispatch(addSquare())}>Add square</button>
      <button onClick={() => dispatch(removeSquare())}>Remove square</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {squares.map((square, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "red",
              margin: "5px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Square;
