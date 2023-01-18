import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";

const EnrolledCourses = () => {
  const {
    data: enrolledCourses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["enrolledCourses"],
    queryFn: () =>
      fetch(`https://crud-task-server.vercel.app/enrolled`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`https://crud-task-server.vercel.app/enrolled/${id}`, {
      method: "DELETE",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          toast.success("Deleted Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    <progress className="progress progress-success w-full"></progress>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-8 underline">
        Enrolled Courses
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
            {enrolledCourses.map((enc, i) => (
              <tr key={enc._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={enc.course.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{enc.course.titele}</div>
                      <div className="text-sm opacity-60">
                        Instructor: {enc.writer}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <p className=" font-bold"> ${enc.course.price} </p>{" "}
                </td>
                <td>{enc.duration} month</td>
                <td className="flex items-center">
                  <Link to={`/payment`}>
                    <button className="flex items-center btn btn-sm bg-slate-800 mr-5">
                      <MdPayment className="text-lg mr-2 text-slate-400" />
                      Pay
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(enc._id)}
                    className="flex items-center btn btn-sm bg-slate-800"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default EnrolledCourses;
