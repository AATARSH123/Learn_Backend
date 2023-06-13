import React, { Component, useContext } from 'react'
import { useContext1 } from './signup'
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            a:""
            
        }
    }
    chname=(event)=>{
        this.setState({
            name:event.target.value
        })
        
    }
    chemail=(event)=>{
        this.setState({
            email:event.target.value
        })

    }
    chpassword=(event)=>{
        this.setState({
            password:event.target.value
        })
        
    }
    sub=(event)=>{
        const auth = useContext(useContext1)
        auth.map((x)=>{
            if(x.email===this.state.email && x.password===this.state.password){
                this.setState({
                    a:"Login successfully"
                })
                event.preventDefault()


            }
            else{
                this.setState({
                    a:"Login Failed"
                })
                event.preventDefault()
            }
            return 0;
        })
        
       
    }
  render() {
      
    return (
        <div>
        {/* <form onSubmit={this.sub}> */}
            <h1>Login</h1>
               <label>User name</label>
                <input type="text" value={this.state.name} onChange={this.chname}></input> 
                <label>E-mail</label>
                <input type="email" value={this.state.email} onChange={this.chemail}></input> 
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.chpassword}></input> 

                <button onClick={this.sub}>Submit</button>
           
        {/* </form> */}
        {this.state.a}
      </div>
    )
  }
}
