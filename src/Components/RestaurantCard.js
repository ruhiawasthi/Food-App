import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    locality,
    costForTwo,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100  hover:bg-gray-200">
      <img
        className="rounded-sm"
        alt="res-logo"
        width="200px"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>{cuisines.join( ",")}</h4> */}
      <h4>{avgRatingString} stars</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { avgRating } = props?.resData?.info;
    return (
      <div>
        <label className=" absolute bg-black text-white p-2 m-2 rounded-sm">
          {" "}
          {avgRating} Rating
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
