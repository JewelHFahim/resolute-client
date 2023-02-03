import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const AddStudent = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }  } = useForm();


  const handleAdd = (data, event) => {

          const student = {
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            sclass: data.class,
            divition: data.divition,
            roll: data.roll,
            address1: data.address1,
            address2: data.address2,
            landmark: data.landmark,
            city: data.city,
            pincode: data.pincode,
          };
          console.log(student);

          fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(student),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged > 0) {
                console.log(data);
                toast.success("added Successfylly");
                navigate("/manage");
              }
            });
        
  };
  

  return (
        <div className="px-10 mt-5">

        <p className=" mb-4 font-semibold text-xl flex justify-between"> <span>Add Student</span> <span className="text-base font-normal"> {new Date().toLocaleString() + ""} </span> </p>

          <form onSubmit={handleSubmit(handleAdd)}>

            {/* 1st row */}
            <div className="grid lg:grid-cols-3">
              <div className="form-control lg:mr-5 mb-2">
                <input {...register("fname")} type="text" placeholder="First Name" className="input input-bordered" required/>
                {errors.exampleRequired  && <span>This field is required</span>}

              </div>

              <div className="form-control lg:mr-5 mb-2">
                <input {...register("mname")} type="text" placeholder="Middle Name" className="input input-bordered" required/>
              </div>

              <div className="form-control mb-2">
                <input {...register("lname")} type="text" placeholder="Last Name" className="input input-bordered" required/>
              </div>
            </div>

            {/* 2nd row */}
            <div className="grid lg:grid-cols-3">

              <select
                {...register("class")}className="select select-bordered lg:mr-5 mb-2">
                <option disabled selected> Select Class</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
                <option>V</option>
                <option>VI</option>
                <option>VII</option>
                <option>VII</option>
                <option>VIII</option>
                <option>IX</option>
                <option>X</option>
                <option>XI</option>
                <option>XII</option>
              </select>

              <select {...register("divition")} className="select select-bordered lg:mr-5 mb-2">
                <option disabled selected> Select Division </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
              </select>

              <div className="form-control mb-2">
              <input className="input input-bordered"   placeholder="Enter Roll No." type="number"
              {...register("roll", { validate: (value) => value.length === 2 })} required/>
              {errors.roll && <p className="text-error"> Roll no should be 2 digit</p>}
            </div>

            </div>

            {/* 3rd row */}
            <div className="grid lg:grid-cols-2 mt-5">
              <div className="form-control lg:mr-5 mb-2">
                <input {...register("address1")} type="text" placeholder="Address Line 1" className="input input-bordered"
                required 
                />
              </div>

              <div className="form-control mb-2">
                <input {...register("address2")} type="text" placeholder="Address Line 2" className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* 4th row */}
            <div className="grid lg:grid-cols-3">

              <div className="form-control lg:mr-5 mb-2">
                <input {...register("landmark")} type="text" placeholder="Landmark" className="input input-bordered" 
                  required 
                />
              </div>

              <div className="form-control lg:mr-5 mb-2">
                <input {...register("city")} type="text" placeholder="City" className="input input-bordered" 
                  required 
                />
              </div>

              <div className="form-control mb-2">

              <input className="input input-bordered"   placeholder="Pincode" type="number"
              {...register("pincode", { validate: (value) => value.length === 6 })} required/>
              {errors.pincode && <p className="text-error"> Pincode should be 6 digit</p>}

              </div>

            </div>

            <div className="form-control mt-5 w-8/12 lg:w-4/12 pr-5 mb-2">
              <button type="submit" className="btn bg-[#F33823] border-0 flex items-center  text-white">
                <AiOutlineAppstoreAdd className="text-xl mr-4 font-bold" />
                Add Student
              </button>
            </div>
          </form>
        </div>

  );
};

export default AddStudent;
