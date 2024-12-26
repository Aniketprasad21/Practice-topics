import React from "react";
import { useState } from "react";
import Chlid from "../memo/Chlid";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(5);

  return (
    <div>
      <h1>Count1 = {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count1</button>
      <hr />
      <h1>Count2 = {count2}</h1>
      <button onClick={() => setCount2(count2 + 5)}>Increase Count2</button>
      <hr />
      <Chlid></Chlid>

    </div>
  );
};

export default Parent;
