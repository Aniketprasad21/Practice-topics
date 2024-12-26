import React, { useContext } from 'react'
import { contextapi } from './Api'

const ApiAge = () => {
    let {data1,data} = useContext(contextapi)
  return (
    <div>
      <h1>{data.name + data1.age}</h1>
      

    </div>
  )
}

export default ApiAge
