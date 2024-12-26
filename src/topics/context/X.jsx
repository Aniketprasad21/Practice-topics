import React, { useContext } from 'react'
import { Global } from './Parent'
import { GlobalData } from './ContextApi'

const X = () => {
    let val = useContext(GlobalData)
    console.log(val);
    
  return (
    <div>
      <h1>X Component</h1>
    </div>
  );
};

export default X
