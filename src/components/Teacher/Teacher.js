import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';


const Teacher = () => {
  const {
    data: students = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["students"],
    queryFn: () =>
      fetch(`http://localhost:5000/students`).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/students/${id}`, {
      method: "DELETE",
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
    <progress className="progress progress-success w-full"></progress>
  }

return(

      <div>
        <h1 className="text-2xl font-bold text-center mt-8 underline"> Teacher Details</h1>
      <div className=" my-5 mx-10 border border-slate-300">

      <table className="table w-full">
        <thead>
          <tr>
            <th><p>SL</p></th>
            <th>Name</th>
            <th>Address</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

        {
          students.map((student, i) => 
            <tr key = {student._id}>
            <th>{0+i}</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={student.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{student.name}</div>
                  <div className="text-sm opacity-50">{student.gender}</div>
                </div>
              </div>
            </td>
            <td>
              {student.email} <br/>
              <span className="badge badge-ghost badge-sm">{student.phone}</span> <br />
              <span className="badge badge-ghost badge-sm">{student.address}</span>

              </td>
              <td>{student.department}</td>
              <th>
              <Link to={`/update/${student._id}`}> <button className="btn btn-success btn-circle btn-outline mr-4"><FaEdit className="text-xl  hover:text-slate-800"/></button></Link>
              <button onClick={() => handleDelete(student._id)} className="btn btn-error btn-circle btn-outline"><FaTrashAlt className="text-xl  hover:text-slate-800"/></button>
              </th>
            </tr>
            )
          }
          </tbody>
        </table>
        <Toaster/>
      </div>
      </div>
    )
};          

export default Teacher;
