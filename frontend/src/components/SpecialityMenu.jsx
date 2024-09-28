import React from "react";
import { assets } from "../assets/assets";
const SpecialityMenu = () => {
  return (
    <div id="speciality" className="py-20 flex flex-col items-center justify-center">
      <div>Find by Speciality</div>
      <div>
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </div>

      <div className="grid grid-flow-col gap-4">
        <div>
          <img src={assets.Gynecologist} />
          <p>Gynecologist</p>
        </div>
        <div>
          <img src={assets.Dermatologist} />
          <p>Dermatologist</p>
        </div>
        <div>
          <img src={assets.Gastroenterologist} />
          <p>Gastroenterologist</p>
        </div>
        <div>
          <img src={assets.General_physician} />
          <p>General Physician</p>
        </div>
        <div>
          <img src={assets.Neurologist} />
          <p>Neurologist</p>
        </div>
        <div>
          <img src={assets.Pediatricians} />
          <p>Pediatricians</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
