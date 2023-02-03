import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const user = useLoaderData();
    const { fname, mname, lname, sclass, roll, divition, address1, address2, landmark, city, pincode  } = user;
    console.log(user);

  return (
        <div className="px-10 mt-5">

        <p className="font-semibold text-xl flex justify-between mb-5"> <span> Student Details</span> <span className="text-base font-normal"> {new Date().toLocaleString() + ""} </span> </p>

          <form>
            {/* 1st row */}
            <div className="grid lg:grid-cols-3">
              <div className="form-control lg:mr-5">
                <input
                  type="text"
                  className="input input-bordered mb-2"
                  defaultValue={fname}
                  readOnly
                />
              </div>

              <div className="form-control lg:mr-5">
                <input
                  type="text"
                  placeholder="Middle Name"
                  className="input input-bordered mb-2"
                  defaultValue={mname}
                  readOnly
                />
              </div>

              <div className="form-control ">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered mb-2"
                  defaultValue={lname}
                  readOnly
                />
              </div>

            </div>

            {/* 2nd row */}
            <div className="grid lg:grid-cols-3">

              <div className="form-control lg:mr-5">
                <input
                  type="text"
                  placeholder="Class"
                  className="input input-bordered mb-2"
                  defaultValue={sclass}
                  readOnly
                />
              </div>

              <div className="form-control lg:mr-5">
                <input
                  type="text"
                  placeholder="Division"
                  className="input input-bordered mb-2"
                  defaultValue={divition}
                  readOnly
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Roll Number"
                  className="input input-bordered mb-2"
                  defaultValue={roll}
                  readOnly
                />
              </div>
            </div>

            {/* 3rd row */}
            <div className="grid lg:grid-cols-2 mt-5">
              <div className="form-control lg:mr-5">
                <input type="text" placeholder="Address Line 1" className="input input-bordered mb-2"
                  defaultValue={address1}
                  readOnly
                />
              </div>

              <div className="form-control">
                <input type="text" placeholder="Address Line 2" className="input input-bordered"
                  defaultValue={address2}
                  readOnly
                />

              </div>
            </div>
            {/* 4th row */}
            <div className="grid lg:grid-cols-3">

              <div className="form-control lg:mr-5">
                <input  type="text" placeholder="Landmark" className="input input-bordered" 
                  defaultValue={landmark}
                  readOnly
                />
              </div>

              <div className="form-control lg:mr-5">
                <input type="text" placeholder="City" className="input input-bordered"
                  defaultValue={city}
                  readOnly/>
              </div>

              <div className="form-control">
                <input type="text" placeholder="Pincode" className="input input-bordered" 
                  defaultValue={pincode}
                  readOnly
                />
              </div>

              <Link to = "/manage">
              <div className="form-control mt-5 mr-5">
              <button className="btn bg-[#F33823] border-0 flex items-center  text-white">
                <RiArrowGoBackFill className="text-xl mr-4 font-bold" /> Manage </button>
            </div>
              </Link>
            </div>
          </form> 
        </div>

  );
};

export default ViewDetails;
