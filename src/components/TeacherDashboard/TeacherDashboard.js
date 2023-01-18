import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import img1 from "../../Assets/Guarantee-.webp"

const TeacherDashboard = () => {

  const {loading} = useContext(UserContext);

  if (loading) {
    <progress className="progress progress-success w-full"></progress>;
  }
  return (
    <div>
        <p className='text-center text-3xl text-teal-800 mt-5 mb-2 font-semibold'>Teacher Dashboard</p>
        <hr />

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:mx-20 text-center'>

        <div className='m-10 p-10 shadow-lg border border-slate-300 bg-slate-100 rounded-lg'>
            <div className='flex justify-center mb-5'><img src={img1} alt="" /></div>
             <p className='my-5 text-2xl'>Enrolled Students</p>
            <Link to="" className="tooltip tooltip-error tooltip-bottom" data-tip="No Data Now"><button className='btn'>Enrolled Student<AiOutlineArrowRight className='ml-4 text-xl'/></button></Link>
        </div>

        <div className='m-10 p-10 shadow-lg border border-slate-300 bg-slate-100 rounded-lg'>
            <div className='flex justify-center mb-5'><img src={img1} alt="" /></div>
             <p className='my-5 text-2xl'>All My Courses </p>
            <Link to="" className="tooltip tooltip-error tooltip-bottom" data-tip="No Data Now"><button className='btn'>Courses <AiOutlineArrowRight className='ml-4 text-xl'/></button></Link>
        </div>

        <div className='m-10 p-10 shadow-lg border border-slate-300 bg-slate-100 rounded-lg'>
            <div className='flex justify-center mb-5'><img src={img1} alt="" /></div>
             <p className='my-5 text-2xl'> Enrolled Amount</p>
            <Link to="" className="tooltip tooltip-error tooltip-bottom" data-tip="No Data Now"><button className='btn'>Total Amount <AiOutlineArrowRight className='ml-4 text-xl'/></button></Link>
        </div>

    </div>

    </div>
);
};

export default TeacherDashboard;
