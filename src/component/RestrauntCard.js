import {CDN_IMG} from  './config';

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravel,
  })=>{
      return(
          <div className='card'>
              <img src={CDN_IMG
                  +cloudinaryImageId 
              }></img> 
              <h2>{name}</h2>
              <h3>{cuisines.join(", ")}</h3>
              <h4>{lastMileTravel} km away</h4>
              </div>
      );
  };
export default RestrauntCard;