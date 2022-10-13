import React from "react";
import TopBar from "../Common/Topbar/Topbar";
import "../PlaceOrder/placeorder.scss";
import { Button } from "@mui/material";
import Back from  "../../Images/back.svg";
import {Link} from "react-router-dom";

function PlaceOrder() {

    return(
        <>
        <TopBar />
        <div className="delivery_content">
           <div className="left_portion">
                <Link to="/createorder"> <img src={Back} alt="icon" style={{marginLeft:"1.5rem"}} /></Link>
                <div className="heading_left">
                    Add Shipping Address
                </div>
                <div className="form_adress">
                    <div className="receipent_detail">
                        <input placeholder="Name" className="receipent_detail_input"></input>
                        <input placeholder="Phone No." className="receipent_detail_input"></input>
                    </div>
                    <div className="receipent_detail">
                        <input placeholder="Pincode" className="receipent_detail_input"></input>
                        <input placeholder="District/Town" className="receipent_detail_input"></input>    
                    </div>
                    <div className="adress_detail">
                        <input placeholder="Address" className="adress_detail_input"></input>
                    </div>
                    <div className="receipent_address">
                        <input placeholder="City" className="receipent_address_input"></input>
                        <input placeholder="State" className="receipent_address_input"></input>
                    </div>
                </div>
                    <Button className="deliver_button"> Deliver  </Button>
           </div>
           <div className="right_portion">
            <div>
                <span className="order_heading">Order Summary</span>
                    <div className="order_charges">
                        <div><span className="order_content">Order Total</span> <span className="order_content_2">Rs</span></div>
                        <div><span className="order_content">Delivery Charges</span> <span className="order_content_2">Rs</span></div>
                    </div>
            </div>
            <div className="right_portion_2">
                <span className="delivery_heading">Delivery Summary</span>
                    <div className="delivery_charges">
                        <div><span className="delivery_content">Expected On</span><span className="delivery_content_2">Date</span></div>
                            <div><span className="delivery_content">Total Payable</span><span className="delivery_content_2">Rs</span></div>
                            <div>Change</div>
                    </div>
                    <div className="order_button">
                        <Button  className="button_content"> <Link to="/charges" className="order_link">Place Order </Link></Button>
                    </div>
            </div>
           </div>
        </div>
        </>
    )
}
export default PlaceOrder;