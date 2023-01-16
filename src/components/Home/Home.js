import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast, Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";


const Home = () => {

  const { data: students=[], refetch, isLoading, } = useQuery({
    queryKey: ["students"],
    queryFn: () =>
      fetch(`http://localhost:5000/students`)
      .then((res) => res.json()),
  });

  const handleDelete = (id) =>{
    fetch(`http://localhost:5000/students/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0) {
        console.log(data);
        toast.success("Deleted Successfully");
        refetch();
      }
    })
  }


  if(isLoading){
    <p>Loading.......</p>
  }

  return (
    <div className="text-center my-16 mx-16">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-slate-800">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={student._id}>
                <th>{i+1}</th>
                <td>
                {student.name} <br />
                {/* {student.gender} <br />
                {student.age} <br />
                {student.birthDate} */}
                </td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.department}</td>
                <td>{student.address}</td>
                <td > 
                <Link to = {`/update/${student._id}`}><button className="btn mr-4">Edit</button></Link>
                <button onClick={()=>handleDelete(student._id)} className="btn">Delete</button>
                 </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster/>
    </div>
  );
};

export default Home;
