import React from "react";
class Hai extends React.Component{
    render(){
        return <div><h1>{this.props.name} with age {this.props.age}</h1>
        {this.props.children}
        </div>
    }

}
export default Hai;