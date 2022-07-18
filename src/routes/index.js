import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../Components/Welcome/welcome";
import Login from "../Components/Login/login";
import Signup from "../Components/Signup/signup";
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
                </Routes>
            </Suspense>
        </div>
        </AnimatePresence>
    )
}
export default RouteF;