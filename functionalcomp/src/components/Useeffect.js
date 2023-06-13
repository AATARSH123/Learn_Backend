import React ,{useState,useEffect}from 'react'

export default function Useeffect() {
    const[count,setCount]=useState(0)
    const[val,changeval]=useState("")
    useEffect(()=>{
        console.log("counting")
        document.title=`click ${count} times`

    })


  return (
    <div>
        <input value={val} onchange={(e)=>changeval(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Click</button>

      
    </div>
  )
}
