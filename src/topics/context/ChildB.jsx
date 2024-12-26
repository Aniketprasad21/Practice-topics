import React from 'react'
import { useContext } from 'react'
import { Global } from './Parent'
const ChildB = () => {
    let {data,products} = useContext(Global);
    console.log(products);
    
  return (
    <div>
       <h1>I am ChildA</h1>
       {products.map((ele)=>{
        console.log(ele);
        return <h1 key={ele.id}>{ele.title}</h1>
        
       })}
    </div>
  )
}

export default ChildB;
