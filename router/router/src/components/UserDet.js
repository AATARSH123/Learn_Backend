import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDet() {
    const {userid}=useParams()
  return (
    <div>
        Details of the user {userid}
      
    </div>
  )
}
