import React, { Component } from 'react'

 class Cbc extends Component {
    constructor(){
        super()
    this.state = {
        count:0
    }    
    }
    
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.increment()}}>Increment</button>
        <button onClick={()=>{this.decrement()}}>Decrement</button>
      </div>
    )
  }
}
export default Cbc;