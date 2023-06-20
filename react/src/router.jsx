import {createBrowserRouter, Navigate} from "react-router-dom"
import Users from "./views/Users";
import Login from "./views/login";
import Signup from "./views/signup";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";


const router = createBrowserRouter([
    {path: "/", element: <DefaultLayout />, children: [
        {path: "/", element: <Navigate to="/users" />},
        {path: "/users", element: <Users />},
        {path: "/dashboard", element: <Dashboard />}
    ]},
    {path: "/", element: <GuestLayout />,
     children: [
         {path: "/",element: <Navigate to="/login" />},
        {path: "/login", element: <Login />},
        {path: "/signup", element: <Signup/>},
    ]},

{path: "*", element: <NotFound/>}
])

export default router;