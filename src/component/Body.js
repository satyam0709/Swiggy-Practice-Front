import { useState } from 'react';
import restrauntlist from './config';
import RestrauntCard from './RestrauntCard';

function filterData(searchText,restaurants){
 return  restaurants.filter((restaurant)=>restaurant.info.name.includes(searchText)
);
}

const Body = () => {
    // let searchTxt = "KFC";
    const [searchText , setSearchText] = useState(""); // to create a state variable a way to create react vriable
    const [restaurants, setRestaurants] = useState(restrauntlist);
   
    return (
      <>
      <div className="search-container">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search"
        value={searchText}
        onChange={(e)=>
        {
          // e.target.value => whatever you write in input
          // searchText = e.target.value;
          setSearchText(e.target.value);
        }
        }
        />
      <button className="search-btn"
       onClick={()=>{
        const data = filterData(searchText , restaurants);
        setRestaurants(data);
       }
      }>Search
      </button>
      </div>
      <div
        className="restaurant-list"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {restaurants.map((restaurant) => (
          <RestrauntCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
            lastMileTravel={restaurant.info.sla.lastMileTravel}  // Pass it manually here
          />
        ))}
      </div>
      </>
    );
  };
 
  export default Body;