import {useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from './Hooks/useOnlineStatus';
import UserContext  from '../../utils/UserContext';
import {useSelector} from 'react-redux';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);

  console.log(cartItems);

  return (
    <div className='flex justify-between w-full sm:bg-green-50 md:bg-red-50 lg:red-50'>
      {/* Logo, Navigation, and Button all in one div */}
      <div className='flex items-center justify-between w-full pr-3'>
        {/* Logo */}
        <a href='/'>
          <img
            className='w-40'
            alt='logo'
            src='https://th.bing.com/th?id=OIP.QvcnKYpRZ5QrguTIhF1ISQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
          />
        </a>

        {/* Navigation Links */}
        <ul className='flex justify-between items-center space-x-8 '>
          <li>
            Online Status {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact Us">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/Cart">Cart - ({cartItems.length} Items) </Link>
          </li>

        {/* Login/Logout Button */}
        <button 
        
        className='bg-blue-500  hover:bg-blue-500 hover:text-black text-white font-bold py-2 px-4 rounded-lg'
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        <li className="px-4 font-bold">{loggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
