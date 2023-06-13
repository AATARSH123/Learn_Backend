import React from 'react'
import {useContext,useState} from 'react'
const AuthContext =React.createContext()
export const AuthenticationProvider=(props) =>{

    const[user,setUser]=useState(null)
    const login=(user)=>{
        setUser(user)
    }
    const logout=(user)=>{
        setUser(null)
    }

  return (
  <AuthContext.Provider value={{user,login,logout}}>
    {props.children}
  </AuthContext.Provider>
  )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}
