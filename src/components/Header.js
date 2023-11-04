import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState('login');

    // if no depedency array => useEffect is calledd on every render
    // if dependency array is empty => useEffect will call be called once or initial render
    // if we depedency array have some value : when the value change it will rerender
    const onlineStatus = useOnlineStatus();
    
    useEffect(() => {
        console.log("useEffect called")
    },[btnName])
    return (
    <div className='flex justify-between m-2'>
        <div className='logo-container'>
            <img className="w-56" src={LOGO_URL} />
        </div>
        <div className='nav-items flex items-center'>
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    Online Status : {onlineStatus ? "Green" : "Red"}
                </li>
                <li className="px-4">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="px-4">
                    <Link to="/about">
                        About Us
                    </Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">
                        Grocery
                    </Link>
                </li>
                <li>Cart</li>
                <button className="login px-4" onClick={() => {btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
            </ul>
        </div>
    </div>
    )
};

export default Header;