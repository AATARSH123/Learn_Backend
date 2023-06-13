import React, { useState,useCallback } from 'react'
import B from './B'
import C from './C'
import D from './D'

export default function Usercallback() {
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    const count1fn=useCallback(()=>{
        setCount1(count1+1)
    },[count1])
    const count2fn=useCallback(()=>{
        setCount2(count2+1)
    },[count2])
  return (
    <div>
        count1--{count1}
        count2--{count2}
        <B/>
        <C name="count1"/>
        <D fn={count1fn}>count1 Button</D>
        <C name="count2"/>
        <D fn={count2fn}>count2 Button</D>
      
    </div>
  )
}
