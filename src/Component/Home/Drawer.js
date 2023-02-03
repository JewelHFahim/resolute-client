import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import Navbar from "../Navbar/Navbar";

const Drawer = () => {
  const {user, logOut} = useContext(UserContext);



  let activeStyle = {
    backgroundColor: "#F33823"
  };



  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(err=>console.error(err))
  }


  
  return (
    <div>

      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 select-bg-red-500 text-base-content">
            <li>
              <NavLink to="/add" style={({ isActive }) => isActive ? activeStyle : undefined }> Add Students</NavLink>
            </li>
            <li>
            <NavLink to="/manage" style={({ isActive }) => isActive ? activeStyle : undefined }> Manage Students </NavLink>
            </li>
            <li>
            {
            user?.email ?
             <button onClick={handleLogOut} >Logout</button>
            :
            <Link to = "/login"><button>Login</button></Link>
            }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
