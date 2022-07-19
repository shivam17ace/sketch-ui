import React, { useState } from "react";
import "../Welcome/welcome.scss"
import Logo from "../../Images/logo.png";
import Avatar from "../../Images/avatar.png";
import {MdShoppingBasket} from "react-icons/md";
import {motion} from "framer-motion";
import Select from 'react-select';
import Delivery from "../../Images/delivery.png";
import Button from '@mui/material/Button';
import HeroBg from "../../Images/heroBg.png"

function Welcome () {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const toggleDropDown = () =>{
        const data = isDropDownVisible ? false : true;
        setIsDropDownVisible(data);
    }
    const option =[{label: 'Logout', icon:'MdLogout'}];

    return(
    <div className="container">
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" />
                <span>City</span>
            </div>
            <ul>
                <motion.li whileTap={{scale:0.8}}>Home</motion.li>
                <motion.li whileTap={{scale:0.8}}>Menu</motion.li>
                <motion.li whileTap={{scale:0.8}}>About Us</motion.li>
                <motion.li whileTap={{scale:0.8}}>Service</motion.li>
            </ul>
            <motion.span whileTap={{scale:0.7}} className="icon-shopping">
                <MdShoppingBasket />
                <div className="cart_count">1</div>
            </motion.span>
            <div className="avatar_logo" onClick={toggleDropDown}>
                <motion.img whileTap={{scale:0.7}} src={Avatar} alt="avatar" />
            </div>
            {
                isDropDownVisible ? 
                <span>
                  <Select options={option} defaultValue={''} />
                </span>
                : null
            }
        </div>
        <div className="row container_content">
            <div className="left_portion col-lg-6 col-sm-6">
                <div className="inner_content_left">
                <p>Bike Delivery</p>
                <span className="image_span">
                    <img src={Delivery} alt="bikelogo" className="delivery_img" />
                </span>
                </div>
                <div className="inner_header">
                    <h1>The Fastest Delivery <span className="inner_left_heading">In Your City</span></h1>
                </div>
                <div className="inner_left_paragraph">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <motion.div whileTap={{scale:0.9}} className="inner_left_button">
                     <Button variant="contained" className="order_button">Order Now</Button>
                </motion.div>
            </div>
            <div className="right_portion col-lg-6 col-sm-6">
                <img src={HeroBg} alt="herobackground" className="image_right" />
            </div>
        </div>
    </div>
    )
}
export default Welcome;