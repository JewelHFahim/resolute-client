import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";

const Home = () => {
  const {user} = useContext(UserContext)
  
  return (
    <div className="hero-content mt-32 bg-slate-200  text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-4xl font-bold text-slate-600">Welcome to Dashboard</h1>
        <p className="mb-5 text-green-600">Let's Explre</p>
        {
          user?.email ?
        <></>
        :
        <Link to="/login"><button className="btn bg-[#F33823] px-10 border-0">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Home;
