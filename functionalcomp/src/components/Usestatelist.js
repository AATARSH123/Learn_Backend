import React,{useState}from 'react'

export default function Usestatelist() {
    const[list,setList]=useState([])
    const addnumbers=()=>{
        setList([...list,{id:list.length,value:Math.floor(Math.random()*10)}])

    }
  return (
    <div>
         <h1>{list.map(x=>x.value)}</h1> 
        <button onClick={addnumbers}>click</button>
    </div>
  )
}
