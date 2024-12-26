import React from "react";
import { memo } from "react";

const Child = () => {
  console.log("I am Child B");
  return <div>ChildA Component</div>;
};

export default memo(Child);
