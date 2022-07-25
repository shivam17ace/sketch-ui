import React, {useState} from "react";
import "../CreateOrder/order.scss"
import TopBar from "../Common/Topbar/Topbar";
import PencilSketch from "./SketchOrderType/PencilSketch";
import ColorPencilSketch from "./SketchOrderType/ColorPencilSketch";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

function CreateOrder() {
    const [defaultTab, setdefaultTab] = useState('Pencil');
    const handleChange = () =>{

    }
    return (
        <>
             <TopBar />
             <div className="content">
                <div className="listing">
                    <Tabs defaultTab={defaultTab} onChange={handleChange} className="tabs_data">
                        <TabList className="listTab">
                            <Tab tabFor="Pencil" className="tabs">Pencil Sketch</Tab>
                            <Tab tabFor="Color" className="tabs">Color Pencil Sketch</Tab>
                        </TabList>
                        <TabPanel tabId="Pencil">
                                <PencilSketch />
                        </TabPanel>
                        <TabPanel tabId="Color">
                                <ColorPencilSketch />
                        </TabPanel>
                    </Tabs>
                </div>
             </div>
        </>
    )
}
export default CreateOrder;