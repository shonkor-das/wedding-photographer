import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import About from "../../Pages/Abouts/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Home/Services/Services";
import Gallerys from "../../Pages/Home/Gallerys/Gallerys";
import Blogs from "../../Pages/Home/Blogs/Blogs";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../../Pages/Home/Services/Details";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/gallery',
                element: <Gallerys></Gallerys>
            },
            {
                path: '/details',
                element: <Details></Details>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/reviews',
        element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
    }
])

export default router;