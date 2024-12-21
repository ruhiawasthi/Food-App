import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories:", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold  text-2xl p-3 my-4">{name}</h1>
      <p className="font-bold">{cuisines.join(",")}</p>
      {/* Accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory key="category?.card?.card.title" data={category?.card?.card} showItems={index === showIndex? true: false} setShowIndex={()=>{setShowIndex(index)}}/>
    
      ))}
    </div>
  );
};

export default RestaurantMenu;
