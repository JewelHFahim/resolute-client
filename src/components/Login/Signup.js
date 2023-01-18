import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const hadnleSignup = (data, event) => {
    const form = event.target;

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));

    const image = data.img[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=fb93ba04b621481364d937c7a5ccc216`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);

          const student = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            gender: data.gender,
            designation: data.designation,
            department: data.department,
            address: data.address,
            image: imgData.data.url,
          };
          console.log(student);

          fetch(`https://crud-task-server.vercel.app/users`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(student),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged > 0) {
                console.log(data);
                toast.success("Signup Successfylly");

                // fetch("https://crud-task-server.vercel.app/jwt", {
                //   method: "POST",
                //   headers: {
                //     "content-type": "application/json",
                //   },
                //   body: JSON.stringify({ email: user?.email }),
                //   })
                //   .then((res) => res.json())
                //   .then((data) => {
                //     console.log(data);
                //     localStorage.setItem("geniusToken", data.token);
                //   });

                form.reset();
                navigate("/");
              }
            });
        }
      });
  };

  return (
    <div className=" lg:w-6/12 mx-auto">
      <div className="p-10 flex-col">
        <div className="card w-full shadow-2xl bg-base-100">
          <p className="text-3xl text-center mt-2">Sign Up</p>

          <form className="card-body" onSubmit={handleSubmit(hadnleSignup)}>
            {/* 1st row */}
            <div className="grid lg:grid-cols-2">
              <div className="form-control lg:mr-5">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered mb-2"
                />
              </div>

              <div className="form-control">
                <input
                  {...register("email")}
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
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered mb-2"
                />
              </div>

              <div className="form-control">
                <input
                  {...register("gender")}
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
                  type="text"
                  placeholder="Department"
                  className="input input-bordered mb-2"
                />
              </div>

              <div className="form-control">
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                />
              </div>
            </div>
            {/* 3rd row */}
            <div className="grid lg:grid-cols-2">
              <div className="form-control">
                <input
                  {...register("img")}
                  required
                  type="file"
                  placeholder="Image"
                  className="mt-2"
                />
              </div>

              <select
                {...register("designation")}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Designation
                </option>
                <option>Student</option>
                <option>Teacher</option>
              </select>
            </div>

            {/* 4th row */}
            <div className="grid lg:grid-cols-2">
              <div className="form-control lg:mr-5">
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered mb-2"
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn bg-slate-800">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
