import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Authentication'

 const Profile=()=>{
        const navigate=useNavigate()
        const auth=useAuth()
       
            const logout=()=>{
                auth.logout()
                navigate("/")
            }
        
  return (
    <div>
        Welcome--{auth.user}<br></br>
        <button onClick={logout}>Logout</button>
      
    </div>
  )
}
export default Profile
