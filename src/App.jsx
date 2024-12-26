// import { Fragment } from "react";
// const App = ()=>{
//     return
//     <Fragment>
//     <h1>I am App Component</h1>
//     </Fragment>
// };
// export default App;

// import { Component } from "react";
// class App extends Component{
//     render(){
//         return<h1>I am class based compoenet </h1>
//     }
// }
// export default App;

// ! Class Based Component 
// import { Component } from "react";
// class App extends Component{
//     render(){
//         return (
//             <div>
//             <h1>I am class based componet</h1>
//             <h2>Hello World</h2>
//             </div>
//         );
//     }
// }
// export default App;
//==================================================

import StatesInFBC from "./topics/states/StatesInsFBC";
import Counter from "./topics/states/Counter";
import StatesInCBC from "./topics/states/StatesInCBC";
import PropsUser from "./topics/props/PropsUser";
import PropsParent from "./topics/props/PropsParent";
import InlineCss from "./topics/reactCSS/InlineCss";
import Button from "./topics/components/button/Button";
import Parent from "./topics/context/Parent";
import X from "./topics/context/X";
import Controlled2 from "./topics/controlledForms/Controlled2";
import Unctrolled from "./topics/uncontrolledForm/Unctrolled";
import Task1 from "./topics/uncontrolledForm/Task1";
import Reducer from "./topics/usereducer/Reducer";
import Hoc from"./topics/Hoc1/Hoc";
import Card from "./topics/Hoc1/Card";
import Meno from "./topics/memo/Meno";
import Api from "./topics/ContextApi/Api";
import ApiUser from "./topics/ContextApi/ApiUser";
import ApiAge from "./topics/ContextApi/ApiAge";
import Cbc from "./topics/ClassBasesCompo/Cbc";
const App =()=>{
    return(
        <div>
            {/* <h1>Stated in FBC</h1><hr /> */}
            {/* <StatesInCBC></StatesInCBC><hr />
            <StatesInFBC></StatesInFBC><hr />
            <Counter></Counter> */}
            {/* <PropsParent/> */}
            
            {/* <InlineCss/> */}
            {/* <Button></Button> */}
            {/* <Parent/> */}
            {/* <X></X> */}
            {/* <Controlled/> */}
            {/* <Controlled2></Controlled2> */}
            {/* <Unctrolled/> */}
            {/* <Task1/> */}
            {/* <Reducer></Reducer> */}
             {/* <Card></Card> */}
             {/* <Hoc></Hoc> */}
            <Meno></Meno>
            {/* <Api>
                <ApiUser></ApiUser>
                <ApiAge></ApiAge>
            </Api>
            <Cbc/> */}
        </div>
    );
};
export default App;