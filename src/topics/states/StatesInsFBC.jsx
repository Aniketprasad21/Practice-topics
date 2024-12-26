import { useState } from "react";
const StatesInFBC =() => {
    let [state,setState] = useState(10);

    function change(){
        console.log("btn clicked");
        setState(200);
        
    }
    return(
        <div>
            <h1>States in FBC{state}</h1>
            <button onClick={change}>click</button>
        </div>
    );
};
export default StatesInFBC;