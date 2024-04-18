import { useState } from "react";

function Count() {
  const [counting, setCouting] = useState(0);

  let count = 123;
  const handleCount = () => {
    console.log(++count);
  };

  return (
    <div>
      <button onClick={handleCount}>Counter Variable</button>
      <p>Variable{count}</p>

      <button onClick={() => setCouting((prev) => +1)}>Counter State</button>
      <p>State {counting}</p>

      {/* <button onClick={() => console.log("ref", ++ countref.current)}>Counter Refas</button>
      <p>State {countref.current}</p> */}


    </div>


  );
}

export default Count;
