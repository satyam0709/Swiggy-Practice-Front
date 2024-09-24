const Title = ()=>(
    <a href='/'>
        <img
        className='logo'
        alt='logo'
        src='https://th.bing.com/th?id=OIP.QvcnKYpRZ5QrguTIhF1ISQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' >
         </img>
         </a>
);
const Header = () => {
    return(
        <div className='header'>
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;