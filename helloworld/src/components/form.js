import React,{Component} from 'react'
export default class Form extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            comm:"",
            job:""


        }
    }
    chname=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    chcomm=(event)=>{
        this.setState({
            comm:event.target.value
        })
    }
    chjob=(event)=>{
        this.setState({
            job:event.target.value
        })
    }
    sub=(event)=>{
        console.log(this.state.name)
        console.log(this.state.comm)
        console.log(this.state.job)
        event.preventDefault()

    }
    render(){
        return(
            <form onSubmit={this.sub}>
                <div>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.chname}/>

                </div>
                <div>
                    <label>Comments</label>
                    <textarea  value={this.state.comm} onChange={this.chcomm}/>

                </div>
                <div>
                    <label>Job</label>
                    <select   value={this.state.job} onChange={this.chjob}>
                    <option value="React">React</option>
                    <option value="Mongodb">Mongodb</option>
                    <option value="Node">Node</option>
                    </select>
                    


                </div>
                <div>
                <button type="submit" >Submit</button></div>


            </form>
        )
    }

}