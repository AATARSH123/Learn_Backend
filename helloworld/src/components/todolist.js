import React, { Component } from 'react'
import DialogBox from './dialogBox'
import EditDialog from './edit-dialog'

export class ToDoList extends Component {
    constructor(){
        super()
        this.state = {
            content : '',
            data_lst : [],
            flag : 1,
            dialog : '',
            id : 0,
            completed_task : '',
            lst : []
        }
    }
    change = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    appendToList = (value) => {
        const{data_lst} = this.state
        this.setState({
            id : this.state.id + 1
        })
        if(this.state.flag === 1){
            this.setState({
                dialog : '',
                data_lst : [...data_lst, {status : false, value : value, id : this.state.id}]
            })
        }
        else{
            this.setState({
                dialog : '',
                data_lst : [{status : false, value : value, id : this.state.id}, ...data_lst]
            })
        }
    }
    addFront = () => {
        this.setState({
            lst : []
        })
        this.setState({
            flag : 0, 
            dialog : 
            <>
                <DialogBox appendFunc = {this.appendToList}/>
            </>
        })
    }
    addLast = () => {
        this.setState({
            flag : 1,
            dialog :
            <>
                <DialogBox appendFunc = {this.appendToList}/>
            </>
        })
    }
    updateDataFunc = (data, index) => {
        const {data_lst} = this.state
        data_lst[index].value = data
        this.setState({
            dialog : '',
        })
    }
    editValue = (event) => {
        const{data_lst} = this.state
        var idx
        for(let i = 0; i < data_lst.length; i++){
            if(parseInt(data_lst[i].id) === parseInt(event.target.value)){
                idx = i
            }
        }
        this.setState({
            lst : [],
            dialog : 
            <>
                <EditDialog value = {this.state.data_lst[idx].value} updateFunc = {this.updateDataFunc} index = {idx}/>
            </>
        })
    }
    deleteValue = (event) => {
        const {data_lst} = this.state   
        let idx = event.target.value
        const value = data_lst.filter((x) => parseInt(x.id) !== parseInt(idx))
        this.setState({
            data_lst : value,
            lst : []
        })
    }
    chStatus = (event) => {
        const{data_lst} = this.state
        for(let i = 0; i < data_lst.length; i++){
            if(parseInt(data_lst[i].id) === parseInt(event.target.name))
                data_lst[i].status = !data_lst[i].status
        }
    }
    showCompleted = () => {
        const{data_lst} = this.state
        var lst = []
        for(let i = 0; i < data_lst.length; i++){
            if(data_lst[i].status === true){
                let val = data_lst[i]
                lst.push(val)
            }
        }
        this.setState({
            lst : lst
        })
        
    }
    showIncompleted = () => {
        const{data_lst} = this.state
        var lst = []
        for(let i = 0; i < data_lst.length; i++){
            if(data_lst[i].status === false){
                let val = data_lst[i]
                lst.push(val)
            }
        }
        this.setState({
            lst : lst
        })
        
    }
    render(){
        const{data_lst} = this.state
        
        return(
            <div>
                <div>
                    <button onClick = {this.addFront}>Add to front</button>
                    <button onClick = {this.addLast}>Add to end</button>
                    <button onClick = {this.showCompleted}>Show Completed</button>
                    <button onClick={this.showIncompleted}>Show InComplete tasks</button>
                </div>
                <table>
                    <tbody>
                        {
                            data_lst.map((x, index) => 
                                <tr key = {x.id}>
                                    <td><input type = 'checkbox' value = {x.status} onClick = {this.chStatus} name = {x.id}></input></td>
                                    <td><input readOnly value = {x.value}></input></td>
                                    <td><button value = {x.id} onClick = {this.editValue}>Edit</button></td>
                                    <td><button value = {x.id} onClick = {this.deleteValue}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div>
                    {this.state.dialog}
                </div>
                <div>
                    <table>
                        <thead>
                        
                        </thead>
                        <tbody>
                            {
                                this.state.lst.map((x) => 
                                    <tr key = {x.id}>
                                        <td>{x.value}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default ToDoList