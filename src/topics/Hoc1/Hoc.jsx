const Hoc = (WrappedComp)=>{
    return()=>{
        return <WrappedComp users={[{id:1, ename:"test"}]}/>
    };
};
export default Hoc;