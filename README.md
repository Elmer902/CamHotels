# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

 {/* Facilities Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {facilities.map((facility, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="text-3xl text-green-600">{facility.icon}</div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                {facility.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const HotelDetails = () => {
  const [guests, setGuests] = useState(1);
  const [parking, setParking] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state;

  useEffect(() => {
    if (!hotel) {
      navigate("/stays"); // redirect if hotel is undefined
    }
  }, [hotel, navigate]);

  const facilities = hotel?.facilities || [];

  const images = [
    "/wdc-aparthotel.jpg",
    "/k hotel douala.webp",
    "/Hilton.jpg",
    "/akwa palace.jpeg",
  ];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-10 px-4 md:px-10">
      {/* ... Your design stays exactly the same ... */}

      {/* Facilities Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {facilities.map((facility, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="text-3xl text-green-600">{facility.icon}</div>
              <span className="mt-2 text-sm font-medium text-gray-700">{facility.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ... rest of your design stays unchanged ... */}
    </div>
  );
};

export default HotelDetails;



import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
  FaDumbbell,
  FaCoffee,
  FaDog,
  FaSnowflake,
  FaGlassMartiniAlt,
  FaShuttleVan,
} from "react-icons/fa";

const HotelDetails = () => {
  const [guests, setGuests] = useState(1);
  const [parking, setParking] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state;

  useEffect(() => {
    if (!hotel) {
      navigate("/stays");
    }
  }, [hotel, navigate]);

  const facilities = hotel?.facilities || [];

  const images = [
    "/wdc-aparthotel.jpg",
    "/k hotel douala.webp",
    "/Hilton.jpg",
    "/akwa palace.jpeg",
  ];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-10 px-4 md:px-10">
      {/* Breadcrumb */}
      <div className="flex gap-2 text-gray-500 mb-4">
        <Link to="/">Home</Link> &gt; <Link to="/stays">Hotels</Link> &gt; <Link to="/hotel-details">Details</Link>
      </div>

      {/* Hotel Intro */}
      <section>
        <h1 className="text-3xl font-bold">{hotel.name}</h1>
        <h2 className="text-xl font-semibold my-5">{hotel.location}</h2>

        {/* Image Carousel */}
        <div className="relative flex items-center justify-center">
          <img
            src={images[current]}
            alt="Hotel"
            className={`rounded-md h-1/2 w-1/2 object-cover shadow-md transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </section>

      {/* About & Rating */}
      <section className="flex flex-col md:flex-row justify-between my-10 gap-6 md:gap-16 items-center">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">About Hotel</h1>
          <p className="text-gray-700">{hotel.description}</p>
        </div>
        <div className="flex space-x-1 text-yellow-400 text-2xl md:text-3xl">
          {Array(5).fill(0).map((_, i) => <FaStar key={i} />)}
        </div>
      </section>

      <hr className="border-0 h-0.5 bg-black my-16 rounded-full w-2/4 mx-auto" />

      {/* Facilities Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {facilities.map((facility, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="text-3xl text-green-600">{facility.icon}</div>
              <span className="mt-2 text-sm font-medium text-gray-700">{facility.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Box */}
      <div className="text-center w-full my-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Reservation</h1>
        <div className="border border-gray-300 flex flex-col md:flex-row max-w-2xl w-full rounded-md overflow-hidden shadow-md">
          {/* Left */}
          <div className="p-6 flex flex-col space-y-3 border-b md:border-b-0 md:border-r">
            <h3 className="text-lg font-bold">K Hotel Douala</h3>
            <p className="text-green-600">✓ Wifi ✓ Pool</p>
            <p className="text-green-600">✓ Parking ✓ Restaurant</p>
            <img src="/k hotel douala.webp" alt="K Hotel" className="w-full h-32 object-cover rounded-md mt-2" />
          </div>

          {/* Right */}
          <div className="flex-1 divide-y">
            <div className="p-6">
              <select className="border rounded-md px-3 py-2 w-full">
                <option>1 apartment, 1 room</option>
                <option>2 apartments, 2 rooms</option>
              </select>
            </div>

            <div className="p-6 flex justify-between items-center">
              <p className="font-medium">Number of guests</p>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() => setGuests(guests + 1)}
                >
                  +
                </button>
                <span className="font-bold">{guests}</span>
                <button
                  className="bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                >
                  -
                </button>
              </div>
            </div>

            <div className="p-6 flex justify-between">
              <p className="font-medium">Price / night</p>
              <p className="font-semibold">22,000 XAF</p>
            </div>

            <div className="p-6 flex justify-between items-center">
              <p className="font-medium">Include Parking (+1000 XAF)</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={parking}
                  onChange={() => setParking(!parking)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
              </label>
            </div>
          </div>
        </div>
        <Link to="/booking">
          <button className="bg-indigo-900 text-white hover:bg-indigo-600 mt-8 p-2 rounded-lg transition">
            Proceed to Booking
          </button>
        </Link>
      </div>

      {/* Similar Hotels */}
      <div className="bg-white py-10">
        <h2 className="text-center text-xl font-bold mb-8">Similar Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-md overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <div className="relative">
                <img src="/wdc-aparthotel.jpg" alt="Hotel" className="w-full h-36 object-cover" />
                <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">★★★★★</div>
              </div>
              <div className="bg-black text-white p-3">
                <h3 className="font-semibold">Aparthotel</h3>
                <p className="text-sm">Buea, Southwest</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
