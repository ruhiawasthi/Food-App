import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      count: 1,
      count2: 2,
    };

    console.log(this.props.name + "child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child componentDidMount");
    const data = await fetch("");
    // const json = await data.json();
  }

  render() {

    console.log(this.props.name + "child render");
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h2>Email: {contact}</h2>
        <UserContext.consume>
          {({loggedInUser})=> <h2>{loggedInUser}</h2>}
        </UserContext.consume>
      </div>
    );
  }
}

export default UserClass;
