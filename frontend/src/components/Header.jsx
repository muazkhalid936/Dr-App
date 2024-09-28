import React from "react";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <div className="bg-primary items-center flex flex-col md:flex-row  px-6 md:px-10 lg:px-20 ">
      <div className="md:w-1/2  flex gap-4 flex-col items-start py-10 m-auto  justify-center ">
        <div>
          <p className="text-white  text-2xl font-bold">
            Book Appointment <br /> With Trusted Docotrs
          </p>
        </div>

        <div className=" flex flex-col gap-4 ">
          <img src={assets.group_profiles} className="h-10 w-24" alt="" />
          <p className="text-gray-200 text-sm">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a className="bg-white flex text-sm items-center justify-center gap-3 px-2 rounded-full py-2">
          Book appointment <img src={assets.arrow_icon} />
        </a>
      </div>

      <div className="md:flex-1 relative   flex justify-center bottom-0 md:right-0 items-center ">
        <img className="w-[50vh] md:w-[60%]" src={assets.header_img} />
      </div>
    </div>
  );
};

export default Header;
