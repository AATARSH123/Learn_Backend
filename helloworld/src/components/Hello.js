import React from "react";
// const Hello=(props)=> {
//     // return React.createElement("div",{id:"home",class:"homeclass"},React.createElement("h1",{id:"home"},"Welcome"))
    
//     const{name,age}=props
    
//     return (
//         <div>
//             {/* {props.name}
//             {props.children} */}
//             <h1>{name} with age {age}</h1>

//         </div>
//        )
// } 
// export default Hello;







function Hello(){
    function click(){
        console.log("Button is clicked")
    }

return  <button onClick={click}>click</button>
}

export default Hello;