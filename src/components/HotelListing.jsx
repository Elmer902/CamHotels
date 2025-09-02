import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const HotelListing = ({ hotels = [] }) => {
  if (!hotels.length) {
    return (
      <div className="my-10 px-4 md:px-12">
        <div className="p-6 rounded-xl bg-white shadow text-gray-600">
          No hotels match your filters. Try clearing some filters.
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 px-4 md:px-12 font-itim">
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="relative h-44">
              <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className={`${idx < Math.round(hotel.rating) ? "text-white" : "text-gray-300"}`} />
                ))}
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold">{hotel.name}</h2>
                <p className="text-gray-500 text-sm">{hotel.location}</p>
                <p className="text-sm text-gray-700 mt-2 line-clamp-3">{hotel.description}</p>
                <button className="text-blue-600 underline mt-1 text-sm">See reviews</button>
              </div>
                  <hr  className="my-5"/>
              <div className="flex items-center justify-between mt-3">
                <div>
                  {hotel.oldPrice && (
                    <p className="line-through text-red-500 text-xs">{hotel.oldPrice}</p>
                  )}
                  <p className="text-base font-bold">{hotel.newPrice}</p>
                  <p className={`${hotel.available ? "text-green-600" : "text-red-600"} font-medium text-xs`}>
                    {hotel.available ? "Available" : "Sold Out"}
                  </p>
                </div>
                <Link to="/hotel-details"
                state={hotel}>
                  <button
                    disabled={!hotel.available}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition ${
                      hotel.available ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-400 text-gray-100 cursor-not-allowed"
                    }`}
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HotelListing;
