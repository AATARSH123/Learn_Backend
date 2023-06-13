import React, { Component } from 'react';

class Task7 extends Component {
    constructor()
    {
        super()    
        this.state=
        {
            list:[],
            value:"",
            a:"",
            i:0,
            j:0
        }
    }
    chvalue=(event)=>{
        this.setState({
            value:event.target.value

        })
    }
   
    ab=()=>{
    
        this.state.i+=1
      
        this.setState({
            list:[{id:this.state.i,val:this.state.value,edit:<button/>,delete:<button/>},...this.state.list]
    })
    //console.log(this.state.list)
    }
    ba=()=>
    {   
        
        this.state.i+=1
      
        this.setState({
            list:[...this.state.list,{id:this.state.i,val:this.state.value,edit:<button/>,delete:<button/>}]
    })
    // console.log(this.state.list)
    }
    render() {
        var a1=this.state.list.map((x,index)=><h3 key={index}>{index}</h3>)
        var b1=this.state.list.map((x,index)=><h3 key={index}>{x.id}</h3>)
        var c1=this.state.list.map((x,index)=><h3 key={x.id}>{x.val}</h3>)
        var d1=this.state.list.map((x,index)=><h3 key={x.id}>{x.edit}</h3>)
        var f1=this.state.list.map((x,index)=><h3 key={x.id}>{x.delete}</h3>)

        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.chvalue}/>
                <button on onClick={this.ab}>FRONT</button>
                <button on onClick={this.ba}>BACK</button>
                <table>
                    <thead>
                        <tr>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{a1}</td>
                            <td>{b1}</td>
                            <td>{c1}</td>
                            <td>{d1}</td>
                            <td>{f1}</td>
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

export default Task7;