import React from 'react'

class EditDialog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : this.props.value
        }
    }
    change = (event) => {
        this.setState({
            value : event.target.value
        })
    }
    sendData = () => {
        this.props.updateFunc(this.state.value, this.props.index)
    }
    render(){
        return(
            <div>
                <textarea value = {this.state.value} onChange = {this.change}></textarea>
                <button onClick = {this.sendData}>Update</button>
            </div>
        )
    }
}
export default EditDialog