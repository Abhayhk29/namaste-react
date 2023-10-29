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
    <div className='header'>
        <div className='logo-container'>
            <img src={LOGO_URL} />
        </div>
        <div className='nav-items'>
            <ul>
                <li>
                    Online Status : {onlineStatus ? "Green" : "Red"}
                </li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="contact">
                        Contact Us
                    </Link>
                </li>
                <li>Cart</li>
                <button className="login" onClick={() => {btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
            </ul>
        </div>
    </div>
    )
};

export default Header;