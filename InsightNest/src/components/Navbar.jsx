import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router";
import { Tooltip } from 'react-tooltip';

// import Logo from "./Logo";
import { CircleUser } from "lucide-react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {

  const {user, logOut} = useAuth();




  const handleLogOut = () => {
    logOut()
    .then(() => {
      // Successfully logged out
    })
    .catch(error => {
      console.log(error.message);
    });
  }

    const links = <>
            <li><NavLink to ='/' className={({isActive}) => isActive ? "text-blue-500 font-bold" : "font-semibold"}>Home</NavLink></li>
            
            

            

            {
              user  && <>
              <li><NavLink to ='/add-lesson' className={({isActive}) => isActive ? "text-blue-500 font-bold" : ""}>Add Lesson</NavLink></li>
              
              </>
            }
            
        
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto clr2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}


          </ul>
        </div>
        <span className="btn btn-ghost text-xl">
            {/* <Logo></Logo> */}
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end">
        
        {
        user ? (
          <div className="flex items-center gap-3">
            {user.photoURL ? (
              <img 
                src={user.photoURL} 
                alt={user.displayName || "User"} 
                className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover cursor-pointer"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user.displayName || user.email || "User"}
              />
            ) : (
              <button 
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user.displayName || user.email || "User"}
              >
                <CircleUser size={24} />
              </button>
            )}
            <Tooltip 
              id="user-tooltip" 
              place="bottom" 
              style={{ backgroundColor: '#333', color: '#fff', fontSize: '12px' }}
            />
            <a onClick={handleLogOut} className="btn bg-slate-900 text-white px-4 py-2 rounded hover:scale-[1.02]">Log Out</a>
            
          </div>
        ) : (
          <div>
            <Link to='/auth/login' className="btn mr-3 bg-slate-900  text-white px-4 py-2 rounded hover:scale-[1.02]">Login</Link> 
            <Link to='/auth/register' className="btn text-white bg-slate-900 px-4 py-2 rounded hover:scale-[1.02]">Register</Link>
          </div>
        )
        }
        
      </div>
    </div>
  );
};

export default Navbar;