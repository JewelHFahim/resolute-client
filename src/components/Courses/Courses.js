import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      fetch(`https://crud-task-server.vercel.app/courses`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleEnrolle = (course) => {
    const enrolledCourse = {
      course,
      // id: course._id
    };

    fetch(`https://crud-task-server.vercel.app/enrolled`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(enrolledCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged > 0) {
          toast.success("Enrolled Course Successfully");
          navigate("/enrolled");
        }
      });
  };

  if (isLoading) {
    <progress className="progress progress-success w-full"></progress>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-8 underline">
        {" "}
        Course Details
      </h1>
      <div className=" my-5 mx-10 border border-slate-300">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <p>SL</p>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, i) => (
              <tr key={course._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={course.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{course.titele}</div>
                      <div className="text-sm opacity-60">
                        Instructor: {course.writer}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <p className=" font-bold"> ${course.price} </p>{" "}
                </td>
                <td>{course.duration} month</td>
                <td>
                  <button
                    onClick={() => handleEnrolle(course, course._id)}
                    className="flex items-center btn btn-sm"
                  >
                    <IoMdAdd className="text-lg mr-2" />
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
