import React, { Component } from 'react'
import Login from './login'
import { useContext } from 'react'
export const useContext1 =React.createContext()

export default class Signup extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            list:[]

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
        this.setState({
           list:[...this.state.list,{id:this.state.list.length,name:this.state.name,email:this.state.email,password:this.state.password}]
            
        }, () => console.log(this.state.list))
        event.preventDefault()
   

    }

  render() {
    return (
      <div>
        <form onSubmit={this.sub}>
            <div>
                <h1>Sign up</h1>
                <label>User name</label>
                <input type="text" value={this.state.name} onChange={this.chname}></input> 
                <label>E-mail</label>
                <input type="email" value={this.state.email} onChange={this.chemail}></input> 
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.chpassword}></input> 
                <button type="submit">Submit</button>
              
                
            </div>
        </form>
        <useContext1.Provider value={this.state.list}>
                    <Login/>
                </useContext1.Provider>
        
      </div>
    )
  }
}
