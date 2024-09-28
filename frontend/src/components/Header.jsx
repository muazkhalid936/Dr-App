import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary  px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]">
        <p className="text-2xl md:text-3xl lg:text-3xl text-white font-bold">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex md:items-center flex-col md:flex-row gap-2 ">
          <img className="h-10 w-28" src={assets.group_profiles} alt="" />
          <p className="text-white font-light text-sm">
            Simply browse through our extensive list of trsuted doctors,{" "}
            <br className="block md:hidden" /> schedule your appointment
            hassele-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex rounded-full gap-2 text-sm hover:scale-105 ease-in-out duration-500 bg-white p-2"
        >
          Book appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 right-0"
          src={assets.header_img}
        />
      </div>
    </div>
  );
};

export default Header;
