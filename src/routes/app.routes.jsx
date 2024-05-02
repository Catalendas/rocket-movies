import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home"
import { Preview } from "../pages/Preview"
import { Profile } from "../pages/Profile"
import { Create } from "../pages/Create"

export function AppRouters() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/preview/:id" element={<Preview />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/create" element={<Create />}/>
        </Routes>
    )
}