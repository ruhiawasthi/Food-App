import { LOGO_URL } from "../utils/contants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Header = () => {
  const [login, setlogin] = useState("login");
  const onlineStatus = useOnlineStatus();
  const loggedInUser = useContext(UserContext);
  // console.log(loggedInUser);

  //This is how we subscribe to the store
  const item = useSelector((store) => store.cart.items);
  // console.log("item:", item);

  return (
    <div className="flex justify-between border bg-slate-100 shadow-lg">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li className="px-4"> Online Status:{onlineStatus ? "🟢" : "🛑"}</li>
          <Link to="/">
            <li className="px-4"> Home</li>
          </Link>
          <Link to="/contact">
            <li className="px-4"> Contact</li>
          </Link>
          <Link to="/about">
            <li className="px-4"> About us</li>
          </Link>

          <Link to="/cart">
            <li className="px-4 font-bold"> Cart{item.length}</li>
          </Link>
          <div>
            <button
              className="px-4"
              onClick={() => {
                setlogin("logout");

                login === "login" ? setlogin("logout") : setlogin("login");
              }}
            >
              {login}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
