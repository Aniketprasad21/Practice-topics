import React, { createContext } from 'react'
export let contextapi = createContext()
const Api = (props) => {
   let data = {name:"Aniket"}
   let data1 = {age:"24"}
  return (
    <div>
      <contextapi.Provider value={{data,data1}}>
        {props.children}
      </contextapi.Provider>
    </div>
  )
}

export default Api
