import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";

const Teacher = () => {
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`https://crud-task-server.vercel.app/users`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`https://crud-task-server.vercel.app/users/${id}`, {
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
        Teacher Details
      </h1>

      <div className="text-center my-5 lg:flex justify-center mx-10">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered lg:w-3/4 lg:mr-10 mb-5"
        />
        <Link to="/add" className="lg:w-1/4">
          <button className="btn bg-slate-800">
            {" "}
            <MdPersonAdd className="text-2xl mr-5" /> Add Teacher{" "}
          </button>
        </Link>
      </div>

      <div className=" my-5 mx-10 border border-slate-300">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <p>SL</p>
              </th>
              <th>Name</th>
              <th>Address</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <>
                {user.designation === "Teacher" && (
                  <tr key={user._id}>
                    <th>{0 + i}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                          <div className="text-sm opacity-50">
                            {user.gender}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {user.email} <br />
                      <span className="badge badge-ghost badge-sm">
                        {user.phone}
                      </span>
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {user.address}
                      </span>
                    </td>
                    <td>{user.department}</td>
                    <th>
                      <Link to={`/update/${user._id}`}>
                        <button className="btn btn-success btn-circle btn-outline mr-4">
                          <FaEdit className="text-xl  hover:text-slate-800" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-error btn-circle btn-outline"
                      >
                        <FaTrashAlt className="text-xl  hover:text-slate-800" />
                      </button>
                    </th>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
        <Toaster />
      </div>
    </div>
  );
};

export default Teacher;
