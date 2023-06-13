import React, { Component } from 'react'

export class DialogBox extends Component {
    constructor(){
        super()
        this.state = {
            content : ''
        }
    }
    change = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    sendData = () =>{
        this.props.appendFunc(this.state.content)
    }
    render(){
        return(
            <>
                <textarea value = {this.state.content} onChange = {this.change} name = 'content'></textarea>
                <br></br><button onClick = {this.sendData}>Add</button>
            </>
        )
    }
}

export default DialogBox