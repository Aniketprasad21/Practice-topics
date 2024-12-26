const ChildB =(y)=>{
    console.log(y);
    let {props2} = y;
    
    return(
    <div>
        <h1>Child B</h1>
        {props2.map((product)=>{
            console.log(product);
            return(
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.img} alt="" />
                </div>
            )
        })}
    </div>
    );
};
export default ChildB