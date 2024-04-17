import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import EstateDetails from "../pages/EstateDeatails/EstateDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/about-us',
                element: <PrivateRoute><AboutUs /></PrivateRoute>
            },
            {
                path: '/contact-us',
                element: <PrivateRoute><ContactUs /></PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            },
            {
                path: '/property-details/:id',
                element: <PrivateRoute><EstateDetails /></PrivateRoute>
            }
        ]
    }
])

export default route;