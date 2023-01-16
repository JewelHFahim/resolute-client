import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../components/AddStudent/AddStudent";
import Home from "../components/Home/Home";
import Students from "../components/Students/Students";
import Teacher from "../components/Teacher/Teacher";
import Update from "../components/Update/Update";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/students",
        element: <Students></Students>
      },
      {
        path: "/teacher",
        element: <Teacher></Teacher>
      },
      {
        path: "/add",
        element: <AddStudent></AddStudent>,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/students/${params.id}`),
        element: <Update></Update>,
      },
    ],
  },
]);

export default router;
