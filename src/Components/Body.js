import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { reslist } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchTest] = useState("");

  const  {loggedInUser, setUserName} = useContext(UserContext);

  console.log(loggedInUser)
  const PromotedLable = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log("awaw",
      json?.data
    );
  };

  //conditional rendering using ternary operator

  return !listOfRestaurants?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchTest(e.target.value);
            }}
          />
          <button
            className="px-3 py-2 m-4 bg-slate-200 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-slate-200 rounded-lg"
            onClick={() => {
              const filterList = listOfRestaurants.filter(
                (res) => res.info.avgRatingString > 4
              );
              setlistOfRestaurants(filterList);
            }}
          >
            Filter Restaurants
          </button>
        </div>
        <div  className="search m-4 p-4 items-center">
          <label>Username</label>
        <input
          
            className="border border-solid border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <PromotedLable resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
