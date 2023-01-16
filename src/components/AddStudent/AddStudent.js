import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const navigate = useNavigate();
    const { register, handleSubmit} = useForm();

    const handleAdd = (data) =>{
        const student = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            gender: data.gender,
            department: data.department,
            address: data.address
        };
        console.log(student);

        fetch(`http://localhost:5000/students`,{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(student)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged > 0){
            console.log(data);
              toast.success("added Successfylly");
              navigate("/");
            }
        })
    }
    
      return (
  <div className="hero-content  mt-10">
    <div className="card shadow-xl bg-base-100 border mx-auto  border-slate-200 w-full lg:w-10/12">
    <p className='text-center mt-4 font-semibold text-xl'>Add Student Details Information</p>

      <div className="card-body">
      <form onSubmit={handleSubmit(handleAdd)}>
        {/* 1st row */}
        <div className='grid lg:grid-cols-2'>
            <div className="form-control lg:mr-5">
            <input {...register('name')} type="text" placeholder="Name" className="input input-bordered mb-2" />
            </div>

            <div className="form-control">
            <input {...register('email')} type="text" placeholder="Email" className="input input-bordered mb-2" />
            </div>
        </div>

        {/* 2nd row */}
        <div className='grid lg:grid-cols-2'>
            <div className="form-control lg:mr-5">
            <input {...register('phone')} type="text" placeholder="Phone" className="input input-bordered mb-2" />
            </div>

            <div className="form-control">
            <input {...register('gender')} type="text" placeholder="Gender" className="input input-bordered mb-2" />
            </div>
        </div>

        {/* 3rd row */}
        <div className='grid lg:grid-cols-2'>
            <div className="form-control lg:mr-5">
            <input {...register('department')} type="text" placeholder="Department" className="input input-bordered mb-2" />
            </div>

            <div className="form-control">
            <input {...register('address')} type="text" placeholder="Address" className="input input-bordered" />
            </div>
        </div>

        <div className="form-control mt-6 w-8/12 lg:w-4/12 mx-auto">
          <button type='submit' className="btn bg-slate-800">Submit</button>
        </div>
        </form>

      </div>
    </div>

</div>

      );
};

export default AddStudent;