import React from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function Products() {
  return (
    <div>
        All Products
        Search:<input></input><br></br>
      
    <nav>
    <Link to="cars">Cars</Link>
    <Link to="bike">Bike</Link>
    </nav>
    
    <Outlet/>
    </div>

  )
}
