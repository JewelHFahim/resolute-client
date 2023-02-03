import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";


const Login = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [loginError, setLoginError] = useState('');
  const { register, handleSubmit } = useForm();
  const { logIn } = useContext(UserContext);



    navigate(from, {replace: true})


  const hadnleLogin = (data, event) => {


    const form = event.target;
    console.log(data);

    logIn(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Login Success');
        console.log(data.email);
        form.reset();
    })
    .catch( error => {
      console.error(error.message);
      setLoginError(error.message.replace('Firebase: ', ''));
    })
  };

  return (
    <div className="px-10">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <p className='text-3xl text-center mt-2'>Login</p>
          <form className="card-body" onSubmit={handleSubmit(hadnleLogin)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
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
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <label className="label">
            <Link to="/signup" href="!#" className="label-text-alt link link-hover">
                New here? Signup</Link>
            </label>

              <p className="text-error">{loginError}</p>
            <div className="form-control mt-6">
              <button className="btn border-0 bg-[#F33823]">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;