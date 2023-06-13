import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Order() {
    const navigate=useNavigate()
  return (
    <div>
        Order is conformed
        <button onClick={()=>navigate(-1)}>Back</button>
      
    </div>
  )
}
