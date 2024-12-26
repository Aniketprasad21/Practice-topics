import ChildB from "./ChildB";
const ChlidA=(x)=>{
    console.log(x);
    
    return(
        <div>
            <h1>Child A</h1>
            <ChildB product ={x.product}/>
        </div>
    )
}
export default ChlidA