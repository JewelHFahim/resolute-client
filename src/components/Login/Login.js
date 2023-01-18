import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const { logIn } = useContext(UserContext);

  const hadnleLogin = (data, event) => {
    const form = event.target;
    console.log(data);

    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        fetch("https://crud-task-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("accessToken", data.token);
            toast.success("Login Success");
            form.reset();
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className=" lg:w-6/12 mt-10 mx-auto">
      <div className="card  shadow-xl bg-base-100">
        <p className="text-3xl text-center mt-2">Login</p>

        <form className="card-body" onSubmit={handleSubmit(hadnleLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              required
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              required
              type="password"
              placeholder="password"
              className="input input-bordered"
            />

            <label className="label">
              <Link to="/signup" className="label-text-alt link link-hover">
                New in Repliq?{" "}
                <span className="text-green-900 font-semibold">Signup </span>
              </Link>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-slate-800">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
