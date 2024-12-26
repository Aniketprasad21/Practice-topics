//kaise bhe Parent ke property ko chlid me send kar na ho toh prorps use kar te hai 
//Props are only used to send data from parent component to child component
const PropsChild1 =(props)=>{
    console.log(props);
    let {data:{data,arr}} = props;
    console.log(data);
    
    return(
        <div>
            <h2>Props Chlid {data}</h2>
        </div>
    );
};
export default PropsChild1;