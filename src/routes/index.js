import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../Components/Welcome/welcome";
import Login from "../Components/Login/login";
import Signup from "../Components/Signup/signup";
import Dashboard from "../Components/Dashboard/dashboard";
import Menu from "../Components/Menu/Menu";
import Orders from "../Components/Orders/Orders";
import Profile from "../Components/Profile/Profile";
import Setting from "../Components/Settings/Setting";
import "../routes/routes.scss";
import { AnimatePresence } from "framer-motion"
function RouteF () {

    return(
        <AnimatePresence>
        <div>
            <Suspense
                    fallback={ <div className="load_parent">
                    <div className="loaderss"></div>
                </div>}
            >
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Setting />} />
                </Routes>
            </Suspense>
        </div>
        </AnimatePresence>
    )
}
export default RouteF;