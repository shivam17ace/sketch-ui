import React from "react";
import "../Welcome/welcome.scss";
import Logo from "../../Images/logo.png";
import Avatar from "../../Images/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import Delivery from "../../Images/delivery.png";
import Button from "@mui/material/Button";
import HeroBg from "../../Images/heroBg.png";
import I1 from "../../Images/i1.png";
import C1 from "../../Images/c1.png";
import F1 from "../../Images/f1.png";
import R1 from "../../Images/r1.png";
import { useNavigate, Link } from "react-router-dom";

function Welcome() {
    
  let navigate = useNavigate(); 
  const toggleDropDown = () => {
    let path = `login`; 
    navigate(path);
  }

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>City</span>
        </div>
        <ul>
          <motion.li whileTap={{ scale: 0.8 }}>Home</motion.li>
          <motion.li whileTap={{ scale: 0.8 }}><Link to="/menu" className="nav_links">Menu</Link></motion.li>
          <motion.li whileTap={{ scale: 0.8 }}><Link to="/about" className="nav_links">About Us</Link></motion.li>
          <motion.li whileTap={{ scale: 0.8 }}><Link to="/service" className="nav_links">Service</Link></motion.li>
        </ul>
        <motion.span whileTap={{ scale: 0.7 }} className="icon-shopping">
          <MdShoppingBasket />
          <div className="cart_count">1</div>
        </motion.span>
        <div className="avatar_logo" onClick={toggleDropDown}>
          <motion.img whileTap={{ scale: 0.7 }} src={Avatar} alt="avatar" />
        </div>
      </div>
      <div className="container_content">
        <div className="left_portion">
          <div className="inner_content_left">
            <p>Bike Delivery</p>
            <span className="image_span">
              <img src={Delivery} alt="bikelogo" className="delivery_img" />
            </span>
          </div>
          <div className="inner_header">
            <h1>
              The Fastest Delivery{" "}
              <span className="inner_left_heading">In Your City</span>
            </h1>
          </div>
          <div className="inner_left_paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <motion.div whileTap={{ scale: 0.9 }} className="inner_left_button">
            <Button variant="contained" className="order_button">
              Order Now
            </Button>
          </motion.div>
        </div>
        <div className="right_portion">
          <img src={HeroBg} alt="herobackground" className="image_right" />
          <div className="wrapper_overlay">
            <div className="overlay_1 overlay_blur">
              <img src={I1} alt="icecream" />
              <p className="dish_name">IceCream</p>
            </div>
            <div className="overlay_2 overlay_blur">
              <img src={R1} alt="rice" />
              <p className="dish_name">Rice</p>
            </div>
          </div>
          <div className="wrapper_overlay_2">
            <div className="overlay_blur overlay_3">
              <img src={C1} alt="chicken" />
              <p className="dish_name">Chicken</p>
            </div>
            <div className="overlay_blur overlay_4">
              <img src={F1} alt="fruit" />
              <p className="dish_name">Fruits</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container_content_2">
        <div className="container_inner_content_2">
          <div className="inner_content_heading">
            <h3>Our Healthy & Fresh Fruits</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
