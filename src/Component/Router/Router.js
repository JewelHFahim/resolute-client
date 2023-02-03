import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddStudent from "../AddStudent/AddStudent";
import Edit from "../Edit/Edit";
import Drawer from "../Home/Drawer";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import ManageStudents from "../Manage Students/ManageStudents";
import ViewDetails from "../ViewDetails/ViewDetails";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Drawer></Drawer>,
        children:[

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add",
                element: <PrivateRouter><AddStudent></AddStudent></PrivateRouter>
            },
            {
                path: "/manage",
                element: <PrivateRouter><ManageStudents></ManageStudents></PrivateRouter>
            },
            {
                path: "/view/:id",
                loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`),
                element: <ViewDetails></ViewDetails>
            },
            {
                path: "/edit/:id",
                loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`),
                element: <Edit></Edit>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            }
            
        ]
    }
])

export default router;