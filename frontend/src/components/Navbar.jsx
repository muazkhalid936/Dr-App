import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex py-5  text-sm mb-5 border-b border-b-gray-400 items-center justify-between">
      <img className="w-40 cursor-pointer" src={assets.logo} alt="Logo" />
      <ul className="hidden md:flex gap-5 font-medium items-start">
        <NavLink to={"/"}>
          <li className="py-1">Home</li>

          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/Doctors"}>
          <li className="py-1">All Doctor</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/Contact"}>
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/About"}>
          <li className="py-1">About </li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4 ">
        {token ? (
          <div className="flex items-center gap-2 group relative cursor-pointer">
            <img src={assets.profile_pic} alt="" className="w-9 rounded-full" />
            <img src={assets.dropdown_icon} alt="" className="w-2.5" />

            <div className="absolute text-gray-600 -top-4 right-0 pt-14 text-md font-medium z-20 group-hover:block hidden">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/")}
                  className="hover:text-black sub-menu hover:font-bold cursor-pointer md:hidden"
                >
                  Home
                </p>
                <p
                  onClick={() => navigate("/Doctors")}
                  className="hover:text-black hover:font-bold cursor-pointer md:hidden"
                >
                  All Doctors
                </p>
                <p
                  onClick={() => navigate("/Contact")}
                  className="hover:text-black hover:font-bold cursor-pointer md:hidden"
                >
                  Contact
                </p>
                <p
                  onClick={() => navigate("/About")}
                  className="hover:text-black hover:font-bold cursor-pointer md:hidden"
                >
                  About
                </p>
                <p
                  onClick={() => navigate("/My-profile")}
                  className="hover:text-black hover:font-bold cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/My-appointment")}
                  className="hover:text-black cursor-pointer hover:font-bold"
                >
                  My Appoinments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer hover:font-bold"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/Login");
            }} 
            className="bg-primary text-white px-6 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
