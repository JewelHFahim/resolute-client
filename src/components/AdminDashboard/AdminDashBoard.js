import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import img1 from "../../Assets/Guarantee-.webp"


const AdminDashBoard = () => {



    return (
            <div>
                <p className='text-center text-3xl text-teal-800 mt-5 mb-2 font-semibold'>Admin Dashboard</p>
                <hr />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:mx-20 text-center'>

                <div className='m-10 p-10 shadow-lg border border-slate-300 bg-slate-100 rounded-lg'>
                    <div className='flex justify-center mb-5'><img src={img1} alt="" /></div>
                     <p className='my-5 text-2xl'>All Students</p>
                    <Link to="/students"><button className='btn'>Students <AiOutlineArrowRight className='ml-4 text-xl'/></button></Link>
                </div>

                <div className='m-10 p-10 shadow-lg border border-slate-300 bg-slate-100 rounded-lg'>
                    <div className='flex justify-center mb-5'><img src={img1} alt="" /></div>
                     <p className='my-5 text-2xl'>All Teachers</p>
                    <Link to="/teacher"><button className='btn'>Teachers <AiOutlineArrowRight className='ml-4 text-xl'/></button></Link>
                </div>

                <div className='m-10 p-10 shadow-lg border border-slate-300 bg-slate-100 rounded-lg'>
                    <div className='flex justify-center mb-5'><img src={img1} alt="" /></div>
                     <p className='my-5 text-2xl'>All Users</p>
                    <Link to="/allusers"><button className='btn'>Users <AiOutlineArrowRight className='ml-4 text-xl'/></button></Link>
                </div>

            </div>

            </div>
    );
};

export default AdminDashBoard;