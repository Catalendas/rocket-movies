import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./app.routes";
import { AuthRouters } from "./auth.routes";

export function Routes() {
    return (
        <BrowserRouter>
            {/* <AppRouters /> */}
            <AuthRouters />
        </BrowserRouter>
    )
}