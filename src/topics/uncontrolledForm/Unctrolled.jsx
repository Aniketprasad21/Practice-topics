import React,{useRef} from 'react'

const Unctrolled = () => {
let demoRef = useRef();
    function bgChange(){
        console.log("bg change");
        console.log(demoRef.current);
        demoRef.current.style.backgroundColor= "red";
        
        
    }
  return (
    <div>
      <h1 ref={demoRef}>Controlled form</h1>
      <button onClick={bgChange}>Click</button>
    </div>
  )
}

export default Unctrolled
