// BookingLayout.jsx
import StepProgressBar from "../components/ProgressBar";
import { Outlet } from "react-router-dom";
import Gray from '../public/f.png'
import React from "react";


const BookingLayout = () => {
  return (
    <div className="bg-[#D2DEE2] justify-center bg-contain bg-no-repeat bg-center md:h-screen h-screen font-itim"  style={{ backgroundImage: `url(${Gray})`, fontFamily: "'Itim', cursive" }}>
      {/* Progress bar visible only for booking pages */}
      <StepProgressBar />
      <Outlet />
    </div>
  );
};

export default BookingLayout;
