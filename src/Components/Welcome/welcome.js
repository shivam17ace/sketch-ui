import React from "react";
import "../Welcome/welcome.scss";
import "../Welcome/media.scss";
import Artist from "../../Images/artist.png";
import Avatar from "../../Images/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import Delivery from "../../Images/delivery.png";
import Button from "@mui/material/Button";
import HeroBg from "../../Images/heroBg.png";
import Sketch2 from "../../Images/sketch2.png";
import Sketch3 from "../../Images/sketch3.png";
import Sketch4 from "../../Images/sketch4.png";
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
          <img src={Artist} alt="logo" />
          <span>Sketchers</span>
        </div>
        <ul>
          <motion.li whileTap={{ scale: 0.8 }}>Home</motion.li>
          <motion.li whileTap={{ scale: 0.8 }}><Link to="/createorder" className="nav_links">Order Sketch</Link></motion.li>
          <motion.li whileTap={{ scale: 0.8 }}><Link to="/gallery" className="nav_links">Gallery</Link></motion.li>
          <motion.li whileTap={{ scale: 0.8 }}><Link to="/shop" className="nav_links">Shop</Link></motion.li>
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
            <p>Sketch Delivery</p>
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
          <motion.div className="inner_left_button">
            <Button variant="contained" className="order_button">
              <Link to="/createorder" className="order_link">Order Now</Link>
            </Button>
          </motion.div>
        </div>
        <div className="right_portion">
          <img src={HeroBg} alt="herobackground" className="image_right" />
          <div className="wrapper_overlay">
            <div className="overlay_1 overlay_blur">
              <img src={Sketch3} alt="sketch1" />
            </div>
            <div className="overlay_2 overlay_blur">
              <img src={Sketch2} alt="sketch2" />
            </div>
          </div>
          <div className="wrapper_overlay_2">
            <div className="overlay_blur overlay_3">
              <img src={Sketch4} alt="sketch4" />
            </div>
            <div className="overlay_blur overlay_4">
              <img src={Sketch3} alt="sketch3" />
            </div>
          </div>
        </div>
      </div>
      <div className="container_content_2">
        <div className="container_inner_content_2">
          <div className="inner_content_heading">
            <h3>Our Recent Delivered Sketches</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
