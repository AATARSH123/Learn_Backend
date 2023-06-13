import React from 'react';
// export function Welcome(){
//     return <h1>Welcome React</h1>//jsx
// }
// export function Wellcome(){
//     return <h1>Wellcome React</h1>//jsx
// }

// export default Welcome;
class Welcome extends React.Component{
    constructor(){
        super()
        this.state={message:"Welcome Guest",name:"Guest"}
        
    }
    change(){
        this.setState({
            message:"Thank you for subsribing",
            name:"John"
        })
    }
    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <h1>{this.state.name}</h1>
            <button onClick={this.change.bind(this)}>Subscribe</button>
        </div>
        
        
   ) }
        }
//           constructor(){
//             super();
//             this.state={
//                 count:0
//             }
//           }
//           inc(){
//             this.setState({
//                 count:this.state.count+1
//             },()=>console.log(this.state.count))



//             this.setState((prev)=>({
//                 count:prev.count+1
//             }))


//           }
//           incFive(){
//               this.inc();
//               this.inc();
//               this.inc();
//               this.inc();
//               this.inc();

//           }
//           render(){
//             return(
//                 <div>
//                     <h1>Count</h1><h1>{this.state.count}</h1>
//                     <button onClick={()=>this.incFive()}>increment</button>

//                 </div>
//             )
//           }
// }

export default Welcome