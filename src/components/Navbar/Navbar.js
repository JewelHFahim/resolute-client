import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import useStudent from '../../Hooks/useStudent';
import useTeacher from '../../Hooks/useTeacher';

const Navbar = () => {

  const {user, userImg, isLoading, logOut} = useContext(UserContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isStudent] = useStudent(user?.email);
  const [isTeacher] = useTeacher(user?.email);
  

    const menItems = (
        <>
            <li><Link to="/">Home</Link></li>
            
            <li><Link to="/courses">Courses</Link></li>

            <li><Link to = "/blog">Blog</Link></li>
            {
              isAdmin &&
               <li> <Link to="/admin">Admin Panel</Link></li>
             }
            {
              isStudent &&
               <li> <Link to="/studentdashboard">Student DB</Link></li>
             }
            {
              isTeacher &&
               <li> <Link to="/teacherdashboard">Teacher DB</Link></li>
             }
        </>
    )

    const handleLogout = () =>{
      logOut()
      .then(()=>{})
      .catch(error => console.log(error))
    }


    if (isLoading) {
        <progress className="progress progress-success w-full"></progress>;
      }


    return (
        <div> 
          <div className="navbar bg-slate-800 px-10">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl text-slate-800">
                {menItems}
              </ul>
            </div>
            <Link to ="/" className="btn btn-ghost normal-case text-2xl  text-white">CRUD</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl  text-white">
                {menItems}
              </ul>
            </div>
            <div className="navbar-end">
            <small className='text-white mr-2 hidden lg:block'>{user?.email}</small>
            <img src={userImg} alt="" />
            {
              user?.email ?
              <button onClick={handleLogout} className="btn btn-sm">Logout</button>
              :
              <Link to="/login" className="btn btn-sm">Login</Link>
            }
            </div>
          </div>
        </div>
    );
}

export default Navbar;