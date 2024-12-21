// import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";

// class About extends React.Component {
//   constructor(props) {
//     super(props);

//     console.log("Parent Constructor");
//   }
//   componentDidMount() {
//     console.log("Parent componentDidMount");
//   }

//   render() {
//     console.log("Parent render");
//     return (
//       <div>
//         <h4>This is about page.</h4>
//         <User name={"Ruhi"} location={"Gurgaon"} contact={"6265402633"} />
//         <UserClass name={"first"} location={"Gurgaon"} contact={"6265402633"} />
//         <UserClass
//           name={"second"}
//           location={"Gurgaon"}
//           contact={"6265402633"}
//         />
//         <UserClass name={"third"} location={"Gurgaon"} contact={"6265402633"} />
//       </div>
//     );
//   }
// }

// export default About;

import User from "./User";
import UserClass from "./UserClass";
const About =()=>{
    return (
    <div>
    <h4>This is about page.</h4>
    <User name={"abc"} location={"Gurgaon"} contact={"4567898765"}/>
    {/* <UserClass name={"abc"} location={"Gurgaon"} contact={"0876544444"}/> */}
    </div>);
}

export default About;
