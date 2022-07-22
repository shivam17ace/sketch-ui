import React, {useState} from "react";
import "../Topbar/Topbar.scss";
import "../Topbar/media.scss";
import Avatar from "../../../Images/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import Logo from "../../../Images/art_logo_2.jpg";
import Line from "../../../Images/Blue Line.svg";
import {useNavigate} from "react-router-dom";
import {
    ButtonDropdown,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

function TopBar() {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    let navigate = useNavigate();

    const handleLogout = () =>{
        
        navigate("/", { replace: true });
    }
    const toggleDropDown = () => {
        const data = isDropDownVisible ? false : true;
        setIsDropDownVisible(data);
      };
    return(
        <div className="navbar">
             <div className="navbar_section nav_pc_text">
                <span className="navbar_text"> How We Works</span>
                <img src={Line} alt="line" className="navbar_line" />
                <span className="navbar_text">Who We Are</span>
             </div>
            <div className="navbar_section">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <span className="logo_text">Sketchers</span>
                </div>
            </div>
            <div className="navbar_section_last">
                <motion.span whileTap={{ scale: 0.7 }} className="icon-shopping">
                    <MdShoppingBasket />
                        <div className="cart_count">1</div>
                </motion.span>
                <div className="avatar_logo" onClick={toggleDropDown}>
                    <motion.img whileTap={{ scale: 0.7 }} src={Avatar} alt="avatar" />
                </div>
                {isDropDownVisible ? (
                <span>
                    <ButtonDropdown>
                        <DropdownMenu>
                            <DropdownItem onClick={handleLogout}>
                            Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </span>
                ) : null}
            </div>
      </div>
    )
}
export default TopBar;