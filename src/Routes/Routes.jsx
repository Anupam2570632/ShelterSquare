import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div>404 page not found</div>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default route;