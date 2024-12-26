import { Component } from "react";
class StatesInCBC extends Component{
    state ={count:0}
    increment =()=>{
        this.setState({count:this.state.count+1})
    };
    decrement =()=>{
        this.setState({count:this.state.count-1})
    };
    reset =()=>{
        this.setState({count:this.state.count(0)})
    };
    render(){
        console.log();
        return(
            <div>
                <h2>CBC Component {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
        
    }
}
export default StatesInCBC;