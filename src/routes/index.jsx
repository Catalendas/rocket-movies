import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./app.routes";
import { AuthRouters } from "./auth.routes";
import { useAuth } from "../hooks/authHook";

export function Routes() {

    const { user } = useAuth()

    return (
        <BrowserRouter>
            {user ? <AppRouters /> :
            <AuthRouters />}
        </BrowserRouter>
    )
}