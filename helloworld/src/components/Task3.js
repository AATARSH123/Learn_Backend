
import React ,{ Component }from 'react'

class Task3 extends Component{
    
    constructor(){
        super()
        this.state={
            val:"",
            a:"",
            b:"",
            c:"",
            d:""
        }
    }

    dollar=(e)=>{
        this.setState({
        b:e.target.value
        },()=>this.setState({a:this.state.b*82.83,c:this.state.b*0.942,d:this.state.b*0.82}))
    }
    inr=(e)=>{
        this.setState({
            a:e.target.value
        },()=>this.setState({b:this.state.a*0.012,c:this.state.a*0.011,d:this.state.a*0.01}))
    }
    euro=(e)=>{
        this.setState({
            c:e.target.value
        },()=>this.setState({a:this.state.c*87.81 ,b:this.state.c*1.062,d:this.state.c*0.88}))
    }
    pou=(e)=>{
        this.setState({
            d:e.target.value
        },()=>this.setState({a:this.state.d*99.84 ,b:this.state.d*1.20,c:this.state.d*1.13}))
   }

    render(){
        return(
            <div>
                <>
                <label>INR</label>
                <input type="text" value={this.state.a} onChange={this.inr}/><br></br>
                <label>USD</label>
                <input type="text" value={this.state.b} onChange={this.dollar}/><br></br>
                <label>EUR</label>
                <input type="text" value={this.state.c} onChange={this.euro}/><br></br>
                <label>BGP</label>
                <input type="text" value={this.state.d} onChange={this.pou}/>
                </>
            </div>
        )
    }

}



export default Task3