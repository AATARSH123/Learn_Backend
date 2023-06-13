import React from 'react'
class Task2 extends React.Component{
            constructor(){
            super();
            this.state={
                a:prompt(),
                ans:0
            
            }
          }
  
     convert(){
      let country="";
        console.log("hi")
        country=window.prompt()
        switch(country){
            case "usd": {
               this.setState({
                ans:(this.state.a)*0.12
              
                
               })
               break;
              }
              case "singapore": {
                this.setState({
                 ans:(this.state.a)*0.567
               
                 
                })
                break;
               }

        }



     }

    render(){
            return(
                <div>
                  
                  {/* <h1>{`USD ${(this.state.a)*0.12}`}</h1>
                  <h1>{`Euro ${(this.state.a)*0.011}`}</h1>
                  <h1>{`Chinese  ${(this.state.a)*0.083}`}</h1>
                  <h1>{`Mauritian Rupee ${(this.state.a)*0.55}`}</h1>
                  <h1>{`Singapore  ${(this.state.a)*0.016}`}</h1> */}
                  <h1>{this.state.ans}{this.state.a}</h1>


                <button onClick={()=>this.convert()}>Convert</button>
                
            </div>
            )
          }


        }

        export default Task2