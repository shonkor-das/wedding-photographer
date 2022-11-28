import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import About from "../../Pages/Abouts/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Home/Services/Services";
import Gallerys from "../../Pages/Home/Gallerys/Gallerys";
import Blogs from "../../Pages/Home/Blogs/Blogs";

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
                path: '/gallery',
                element: <Gallerys></Gallerys>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;