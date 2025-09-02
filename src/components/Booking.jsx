import { React, useState, useEffect, useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import { UserContext } from "../Context/UserContext";
import { Link, useLocation } from "react-router-dom";
import K_hotel from "../public/k hotel douala.webp";
import flag from "../public/b.png";
import StepProgressBar from "./ProgressBar";
import { FaArrowLeft, FaCcVisa, FaCcMastercard, FaMobileAlt, FaMoneyBillWave } from "react-icons/fa";
import { getNames } from 'country-list';

const countries = getNames();

const Booking = () => {
  const location = useLocation();
  const hotel = location.state;
  const { searchData } = useContext(SearchContext);
  const { user } = useContext(UserContext); // ✅ moved inside component

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (user) {
      const [first, last] = (user.name || "").split(" ");
      setFirstName(first || "");
      setLastName(last || "");
      setEmail(user.email || "");
      setCountry(user.country || "");
    }
  }, [user]);

  const [selected, setSelected] = useState(null);

  const payments = [
    { name: "Visa", icon: <FaCcVisa size={36} className="text-blue-600" /> },
    { name: "MasterCard", icon: <FaCcMastercard size={36} className="text-red-600" /> },
    { name: "Momo", icon: <FaMobileAlt size={36} className="text-yellow-500" /> },
    { name: "Orange", icon: <FaMoneyBillWave size={36} className="text-orange-500" /> },
  ];

  if (!hotel) {
    return (
      <div className="bg-gray-300 h-screen w-full font-bold text-center text-3xl md:text-5xl justify-center py-32 md:py-52">
        <h2>No hotel selected for booking.</h2>
        <Link to="/stays" className="text-blue-600 underline text-xl font-light">
          Click to book a Hotel
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-400 min-h-screen font-itim">
      {/* Back button */}
      <Link to="/Home" className="flex space-x-3 px-4 sm:px-6 md:px-20 py-4 text-white font-semibold text-sm md:text-base">
        <FaArrowLeft className="mt-1 mr-2" /> Back to Homepage
      </Link>

      {/* Main container */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-36 py-6 flex justify-center">
        <div className="bg-blue-50 p-4 sm:p-6 md:p-6 rounded-sm w-full max-w-6xl">
          {/* Progress bar */}
          <div className="mb-6">
            <StepProgressBar />
          </div>

          {/* Form + Summary */}
          <div className="flex flex-col md:flex-row mt-6 md:space-x-10 space-y-10 md:space-y-0">
            {/* Left - Form */}
            <div className="md:w-7/12 w-full">
              <div className="rounded-md bg-gray-300 p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className="w-full border bg-white border-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    className="w-full border bg-white border-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border bg-white border-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border  bg-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
                  <input
                    type="text"
                    placeholder="+237..."
                    className="w-full border bg-white border-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Confirm / Cancel buttons */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6 space-y-2 sm:space-y-0 sm:space-x-4">
                <Link to="/confirmingPayment">
                  <button className="rounded-sm px-6 py-2 bg-indigo-700 text-white text-sm font-semibold w-full sm:w-auto">
                    Confirm
                  </button>
                </Link>
                <Link to="/">
                  <button className="rounded-sm px-6 py-2 bg-red-600 text-white text-sm font-semibold w-full sm:w-auto">
                    Cancel
                  </button>
                </Link>
              </div>

              {/* Flag */}
              <div className="mt-6 flex justify-center md:justify-start">
                <img src={flag} alt="Flag" className="w-40 sm:w-52 md:w-72" />
              </div>
            </div>

            {/* Right - Booking Summary */}
            <div className="md:w-5/12 w-full flex flex-col space-y-5">
              <div className="bg-gray-300 p-4 text-sm rounded-sm font-semibold text-center">
                {searchData.checkIn} - {searchData.checkOut}
              </div>

              <div className="bg-gray-300 p-4 text-sm rounded-sm font-semibold flex flex-wrap justify-center md:justify-between gap-4">
                {payments.map((payment, index) => (
                  <div
                    key={payment.name}
                    onClick={() => setSelected(index)}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg cursor-pointer transition-all
                    ${selected === index ? "bg-green-200 shadow-lg" : ""}`}
                  >
                    {payment.icon}
                    <span className="text-gray-700 font-medium mt-1">{payment.name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-300 p-4 text-sm rounded-sm font-semibold">
                <p className="my-3 font-semibold text-lg">{hotel.hotelName}</p>
                <p className="mb-3">{hotel.hotelLocation}</p>
                <img
                  src={hotel.hotelImage}
                  alt="Hotel"
                  className="w-full h-44 sm:h-52 md:h-44 object-cover rounded-md"
                />
                <div className="space-y-3 mt-4">
                  <p>1 Apartment 2 rooms</p>
                  <p>Number of guests: {searchData.guests}</p>
                  <p className="line-through text-red-500 text-xs">{hotel.hotelOldPrice}/Night</p>
                  <p className="text-lg text-green-600 font-bold">{hotel.hotelNewPrice}/Night</p>
                  <p>
                    Booking fees <span className="text-red-500">+2500 FCFA</span>
                  </p>
                  <p>
                    Total:{" "}
                    <span className="font-bold">
                      {2500 +
                        Number(
                          hotel.hotelNewPrice.toString().replace(/\D/g, "")
                        )}{" "}
                      FCFA
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
