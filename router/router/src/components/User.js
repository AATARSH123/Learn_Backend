import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'
export default function User() {
    const[search,setSearch]=useSearchParams()
    const filter=search.get("filter")==="active"
  return (
    <div>
        <h1>User1</h1>
        <h1>User2</h1>
        <h1>User2</h1>
        <button onClick={()=>setSearch({filter:"active"})}>Active</button>
        <button onClick={()=>setSearch({})}>All Users</button>
        {filter?"Active users":"All users"}
      
    </div>
  )
}
