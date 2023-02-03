import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { RxUpdate } from 'react-icons/rx';


const Edit = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const personDetails = useLoaderData();
  const { _id, fname, mname, lname, sclass, roll, divition, address1, address2, landmark, city, pincode  } =
    personDetails;

  const handleUpdate = (data) => {

    const user = {
      fname: data.fname,
      mname: data.mname,
      lname: data.lname,
      sclass: data.sclass,
      divition: data.divition,
      roll: data.roll,
      address1: data.address1,
      address2: data.address2,
      landmark: data.landmark,
      city: data.city,
      pincode: data.pincode,
    };
    console.log(user);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged > 0) {
          console.log(data);
          toast.success("Updated Successfylly");
          navigate("/manage");
        }
      });
  };

  return (
    <div className="mx-10 mt-5">
          <p className=" mb-4 font-semibold text-xl flex justify-between"> <span>Add Student</span> <span className="text-base font-normal"> {new Date().toLocaleString() + ""} </span> </p>
          <form onSubmit={handleSubmit(handleUpdate)}>
            
            {/* 1st row */}
            <div className="grid lg:grid-cols-3">
              <div className="form-control lg:mr-5">
                <input
                  {...register("fname")}
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered mb-2"
                  defaultValue={fname}
                />
              </div>

              <div className="form-control lg:mr-5">
                <input
                  {...register("mname")}
                  type="text"
                  placeholder="Middle Name"
                  className="input input-bordered mb-2"
                  defaultValue={mname}
                />
              </div>

              <div className="form-control ">
                <input
                  {...register("lname")}
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered mb-2"
                  defaultValue={lname}
                />
              </div>
            </div>

            {/* 2nd row */}
            <div className="grid lg:grid-cols-3">

              <select
                {...register("sclass")}className="select select-bordered lg:mr-5" 
                defaultValue={sclass}
                >
                <option disabled selected> Select Class</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>

              <select {...register("divition")} className="select select-bordered lg:mr-5"
                defaultValue={divition}
                >
                <option disabled selected> Select Division </option>
                <option>Student</option>
                <option>Teacher</option>
              </select>

              <div className="form-control">
                <input
                  {...register("roll")}
                  type="text"
                  placeholder="Enter Roll Number in Digits"
                  className="input input-bordered mb-2"
                  defaultValue={roll}
                />
              </div>
            </div>

            {/* 3rd row */}
            <div className="grid lg:grid-cols-2 mt-5">
              <div className="form-control lg:mr-5">
                <input {...register("address1")} type="text" placeholder="Address Line 1" className="input input-bordered mb-2"
                defaultValue={address1}
                />
              </div>

              <div className="form-control">
                <input {...register("address2")} type="text" placeholder="Address Line 2" className="input input-bordered"
                  defaultValue={address2}
                />
              </div>
            </div>
            
            {/* 4th row */}
            <div className="grid lg:grid-cols-3">

              <div className="form-control lg:mr-5">
                <input {...register("landmark")} type="text" placeholder="Landmark" className="input input-bordered"
                defaultValue={landmark} />
              </div>

              <div className="form-control lg:mr-5">
                <input {...register("city")} type="text" placeholder="City" className="input input-bordered"
                defaultValue={city} />
              </div>

              <div className="form-control">
                <input {...register("pincode")} type="text" placeholder="Pincode" className="input input-bordered"
                defaultValue={pincode} />
              </div>

            </div>

            <div className="form-control mt-5 w-8/12 lg:w-4/12 pr-5">
              <button type="submit" className="btn bg-[#F33823] border-0 flex items-center  text-white">
                <RxUpdate className="text-xl mr-4 font-bold" />
                Update
              </button>
            </div>
          </form>
        </div>
  );
};

export default Edit;