import React from 'react'
class Task1 extends React.Component{
            constructor(){
            super();
            this.state={
                count:0
            }
          }
          inc(){

            

           if(this.state.count<15){
            this.setState((prev)=>({
                count:prev.count+1
            
            }))
        }
       

          }

          dec(){

            if(this.state.count>0){

            
            this.setState((prev)=>({
                count:prev.count-1
            }))
        }
      

          }

          
          
          render(){
            return(
                <div>
                    <h1>Count</h1><h1>{this.state.count}</h1>
                        {/* if({this.state.count>0 && this.state.count<15}) {
                            <h1>{this.state.count}</h1>
                        }
                        else{
                            <h1></h1>
                        } */}
                    <button onClick={()=>this.inc()}>increment</button>
                    <button onClick={()=>this.dec()}>decrement</button>

                </div>
            )
          }


        }

        export default Task1