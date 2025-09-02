import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const steps = [
  { name: "Customer Info", path: "/booking" },
  { name: "Payment Confirmation", path: "/confirmingPayment" },
  { name: "Booking Successful", path: "/bookingSuccesful" },
];

const StepProgressBar = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  const currentStep = steps.findIndex((s) => s.path === location.pathname) + 1;

  useEffect(() => {
    const newWidth = ((currentStep - 1) / (steps.length - 1)) * 100;
    setProgress(newWidth);
  }, [currentStep]);

  return (
    <div className="w-full flex flex-col items-center mb-8 font-itim">
      <div className="relative flex items-center justify-between w-3/4 h-12">
        {/* Gray line */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-lg -translate-y-1/2"></div>

        {/* Blue filled line */}
        <div
          className="absolute top-1/2 left-0 h-2 bg-blue-600 rounded-lg -translate-y-1/2 transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Step circles */}
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full z-10 
                ${index + 1 <= currentStep ? "bg-blue-900 text-white" : "bg-gray-300 text-black"}`}
              style={{ marginTop: "-50%" }} // vertically center on the line
            >
              {index + 1}
            </div>
            <p className="mt-6 text-sm text-center">{step.name}</p> {/* space for label */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepProgressBar;
