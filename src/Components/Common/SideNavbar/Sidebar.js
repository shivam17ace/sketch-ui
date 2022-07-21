import React, {useState} from "react";
import "../SideNavbar/Sidebar.scss";
import {Link} from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaList } from "react-icons/fa";
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiShoppingCart } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import {MdDashboard} from "react-icons/md";
import Chef from "../../../Images/cheff.png";

function SideBar() {
    const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
    return(
        <div className="container_sidebar">
            <ProSidebar collapsed={menuCollapse} className="sidebar_data">
                <Menu iconShape="square" className="sidebar_menu">
                    <div className="sidebar_content_username"> 
                    <div className="closemenu" onClick={menuIconClick}>
                        {menuCollapse ? (
                            <FiArrowRightCircle/>
                        ) : ( 
                                <div className="collapse_button">
                                <MenuItem><img src={Chef} alt="chef" className="user_image" ></img></MenuItem>   
                                <FiArrowLeftCircle/>
                                </div>
                            )}
                    </div>
                        <MenuItem>UserName</MenuItem>
                    </div>
                    <div className="sidebar_content">
                        <MenuItem icon={<MdDashboard />}>Dashboard<Link to="/dashboard" /></MenuItem>
                    </div>
                    <div className="sidebar_content">
                        <MenuItem icon={<FaList />}>Menu<Link to="/menu" /></MenuItem>
                    </div>
                    <div className="sidebar_content">
                        <MenuItem icon={<FiShoppingCart />}>My Orders<Link to="/orders" /></MenuItem>
                    </div>
                    <div className="sidebar_content">
                        <MenuItem icon={<RiPencilLine />}>Profile<Link to="/profile" /></MenuItem>
                    </div>
                    <div className="sidebar_content">
                        <MenuItem icon={<BiCog />}>Settings<Link to="/settings" /></MenuItem>
                    </div>
                    <div className="sidebar_content">
                        <MenuItem icon={<FiLogOut />}>Logout <Link to="/" /></MenuItem>
                    </div>
                </Menu>
            </ProSidebar>;

        </div>
    )
}
export default SideBar;