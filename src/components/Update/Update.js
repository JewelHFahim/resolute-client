import React from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const personDetails = useLoaderData();
  const { _id, image, name, email, gender, phone, department, address } =
    personDetails;

  const handleUpdate = (data) => {
    const student = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      gender: data.gender,
      department: data.department,
      address: data.address,
    };
    console.log(student);

    fetch(`http://localhost:5000/students/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged > 0) {
          console.log(data);
          toast.success("Updated Successfylly");
          navigate("/");
        }
      });
  };

  return (
    <div className="hero-content  mt-5">
      <div className="card shadow-xl bg-base-100 border mx-auto  border-slate-200 w-full lg:w-10/12">
        <p className="text-center mt-4 font-semibold text-xl">Edit Student Details Information</p>

        <div className="justify-center flex mt-5">
        <img style={{ width: "130px", height: "130px", borderRadius: "50%" }} src={image} alt="" />
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleUpdate)}>
            {/* 1st row */}
            <div className="grid lg:grid-cols-2">
              <div className="form-control lg:mr-5">
                <input
                  {...register("name")}
                  defaultValue={name}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered mb-2"
                />
              </div>

              <div className="form-control">
                <input
                  {...register("email")}
                  defaultValue={email}
                  type="text"
                  placeholder="Email"
                  className="input input-bordered mb-2"
                />
              </div>
            </div>

            {/* 2nd row */}
            <div className="grid lg:grid-cols-2">
              <div className="form-control lg:mr-5">
                <input
                  {...register("phone")}
                  defaultValue={phone}
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered mb-2"
                />
              </div>

              <div className="form-control">
                <input
                  {...register("gender")}
                  defaultValue={gender}
                  type="text"
                  placeholder="Gender"
                  className="input input-bordered mb-2"
                />
              </div>
            </div>

            {/* 3rd row */}
            <div className="grid lg:grid-cols-2">
              <div className="form-control lg:mr-5">
                <input
                  {...register("department")}
                  defaultValue={department}
                  type="text"
                  placeholder="Department"
                  className="input input-bordered mb-2"
                />
              </div>

              <div className="form-control">
                <input
                  {...register("address")}
                  defaultValue={address}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control mt-6 w-8/12 lg:w-4/12 mx-auto">
              <button type="submit" className="btn bg-slate-800">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
