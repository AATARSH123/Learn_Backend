import React ,{useState}from 'react'

export default function Usest() {
    const init=0
    const[count,setCount]=useState(init)
    const infive=()=>{
        for(let i=0;i<5;i++){
            setCount(prev=>prev+1)
        }

    }

  return (
    <div>
        count={count}
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
      <button onClick={()=>setCount(init)}>Reset</button>
      <button onClick={()=>infive()}>IncFive</button>

      
      
    </div>
  )
}
 