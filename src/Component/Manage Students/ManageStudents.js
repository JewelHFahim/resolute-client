import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AiFillEdit, AiOutlineEye } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const Students = () => {

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Want to Delete ?");
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
      <div className="mx-10 mt-5">
      <p className="mr-2 mb-4 font-semibold text-xl flex justify-between"> <span>Manage Students</span> <span className="text-base font-normal"> {new Date().toLocaleString() + ""} </span> </p>
        <table className="table w-full border border-slate-300">
           <tr className="bg-[#F33823] text-white">
                    <th>Name</th>
                    <th>Class</th>
                    <th>Roll No.</th>
                    <th>View/Edit/Delete</th>

                </tr>
          <tbody>
            {users.map((user, i) => (
                  <tr key={user._id}>
                    <td> <div className="font-bold"> {user.fname} {user.mname} {user.lname}</div> </td>
                    <td> {user.sclass}-{user.divition} </td>
                    <td> {user.roll} </td>
                    <th>
                      <Link to={`/view/${user._id}`}>
                        <button className="mr-4">
                          <AiOutlineEye className="text-2xl text-[#F33823]  hover:text-slate-800" />
                        </button>
                      </Link>

                      <Link to={`/edit/${user._id}`}>
                        <button className="mr-4">
                          <AiFillEdit className="text-2xl text-[#F33823]  hover:text-slate-800" />
                        </button>
                      </Link>
                      <button onClick={() => handleDelete(user._id)} className="">

                        <FiTrash2 className="text-xl text-[#F33823]  hover:text-slate-800" />
                      </button>
                    </th>
                  </tr>
            ))}
          </tbody>
        </table>
        <Toaster />
      </div>
  );
};

export default Students;
