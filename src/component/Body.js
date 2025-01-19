import RestrauntCard ,{withpromoted} from "./RestrauntCard";
import { useState, useEffect , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); // to create a state variable a way to create react vriable

  const RestrauntCardWithPromoted = withpromoted(RestrauntCard);

  useEffect(() => {
    getRestaurants();
  }, []); 


  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  }
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>it's seems your internet connection is lost</h1>;
  }

  const { loggedInUser , setUserName} = useContext(UserContext);

  return filterRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="border-black px-10 py-5 rounded-lg flex space-x-5">
        <input
          type="text"
          data-testid = "searchInput"
          className="border border-black  rounded-lg"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div>
          <button
            className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilterRestaurants(data);
            }}
          >
            Search
          </button>
        </div>


      <div className="search flex items-center ">
      <label>User : </label>
      <input className="border border-black rounded-xl " 
      value={loggedInUser}
      onChange={(e)=> setUserName(e.target.value)}/>
      </div>


      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restraunt/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestrauntCardWithPromoted {...restaurant.info} />
              ) : (
                <RestrauntCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
