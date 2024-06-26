import {  Navigate, Route, Routes } from "react-router-dom";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";

export function AuthRouters() {

    const user = localStorage.getItem("@rocketmovies:user")

    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            {!user && <Route path="*" element={<Navigate to="/"/>}/>}
        </Routes>
    )
}