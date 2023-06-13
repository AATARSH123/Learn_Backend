import React from 'react'
import { useAuth } from './Authentication'

import { NavLink,Link } from 'react-router-dom'
export const Navbar = () => {
    const auth=useAuth()
    const instyle=({isActive})=>{
        return({fontSize:isActive?"20px":"20px",
    color:isActive?"green":"red"})
    }
  return (  
    <div>
        <nav>
            <NavLink style={instyle} to="/">Home</NavLink>
            <NavLink style={instyle} to="/about">About</NavLink>
            <NavLink style={instyle} to="/products">
                product
            </NavLink>
            <NavLink style={instyle} to="users">Users</NavLink>
            <NavLink style={instyle} to="profile">Profile</NavLink>
            {!auth.user && <NavLink style={instyle} to="login">Login</NavLink>}

        </nav>
    </div>
  )
}