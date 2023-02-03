import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';
import logo from "../Assetes/logo.png"

const Navbar = () => {

  const {user} = useContext(UserContext);



    return (
        <div>
        <div className="navbar bg-base-100">
      <div className="navbar-start">
      <div className="navbar-end lg:hidden">
        <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
      </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
          <img style={{ width: "200px" }} src={logo} alt="" />
        </Link>
      </div>


      <div className="navbar-end mr-5 lg:mr-14">
          {
            user?.email &&
             <p className='mr-5 border border-slate-300 px-8 py-2 hidden lg:block'>{user?.email}</p>
          }
      </div>
</div>
        </div>
    );
};

export default Navbar;