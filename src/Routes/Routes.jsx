import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div>404 page not found</div>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            },
            {
                path: '/property-details/:id',
                element: <PrivateRoute><div>hello</div></PrivateRoute>
            }
        ]
    }
])

export default route;