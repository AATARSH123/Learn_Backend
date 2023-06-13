import React, { Component } from 'react'

export default class Task6 extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            name:"",rollno:"",dob:"",rollno1:"",
            up:0
        }

    }
    chname=(event)=>{
        this.setState({
           
            name:event.target.value


        })
    }
    chroll=(event)=>{
        this.setState({
            
            rollno:event.target.value


        })
    }
    chdob=(event)=>{
        this.setState({
           
            dob:event.target.value


        })
    }
    chroll1=(event)=>{
        this.setState({
            rollno1:event.target.value
        })
    }
    save=(event)=>{
        this.setState({
            list:[...this.state.list,{name:this.state.name,rollno:this.state.rollno,dob:this.state.rollno}]
            

        })
        //console.log(this.state.list)
        event.preventDefault();
        
    }
    clear=(event)=>{
        this.setState({
            name:"",
            rollno:"",
            dob:""
        })
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   update=()=>{
    this.state.list.map((x)=>{
        if(x.rollno==this.state.update){
            this.setState({
                up:(
                    <div>
                        <input name="update" value={this.ubtn} onChange={this.onChange} />
                        <br>
                        </br>
                        <button onClick={this.rollupdate}>ROLL_UPDATE</button>
                      <br></br>
                     <button onClick={this.nameupdate}>NAME_UPDATE</button>
                   <br></br>
                    <button onClick={this.markupdate}>MARK_UPDATE</button>

                    </div>
                )
            })
        }
        return 0;
    })
}
    
  render() {
   var a1=this.state.list.map((x,index)=><h3 key={index}>{x.name}</h3>)
   var b1=this.state.list.map((x,index)=><h3 key={index}>{x.rollno}</h3>)
   var c1=this.state.list.map((x,index)=><h3 key={index}>{x.dob}</h3>)

    return (
     <form  type="submit" onSubmit={this.save}>
        <div>
            <label>Name</label>
            <input type="text"   value={this.state.name} onChange={this.chname} /><br></br>
            <label>Roll No</label>
            <input type="text"  value={this.state.rollno} onChange={this.chroll}/><br></br>
            <label>DOb</label>
            <input type="text"  value={this.state.dob} onChange={this.chdob} /><br></br>
            <button>submit</button>
            <button onClick={this.clear}>clear</button><br></br>
            <button onClick={this.update}>Update</button>
            <input name="sear" value={this.state.sear} onChange={this.change}/>
            {this.state.up} 
            <table>
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>rollno</td>
                            <td>dob</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{a1}</td>
                            <td>{b1}</td>
                            <td>{c1}</td>
                           
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
     </form>
    
    )
  }
}
