import React from "react";
import "../Welcome/welcome.scss"
import Logo from "../../Images/logo.png";
import Avatar from "../../Images/avatar.png";
import {MdShoppingBasket} from "react-icons/md";
import {motion} from "framer-motion";
function Welcome () {
    return(
    <div className="container">
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" />
                <span>City</span>
            </div>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About Us</li>
                <li>Service</li>
            </ul>
            <span className="icon-shopping">
                <MdShoppingBasket />
                <div className="cart_count">1</div>
            </span>
            <div className="avatar_logo">
                <motion.img whileTap={{scale:0.7}} src={Avatar} alt="avatar" />
            </div>
        </div>
    </div>
    )
}
export default Welcome;