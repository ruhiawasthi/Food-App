
import { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
 
//   useEffect(()=>{
//     const timer = setInterval(()=>{
//      console.log("setInterval");
//     },1000)
    

// return()=>{
//     clearInterval(timer);
// }

//   })
  return (
    
    <div className="user">
      <h1>Count: {count}</h1>
      {/* <h1>Count: {count2}</h1> */}
      <h1>Name: {props.name}</h1>
      <h2>Location: {props.location}</h2>
      <h2>Email: {props.contact}</h2>
    </div>
  );
};

export default User;
