import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "../routes/routes.scss";
import { AnimatePresence } from "framer-motion"
const Welcome = React.lazy(() => import("../Components/Welcome/welcome"));
const Login = React.lazy(() => import("../Components/Login/login"));
const Signup = React.lazy(() => import("../Components/Signup/signup"));
const Dashboard = React.lazy(() => import("../Components/Dashboard/dashboard"));
const Menu = React.lazy(() => import("../Components/Menu/Menu"));
const Orders = React.lazy(() => import("../Components/Orders/Orders"));
const Profile = React.lazy(() => import("../Components/Profile/Profile"));
const Setting = React.lazy(() => import("../Components/Settings/Setting"));
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