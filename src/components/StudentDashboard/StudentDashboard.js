import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import img1 from "../../Assets/Guarantee-.webp"

const StudentDashboard = () => {

  const {loading} = useContext(UserContext);

  if (loading) {
    <progress className="progress progress-success w-full"></progress>;
  }
  return (
    <div>
        <p className='text-center text-3xl text-teal-800 mt-5 mb-2 font-semibold'>Student Dashboard</p>
        <hr />

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:mx-20 text-center'>

        <div className='m-10 p-10 shadow-lg border border-slate-300 bg-slate-100 rounded-lg'>
            <div className='flex justify-center mb-5'><img src={img1} alt="" /></div>
             <p className='my-5 text-2xl'>All Courses</p>
            <Link to="/courses"><button className='btn'>Courses <AiOutlineArrowRight className='ml-4 text-xl'/></button></Link>
        </div>

        <div className='m-10 p-10 shadow-lg border border-slate-300 bg-slate-100 rounded-lg'>
            <div className='flex justify-center mb-5'><img src={img1} alt="" /></div>
             <p className='my-5 text-2xl'> Enrolled Courses </p>
            <Link to="/enrolled"><button className='btn'>Courses <AiOutlineArrowRight className='ml-4 text-xl'/></button></Link>
        </div>

        <div className='m-10 p-10 shadow-lg border border-slate-300 bg-slate-100 rounded-lg'>
            <div className='flex justify-center mb-5'><img src={img1} alt="" /></div>
             <p className='my-5 text-2xl'>All Payment</p>
            <Link to=""><button className='btn'> Payment <AiOutlineArrowRight className='ml-4 text-xl'/></button></Link>
        </div>

    </div>

    </div>
);
};

export default StudentDashboard;
