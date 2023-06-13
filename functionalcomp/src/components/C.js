// import React from 'react'
// import E from './E'
// export default function C() {
//   return (
//     <div>
//       <E/>
//     </div>
//   )
// }

import React from 'react'

function C(props) {
    console.log(props.name)
  return (
    <div>
    
      
    </div>
  )
}
export default React.memo(C)