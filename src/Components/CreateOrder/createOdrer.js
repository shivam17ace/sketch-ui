import React, {useState} from "react";
import TopBar from "../Common/Topbar/Topbar";

function CreateOrder() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
             <TopBar />
             <span> Upload Image You Want to Sketch </span>
            {selectedImage && (
                <div>
                <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                <br />
                <button onClick={()=>setSelectedImage(null)}>Change Image</button>
                </div>
            )}
            <br />
     
            <br /> 
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
                }}
            />
        </>
    )
}
export default CreateOrder;