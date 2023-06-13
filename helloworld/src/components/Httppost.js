import React, { Component } from 'react'
import axios from 'axios'
export default class Httppost extends Component {
    constructor(props){
        super();
        this.state={
            userid:"",
            title:"",
            body:""
        }
    }
    change=(event)=>{
        this.setState({
            [event.target.name]:event.target.value

        })
    }
    submit=(e)=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        e.preventDefault()

    }
  render() {
    const {userid,title,body}=this.state
    return (
      
        <form onsubmit={this.submit}>
            <div>
                <input name="userid" value={userid} onChange={this.change}/>
                <input name="body" value={body} onChange={this.change}/>
                <input name="title" value={title} onChange={this.change}/>
                <button type="submit">Submit</button>

            </div>
        </form>
        
      
    )
  }
}
