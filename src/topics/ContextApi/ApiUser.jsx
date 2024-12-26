import React, { useContext } from 'react'
import { contextapi } from './Api'

const ApiUser = () => {
    let data = useContext(contextapi)
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}

export default ApiUser
