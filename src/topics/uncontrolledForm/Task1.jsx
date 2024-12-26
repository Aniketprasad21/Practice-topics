import React, { useRef } from 'react'

const Task1 = () => {
let taskRef = useRef();
    function lightF(){
        console.log("bg Change");
        console.log(taskRef.current);
        document.body.style.backgroundColor = "gainsboro";
        document.body.style.color = "brown";
        // taskRef.current.style.backgroundColor = "white";

    }
    function DarkF(){
        console.log("bg Change");
        console.log(taskRef.current);
        document.body.style.backgroundColor = "black";
        document.body.style.color = "brown";
        // taskRef.current.style.backgroundColor = "black";
        
    }
  return (
    <div>
      <h1 ref={taskRef}>Hello World</h1>
      <input onClick={lightF} type="radio" name ="task"/>
      <label htmlFor="">Light</label>

      <input onClick={DarkF} type="radio" name="task"  />
      <label htmlFor="">Dark</label>
    </div>
  )
}

export default Task1
