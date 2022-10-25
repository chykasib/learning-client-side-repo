import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import CoursesDetails from "../../pages/Courses/CoursesDetails";
import ErrorPage from "../../pages/ErrorPages/ErrorPages";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register"

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage />, children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learninng-server-side.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`https://learninng-server-side.vercel.app/courses/${params.id}`)
            },
            {
                path: 'blog', element: <Blog></Blog>
            },
            {
                path: 'login', element: <Login></Login>
            },
            {
                path: 'register', element: <Register></Register>
            },
        ]
    }
])