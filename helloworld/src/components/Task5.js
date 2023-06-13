import React, { Component } from 'react';

class Task5 extends Component {
    constructor()
    {
        super()    
        this.state=
        {
            list:[],
            a:"",
            i:0,
            j:0
        }
    }
    abc=(event)=>
    {
        this.setState({
            a:event.target.value
        })
    }
    ab=()=>{
        var b=this.state.a
        this.state.i+=1
        const date1=new Date();
        this.setState({
            list:[{id:this.state.i,date:date1.toLocaleTimeString(),con:<input/>},...this.state.list]
    })
    console.log(this.state.list)
    }
    ba=()=>
    {   
        var b=this.state.a
        this.state.i+=1
        const date1=new Date();
        this.setState({
            list:[...this.state.list,{id:this.state.i,date:date1.toLocaleTimeString(),con:<input/>}]
    })
    // console.log(this.state.list)
    }
    render() {
        var a1=this.state.list.map((x,index)=><h3 key={index}>{index}</h3>)
        var b1=this.state.list.map((x,index)=><h3 key={index}>{x.id}</h3>)
        var c1=this.state.list.map((x,index)=><h3 key={x.id}>{x.con}</h3>)
        var d1=this.state.list.map((x,index)=><h3 key={index}>{x.date}</h3>)
        return (
            <div>

                <button on onClick={this.ab}>FRONT</button>
                <button on onClick={this.ba}>BACK</button>
                <table>
                    <thead>
                        <tr>
                            <td>INDEX</td>
                            <td>ID</td>
                            <td>ITEM</td>
                            <td>CREATED AT</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{a1}</td>
                            <td>{b1}</td>
                            <td>{c1}</td>
                            <td>{d1}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Task5;