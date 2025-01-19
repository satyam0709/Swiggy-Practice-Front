import { CDN_IMG } from "./config";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";


const ItemList = ({items , dummy})=>{
    // console.log(dummy);

    const dispatch = useDispatch();

    const handleAddItems = (item)=>{
        dispatch(addItems(item));

    };

    return(
        <div className="flex justify-center ">
           <div>
            {items.map((item) =>
            <div 
            data-testid = "foodItems"
            className="p-2 m-2  border-gray-400 border-b-2 flex justify-between"
                key={item.card.info.id}
                >
                    <div className="w-9/12">
                <div className="text-left font-bold">
                    <span>{item.card.info.name}</span> 
                    <span>  - ₹ 
                        {item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                </div>
                <p className="text-xs">
                    {item.card.info.description}
                </p>
            </div>
            <div className="w-3/12 p-2">
            <div className="absolute">
            <button className="p-2 mx-5 rounded-lg  shadow-lg  m-auto  bg-black text-white"
            //  onClick = {handleAddItems(item)}  CAUTION : This immediately invokes handleAddItem(item) during render, rather than waiting for a click event.
             onClick = {()=> handleAddItems(item)}
            //  Creates an anonymous arrow function that calls handleAddItem with the item argument when the button is clicked.
            //  onClick = {handleAddItems}
            //  Behavior: Passes the function handleAddItem as a reference. It gets executed when the button is clicked.
             >
            Add +
            </button>
            </div>
            <img src = {CDN_IMG + item.card.info.imageId} className="w-full h-40  "></img>
            </div>
            </div>
        )}
           </div>
        </div>
    );
};
export default ItemList;