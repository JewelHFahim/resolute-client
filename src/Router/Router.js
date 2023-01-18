import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../components/AddStudent/AddStudent";
import AdminDashBoard from "../components/AdminDashboard/AdminDashBoard";
import AllUsers from "../components/AllUsers/AllUsers";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import Payment from "../components/Payment/Payment";
import EnrolledCourses from "../components/StudentDashboard/EnrolledCourses";
import StudentDashboard from "../components/StudentDashboard/StudentDashboard";
import Students from "../components/Students/Students";
import Teacher from "../components/Teacher/Teacher";
import TeacherDashboard from "../components/TeacherDashboard/TeacherDashboard";
import Update from "../components/Update/Update";
import Main from "../Layout/Main";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",

        element: <Home></Home>,
      },
      {
        path: "/admin",
        element: (
          <PrivateRouter>
            <AdminDashBoard></AdminDashBoard>
          </PrivateRouter>
        ),
      },
      {
        path: "/students",
        element: <Students></Students>,
      },
      {
        path: "/teacher",
        element: <Teacher></Teacher>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/add",
        element: <AddStudent></AddStudent>,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://crud-task-server.vercel.app/users/${params.id}`),
        element: <Update></Update>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/studentdashboard",
        element: (
          <PrivateRouter>
            <StudentDashboard></StudentDashboard>
          </PrivateRouter>
        ),
      },
      {
        path: "/teacherdashboard",
        element: (
          <PrivateRouter>
            <TeacherDashboard></TeacherDashboard>
          </PrivateRouter>
        ),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/enrolled",
        element: <EnrolledCourses></EnrolledCourses>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
