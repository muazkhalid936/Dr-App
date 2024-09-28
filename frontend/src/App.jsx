import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/About";
import MyAppoinment from "./pages/MyAppointment";
import MyProfile from "./pages/MyProfile";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Doctors:speciality" element={<Doctors />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/My-profile" element={<MyProfile />} />
        <Route path="/My-appointment" element={<MyAppoinment />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Appointments:docId" element={<Appointments />} />
      </Routes>
    </div>
  );
};

export default App;
