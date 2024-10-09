import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="py-20 flex flex-col gap-5 items-center justify-center"
    >
      <div className="font-bold text-3xl">Find by Speciality</div>
      <div className="text-sm md:w-1/2 text-center ">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </div>
      <div className="flex sm:justify-center gap-4 md:gap-6 pt-4 w-full overflow-scroll">
        {specialityData.map((item, index) => {
          return (
            <Link
              key={index}
              className="items-center hover:translate-y-[-10px] text-sm md:tex-lg flex flex-col  transition-all duration-500 cursor-pointer"
              to={`/Doctors/${item.speciality}`}
            >
              <img className="w-16 sm:24 mb-2" src={item.image} />
              <p>{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialityMenu;
