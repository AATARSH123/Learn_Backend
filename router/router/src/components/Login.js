import React, {useState}from 'react'
import { useAuth } from './Authentication'
import { useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const  Login=()=> {
    const location=useLocation()
    const navigate=useNavigate()
    const[user,setUser]=useState("")
    const auth=useAuth()
    const login=()=>{
        auth.login(user)
        navigate(location.state?location.state.path:"/",{replace:true})
    }


  return (
    <div>
      Username:<input value={user} onChange={(e)=>{
        setUser(e.target.value)}}/><br></br>
        <button onClick={login}>Login</button>
        
    
    </div>
  )
}
export default Login 