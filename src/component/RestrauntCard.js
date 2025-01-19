import { CDN_IMG } from "./config";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const RestrauntCard = (
  {
    name,
    cuisines = [],
    cloudinaryImageId,
    totalRatingsString,
    totalRatings,
    costForTwo,
    address,
  } = resData?.data
) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      className="m-4 p-4 w-[280px] h-[400px] rounded-lg bg-gray-200 hover:bg-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden group"
    >
      <img
        className="rounded-xl w-full h-[150px] object-cover overflow-hidden"
        src={CDN_IMG + cloudinaryImageId}
        alt={name}
      />
      <h2 className="font-bold py-2 text-lg truncate">{name}</h2>
      <h3 className="truncate">{cuisines.join(", ")}</h3>
      <h4 className="truncate">
        {totalRatingsString ||
          (totalRatings ? `${totalRatings} rating` : "No ratings available")}
      </h4>
      <h3 className="truncate">
        {cuisines?.length > 0 ? cuisines.join(", ") : "Cuisines not available"}
      </h3>
      <h5 className="truncate">{costForTwo}</h5>
      <h6 className="truncate">{address}</h6>
      <h5 className="truncate">User: {loggedInUser}</h5>
      
      {/* Hover Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 text-white p-4 hidden group-hover:block">
        <h2 className="font-bold text-lg">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>
          {totalRatingsString ||
            (totalRatings ? `${totalRatings} rating` : "No ratings available")}
        </h4>
        <h5>{costForTwo}</h5>
        <h6>{address}</h6>
      </div>
    </div>
  );
};

export const withpromoted = (RestrauntCard) => {
  return (props) => (
    <div className="relative">
      {props.ribbon?.some((r) => r.type === "PROMOTED") && (
        <label className="absolute top-0 left-0 bg-yellow-400 text-black px-2 py-1 rounded-md">
          Promoted
        </label>
      )}
      <RestrauntCard {...props} />
    </div>
  );
};
export default RestrauntCard;
