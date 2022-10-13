import React, {useState} from "react";
import ColorSketch from "../../../Images/colorsketch.png"
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import "../SketchOrderType/sketch.scss";
function ColorPencilSketch() {
    const [selectedImage, setSelectedImage] = useState(null);
        return(
            <>
            <div className="tab_content">
                <div className="top_part">
                    <div className="sketch_left">
                        <span className="heading_sketch">Handmade Pencil Sketch</span>
                        <div>
                            <img src={ColorSketch} alt="colorsketch" className="tab_image" />
                        </div>
                    </div>
                    <div className="sketch_detail">
                        <div className="detail_css">
                            Size:  <span className="detail_req_css">A4(8X12 inch), A3(12X16 inch), A2(16X24 inch)</span>
                        </div>
                        <div className="detail_css">
                            Medium:  <span className="detail_req_css">Color Pencil Sketch</span>
                        </div>
                        <div className="detail_css">
                            Shipping:  <span className="detail_req_css">Dehradun Only</span>
                        </div>
                        <div className="detail_css">
                            Framing: <span className="detail_req_css">Framed and unframed</span>
                        </div>
                        <div className="detail_css">
                            Style: <span className="detail_req_css">Face to shoulder, Not full body</span>
                        </div>
                    </div>
                </div>
                <div className="select_req">
                    Select your Requirements from Following:
                    <label>Location:</label>
                    <select className="client_select">
                        <option>Choose any Option</option>
                        <option>Dehradun</option>
                        <option>Bangalore</option>
                    </select>
                    <label>Size:</label>
                    <select className="client_select">
                        <option>Choose any Option</option>
                        <option>A4(8X12 inch)</option>
                        <option>A3(12X16 inch)</option>
                        <option>A2(16X24 inch)</option>
                    </select>
                    <label>Frame</label>
                    <select className="client_select">
                        <option>Choose any Option</option>
                        <option>Black</option>
                        <option>None</option>
                    </select>
                    <label>Faces:</label>
                    <select className="client_select">
                        <option>Choose any Option</option>
                        <option>1</option>
                        <option>2</option>
                        <option>2 or More</option>
                    </select>
                    <label>Mode of Payment</label>
                    <select className="client_select">
                        <option>Choose any Option</option>
                        <option>Upi</option>
                        <option>Net Banking</option>
                        <option>COD</option>
                    </select>
                    <span> Upload Image You Want to Sketch </span>
                    <span style={{height:"5px"}} />
                    <input
                        type="file"
                        name="myImage"
                        onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                        }}
                        style={{color:"transparent"}}
                    />
                    <div className="next_page">
                        <Button variant="contained" className="order_button">
                            <Link to="/cart" className="order_link">Add To Cart</Link>
                        </Button>
                        <Button variant="contained" className="order_button">
                            <Link to="/order" className="order_link">Order Now</Link>
                        </Button>
                    </div>
                </div>
                <div className="selected_image">
                    {selectedImage && (
                        <div>
                        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                        <br />
                        <Button className="order_button" onClick={()=>setSelectedImage(null)}>Remove Image</Button>
                        </div>
                    )}
                </div>
            </div>
            </>
        )
}
export default ColorPencilSketch;
