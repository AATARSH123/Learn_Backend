import React from "react";

class SampleTest extends React.Component{
    constructor(){
        super()
        this.state = {
            value : 0
        }
    }
    changeButtonValue = () => {
        console.log(this.state.value)
        this.setState({
            value : !this.state.value
        })
    }
    render(){
        return(
            <div>
                <input type = 'checkbox' value = {this.state.value} onClick={this.changeButtonValue}></input>
            </div>
        )
    }
}

export default SampleTest