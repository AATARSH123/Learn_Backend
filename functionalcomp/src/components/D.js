// import React ,{useContext}from 'react'
// // import  { usercontext1 } from '../App'



// export default function D() {
    
//     const val=useContext(usercontext1)

//   return (
//     <div>
//         <button onClick={()=>val("inc")}> inc</button>
//         <button onClick={()=>val("dec")}> dec</button>
//         <button onClick={()=>val("reset")}> reset</button>


        
        

        


      
//     </div>
//   )
// }
import React from 'react'

 function D(props) {
    console.log(props.children)
  return (
    <div>
        <button onClick={props.fn}>{props.children}</button>
      
    </div>
  )
}
export default React.memo(D)