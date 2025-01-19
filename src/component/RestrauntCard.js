import {CDN_IMG} from  './config';
import { useContext } from 'react';
import UserContext from '../../utils/UserContext';

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    totalRatingsString,
    totalRatings,
    costForTwo, 
    address,

  }=resData?.data)=>{
    const {loggedInUser} = useContext(UserContext);
      return(
          <div className='m-4 p-4 w-[280px]  rounded-lg bg-gray-200 hover:bg-red-100 hover:2xl:size transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
           align-items: center '>
              <img className='rounded-xl ' src={CDN_IMG
                  +cloudinaryImageId 
              }></img> 
              <h2 className='font-bold py-2 text-lg '>{name}</h2>
              <h3 >{cuisines.join(", ")}</h3>
              <h4>
  {totalRatingsString || (totalRatings ? `${totalRatings} rating` : "No ratings available")}
</h4>


                <h5>{costForTwo}</h5>
                <h6>{address}</h6>
                <h5>User: {loggedInUser}</h5>
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