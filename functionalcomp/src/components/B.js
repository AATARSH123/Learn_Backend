 //import React from 'react'
// import D from './D' 
// export default function B() {
//   return (
//     <div>
//       <D/>
//     </div>
//   )
// }

// import { useState } from "react";
// function useFormInp(init){
//   const[a,setA]=useState(init)
//   const inpAttr={
//     value:a,
//     onchange:(e)=>setA(e.target.value)
//   }
//   return [a,inpAttr]
// }

// export default useFormInp


import React from 'react'
function B() {
  console.log("B component")
  return (
    <div>
      Welcome
      
    </div>
  )
}

export default React.memo(B)