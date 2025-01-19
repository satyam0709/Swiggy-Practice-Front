import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_IMG } from "./config";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex , setShowIndex] = useState(null);

  if (!resInfo) {
    return <Shimmer />;
  }
  

  const restaurantDetails = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  const menuItems =
    resInfo?.cards
      ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (menu) => menu?.card?.card?.itemCards
      )?.card?.card?.itemCards || [];


      const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]
         === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        //  console.log("Categories:", categories);


  return (
    <div className="">
      <div>
        <h2 className="flex flex-wrap justify-center font-bold py-6 text-3xl " 
        >{restaurantDetails?.name}</h2>
        <img
          className="mx-auto rounded-lg h-48 w-48"
          src={CDN_IMG + restaurantDetails?.cloudinaryImageId}
          alt={restaurantDetails?.name}
        />
        
        {/* <h3>{restaurantDetails?.avgRating} stars</h3> */}
        <h3 className="flex flex-wrap justify-center font-bold">Cost For Two : {restaurantDetails?.costForTwo/100}</h3>
        <h3 className="flex flex-wrap justify-center font-bold">Address : {restaurantDetails?.city} , {restaurantDetails?.areaName}</h3>
        <h3 className="flex flex-wrap justify-center">{restaurantDetails?.areaName}</h3>
      </div>
      {/* <div className="flex flex-wrap justify-center">
        <ul >
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - Rs{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            ))
          ) : (
            <li>Menu not available</li>
          )}
        </ul>
      </div> */}
    <div>
  {categories && categories.length > 0 ? (
    categories.map((category, index) => (
      // this is controlled component like it handles the state of showItems like if i click over one then only one show  and remaining collapse
      <RestaurantCategory
        key={index}
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        dummy={dummy}
        
      />
    ))
  ) : ( 
    <p></p>
  )}
</div>

 

    </div>
  );
};

export default RestaurantMenu;

