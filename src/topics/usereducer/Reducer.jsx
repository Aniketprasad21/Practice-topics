import {useReducer} from 'react'

const Reducer=()=> {
    let intialState = {count:0}
    let reducerFunc = (state,action)=>{
        console.log(state,action);
        switch(action){
            case "increment":
                return {count:state.count+1}

            case "decrement":
                if(state <= 1){
                    return {count:state.count = 0};
                }
                else{
                    return {count:state.count - 1} ;
                }
                // return {count:state.count-1};
               

            case "reset":
                return {count:0};
            
            default:
                break; 
        }
        
    }
    let[state,dispatch] = useReducer(reducerFunc,intialState)
  return (
    <div>
        <div>
            <h1>Learn Reducer {state.count}</h1>
            <button onClick={()=>dispatch("increment")}>increment</button><br /><br />
            <button onClick={()=>dispatch("decrement")}>decrement</button><br /><br />
            <button onClick={()=>dispatch("reset")}>reset</button><br /><br />
        </div>
    </div>
  )
}
export default Reducer
