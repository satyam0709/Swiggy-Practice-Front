import { useSelector } from 'react-redux';
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../utils/cartSlice';


const Cart = ()=>{

    // mistakes 
    // this is the way to get the store from the redux
    // but it is less efficient cause it will render whole shop instead of only cart items
    // so small thing easy to handle and easy to manage 

    // const store = useSelector((store)=>store);
    // const cartItems = store.cart.items;

    // here you selecting the specific portion of the store
    // that is it subscribes to the store 
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }


    return (
        <div className="text-center m-5 p-5">
            <h1 className="text-3xl font-bold">Cart</h1>
            <div className='w-6/12 m-auto p-auto '>
            <button className="bg-black rounded-lg text-white m-2 p-2"
            onClick={handleClearCart}
            >Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is empty! Add Items so that it look good</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
};
export default Cart;