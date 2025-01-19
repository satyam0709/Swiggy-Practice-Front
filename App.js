
import React , {lazy, Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/component/Header';
import Footer from './src/component/Footer';
import Body from './src/component/Body';
import About from './src/component/About.js';
import Error from './src/component/Error.js';
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Contact from './src/component/Contact.js';
import  RestaurantMenu from './src/component/RestaurantMenu.js';
import { useEffect } from 'react';
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './src/component/Cart.js';

 
const Grocery = lazy(()=>import('./src/component/Grocery.js'));
const About = lazy(()=>import('./src/component/About.js')); 
const Applayout = () => {

const  [UserName , setUserName] = useState();

useEffect(()=>{
  const data = {
    name : "Satyam Kumar",
  };
  setUserName(data.name)
},[]);


  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{loggedInUser : UserName , setUserName}}>
      <div className=''>
      <Header />
      <Outlet/>
      </div>
      <Footer />
      </UserContext.Provider>
      </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement:<Error/>,
    children : [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact Us",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restraunt/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path : "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
