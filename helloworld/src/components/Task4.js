import React from "react"
class Task4 extends  React.Component{
    constructor(){
        super()
        this.state={
            a:"",b:""
        }
    }
    Click=(event)=>{
        this.setState((prev)=>({
            a:prev.a+event.target.value
        }))}
    Sub=()=>{
        this.setState(()=>({
            a:eval(this.state.a)
        }))
    }
    Clear=()=>{
        this.setState(()=>({
            a:""
        }))
    }
    render(){
        return<div>
            <h1>Calculator</h1>
            <input type="text" value={this.state.a}></input><br></br>
            <input type="button" value={1} onClick={this.Click}></input>
            <input type="button" value={2} onClick={this.Click}></input>
            <input type="button" value={3} onClick={this.Click}></input>
            <input type="button" value={"+"} onClick={this.Click}></input>
            <br></br>
            <input type="button" value={4} onClick={this.Click}></input>
            <input type="button" value={5} onClick={this.Click}></input>
            <input type="button" value={6} onClick={this.Click}></input>
            <input type="button" value={"*"} onClick={this.Click}></input>
            <br></br>
            <input type="button" value={7} onClick={this.Click}></input>
            <input type="button" value={8} onClick={this.Click}></input>
            <input type="button" value={9} onClick={this.Click}></input>
            <input type="button" value={"-"} onClick={this.Click}></input>
            <br></br>
            <input type="button" value={0} onClick={this.Click}></input>
            <input type="button" value={"/"} onClick={this.Click}></input>
            <input type="button" value={"%"} onClick={this.Click}></input>
            <input type="button" value={"="} onClick={this.Sub}></input><br></br>
            <br></br>
            <input type="button" value={"Clear"}onClick={this.Clear}></input>
        </div> 
    }
}
export default Task4