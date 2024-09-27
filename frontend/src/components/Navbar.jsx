import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate= useNavigate();
  return (
    <div className="flex py-5  text-sm mb-5 border-b border-b-gray-400 items-center justify-between">
      <img className="w-40 cursor-pointer" src={assets.logo} alt="Logo" />
      <ul className="hidden md:flex gap-5 font-medium items-start">
        <NavLink to={'/'}>
          <li className="py-1">Home</li>

          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={'/Doctors'}>
          <li className="py-1">All Doctor</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={'/Contact'}>
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={'/About'}>
          <li className="py-1">About </li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4 ">
        <button onClick={()=>{
            navigate('/Login')
        } } className="bg-primary text-white px-6 py-3 rounded-full font-light hidden md:block">Create Account</button>
      </div>
    </div>
  );
};

export default Navbar;
