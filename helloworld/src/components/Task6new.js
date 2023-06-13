import React,{ Component } from "react";

class Task6new extends Component{

    constructor(){
        super()
        this.state={
           name:"",roll_no:"",l:[],dep:"",
           na:"",rn:"",deps:"",
           roll:"",n1:"",de:"",
           sear:"",newr:"",ul:"",
           k:"",del:""
        }; 
    }

    
chname=(event)=>{
    this.setState({
        name:event.target.value,
      
    })  
}
chroll=(event)=>{
    this.setState({
        roll_no:event.target.value,
      
    })
}
chdep=(event)=>{
    this.setState({
        dep:event.target.value,
    })
}
sub=(event)=>{
    this.setState({
    l:[...this.state.l,{n:this.state.name,r:this.state.roll_no,
d:this.state.dep}]
    })
}
search = (event) => {
        this.state.l.map((x)=>{
            console.log(x)
            if(x.r===this.state.roll){
          this.setState({na:x.n,deps:x.d,rn:x.r})
        }
        return 0
        }) 
       
    event.preventDefault();
  };

change=(e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
}  
clr=()=>{
    this.setState({
        name:"",dep:"",roll_no:""
    })
}

update=()=>{
    this.state.l.map((x)=>{
        if(x.r===this.state.sear){
        this.setState({
            ul:(
            <>
            <input name="newr" value={this.newr}onChange={this.change}/>
            <br></br>
            <button onClick={this.rollupdate}>ROLL_UPDATE</button>
            <br></br>
            <button onClick={this.nameupdate}>NAME_UPDATE</button>
            <br></br>
            <button onClick={this.markupdate}>MARK_UPDATE</button>
            </>
            )
            
    })
    }
    return 0 
    }) 
    
}
rollupdate=(e)=>{
    this.state.l.map((x)=>{
        if(x.r===this.state.sear){
            x.r=this.state.newr
                  
    } 
    this.setState({})
    return 0
    })
    e.preventDefault()
}
markupdate=(e)=>{
    this.state.l.map((x)=>{
        if(x.r===this.state.sear){
            x.d=this.state.newr
                  
    } 
    this.setState({})
    return 0
    })
    e.preventDefault()
}
nameupdate=(e)=>{
    this.state.l.map((x)=>{
        if(x.r===this.state.sear){
            x.n=this.state.newr
                  
    } 
    this.setState({})
    return 0
    })
    e.preventDefault()
}

delUpdate=(e)=>{
   var i =0
    this.state.l.map((x)=>{
        if(x.r===this.state.del){
            delete this.state.l[i]          
    }
    i=i+1
    this.setState({})
    return 0
    })
    e.preventDefault()
}



render(){
    // const {name,roll_no,dep}=this.state
    var a = this.state.l.map((x,index)=><h3 key={index}> {x.n}</h3>)
    var b = this.state.l.map((x,index)=><h3 key={index}> {x.r}</h3>)
    var c = this.state.l.map((x,index)=><h3 key={index}> {x.d}</h3>)
    //var d = this.state.ul.map((x,index)=><h3 key={index}> {x}</h3>)
     return(<div>
          
             <div>
             <label>NAME</label>
             <input type="text" value={this.state.name} onChange={this.chname}/>
             </div>
             <div>
             <label>ROLL NO</label>
             <input type="text" value={this.state.roll_no} onChange={this.chroll}/>
             </div>
             <div>
             <label>MARK</label>
             <input type="text" value={this.state.dep} onChange={this.chdep}/>
             </div>
             <div>
                 <button type="submit" onClick={this.sub}>Submit</button>
                 <button type="clear" onClick={this.clr}>Clear</button>
             </div>
            <div>
            <table>
                <tbody className="a1">
                <tr>
                <th>NAME</th>
                <th>ROLL NO</th>
                <th>MARK</th>
                </tr>
                <tr>
                    <td>{a}</td>
                    <td>{b}</td>
                    <td>{c}</td>
                    
                </tr>
                </tbody>
            </table>
             </div>
         {/* <h1>count  {this.state.a} </h1>  {this.state.count}</h1> */}
        {/* <button onClick={()=>this.inc()}>Yes</button>
         <button onClick={()=>this.dec()}>No</button> */}
         <label>Enter Roll_no</label>
         <input name="roll" value={this.state.roll} onChange={this.change}/>
         <button  onClick={this.search}> Search</button>
         <h3>NAME:{this.state.na}</h3>
         <h3>ROLL_NO:{this.state.rn}</h3>
         <h3>MARK:{this.state.deps}</h3>
         <label>Enter Roll_no to UPDATE</label>
         <input name="sear" value={this.state.sear} onChange={this.change}/>
         <button onClick={this.update} >UPDATE</button>
         <br></br>
         {this.state.ul}
         <br></br>
         <label>Enter ROLL_NO to DELETE </label>
         <input name="del"value={this.state.del} onChange={this.change}/>
         <button onClick={this.delUpdate}>DELETE</button>
     </div> 
     )
 }
}
export default Task6new