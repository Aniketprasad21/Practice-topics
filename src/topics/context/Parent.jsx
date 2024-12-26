import React, { createContext } from 'react'
import ChildA from './ChildA'
export let Global = createContext();
const Parent=()=> {
    let data = "Hello world"
    let products = [
      {id:1,title:"Mobile"},
      {id:2,title:"Laptop"},
    ];
  return (
    <div>
       <h1>I am Parent Component</h1>
       <Global.Provider value ={{data,products}}></Global.Provider>
       {/* <Global.Provider value = {data}> */}
       <ChildA></ChildA>
       {/* </Global.Provider> */}
       
        
    </div>
  )
}

export default Parent
