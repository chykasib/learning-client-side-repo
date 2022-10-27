import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Courses from "../../pages/Courses/Courses";
import CoursesDetails from "../../pages/Courses/CoursesDetails";
import ErrorPage from "../../pages/ErrorPages/ErrorPages";
import Faq from "../../pages/Faq/Faq";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register"
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage />, children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('https://learninng-server-side.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`https://learninng-server-side.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://learninng-server-side.vercel.app/checkout/${params.id}`)
            }
            ,
            {
                path: '/faq', element: <Faq></Faq>
            }
        ]
    }
])