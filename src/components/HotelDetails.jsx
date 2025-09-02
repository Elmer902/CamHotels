import React, { useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";
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
  const [parking, setParking] = useState(false);
  const { searchData } = useContext(SearchContext);
  const location = useLocation();
  const hotel = location.state;

  // Fallback if no hotel selected
  if (!hotel) {
    return (
      <div className="p-6">
        <h2 className="text-xl">No hotel selected.</h2>
        <Link to="/" className="text-blue-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  // Dynamically create facilities array based on hotel boolean properties
  const facilities = [
    hotel.wifi && { name: "WiFi", icon: <FaWifi /> },
    hotel.pool && { name: "Pool", icon: <FaSwimmingPool /> },
    hotel.parking && { name: "Parking", icon: <FaParking /> },
    hotel.restaurant && { name: "Restaurant", icon: <FaUtensils /> },
    hotel.gym && { name: "Gym", icon: <FaDumbbell /> },
    hotel.breakfast && { name: "Breakfast", icon: <FaCoffee /> },
    hotel.petFriendly && { name: "Pet Friendly", icon: <FaDog /> },
    hotel.ac && { name: "Air Conditioning", icon: <FaSnowflake /> },
    hotel.bar && { name: "Bar", icon: <FaGlassMartiniAlt /> },
    hotel.shuttle && { name: "Airport Shuttle", icon: <FaShuttleVan /> },
  ].filter(Boolean); // remove falsy values

  return (
    <div className="mt-10 px-4 md:px-10 items-center justify-center font-itim">
      {/* Breadcrumb */}
      <div className="flex gap-2 text-gray-500 mb-4">
        <Link to="/">Home</Link> &gt; <Link to="/stays">Hotels</Link> &gt;{" "}
        <Link to="/hotel-details">Details</Link>
      </div>

      {/* Hotel Info */}
      <h1 className="text-3xl font-bold mt-4">{hotel.name}</h1>
      <p className="text-gray-600">{hotel.location}</p>

      {/* Hotel Image */}
      <div className="relative flex w-full items-center justify-center">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-1/2 h-84 object-cover rounded-lg"
        />
      </div>

      {/* About & Rating */}
      <section className="flex flex-col md:flex-row justify-between my-10 gap-6 md:gap-16 items-center">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">About Hotel</h1>
          <p className="text-gray-700">{hotel.description}</p>
        </div>
        <div className="flex items-center mt-2">⭐{hotel.rating} / 5</div>
      </section>

      {/* Reservation Card */}
      <div className="text-center w-full my-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Reservation</h1>
        <div className="border border-gray-300 flex flex-col md:flex-row max-w-2xl w-full rounded-md overflow-hidden shadow-md">
          {/* Left */}
          <div className="p-6 flex flex-col space-y-3 border-b md:border-b-0 md:border-r">
            <h3 className="text-lg font-bold">{hotel.name}</h3>
            <p className="text-green-600">✓ Wifi ✓ Pool</p>
            <p className="text-green-600">✓ Parking ✓ Restaurant</p>
            <img
              src={hotel.image}
              alt="Hotel"
              className="w-full h-32 object-cover rounded-md mt-2"
            />
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
              <span>
                {searchData.guests && searchData.guests > 0
                  ? searchData.guests
                  : "pick in the search bar!!!"}
              </span>
            </div>

            <div className="p-6 flex justify-between">
              <p className="font-medium">Price / night</p>
              <div className="space-y-1">
                <p className="line-through text-red-500 text-xs">
                  {hotel.oldPrice}
                </p>
                <p className="text-base font-bold">{hotel.newPrice}</p>
              </div>
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
        <Link
          to="/booking"
          state={{
            hotelName: hotel.name,
            hotelLocation: hotel.location,
            hotelOldPrice: hotel.oldPrice,
            hotelNewPrice: hotel.newPrice,
            hotelImage: hotel.image,
          }}
        >
          <button className="bg-indigo-900 text-white hover:bg-indigo-600 mt-8 p-2 rounded-lg transition">
            Proceed to Booking
          </button>
        </Link>
      </div>

      {/* Facilities Section */}
      <section className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-10">Facilities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {facilities.map((facility, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-100 p-3 hover:shadow-md transition cursor-pointer"
            >
              <div className="text-2xl text-green-600">{facility.icon}</div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                {facility.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HotelDetails;
