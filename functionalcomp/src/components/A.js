// import React ,{useContext}from 'react'
// import  { usercontext1 } from '../App'



// export default function A() {
    
//     const val=useContext(usercontext1)

//   return (
//     <div>
//         <button onClick={()=>val("inc")}> inc</button>
//         <button onClick={()=>val("dec")}> dec</button>
//         <button onClick={()=>val("reset")}> reset</button>


        
        

        


      
//     </div>
//   )
// }

import React,{useEffect,useRef,useState} from 'react'
import useFormInp from './B'
function A(){
const[a,attr]=useFormInp("")
const[b,attr1]=useFormInp("abc")
const submit=(e)=>{
  alert(`${a}  and ${b}`)
  e.preventDefault()
}
return(
  <form onSubmit={submit}>
  <div>
  <input type="text" {...attr}/>
  <input type="text" {...attr}/>
  <button type="submit">submit</button>

  </div>
  </form>

)

}
export default A