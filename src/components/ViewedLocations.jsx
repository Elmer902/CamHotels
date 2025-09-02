import React from "react";
import Run from "../public/run_point.jpg";
import Kribi from '../public/KRibi.jpeg'
import mt from '../public/Mtcm.jpg'
import Unity from '../public/unity.jpeg'

const ViewedLocations = () => {
const locations = [
  {
    city: "Douala",
    image: Run,
    name: "Run Point",
    visits: "2000 yearly visits",
    hotels: "120 nearby hotels",
    rating: 4.5,
    mapLink: "https://www.google.com/maps/place/Run+Point,+Douala,+Cameroon/@4.0593,9.7344,17z"
  },
  {
    city: "Yaoundé",
    image: Unity,
    name: "Unity Monument",
    visits: "1500 yearly visits",
    hotels: "95 nearby hotels",
    rating: 4.2,
    mapLink: "https://www.google.com/maps/place/Unity+Monument,+Yaoundé,+Cameroon/@3.8480,11.5026,17z"
  },
  {
    city: "Buea",
    image: mt,
    name: "Mount Cameroon",
    visits: "3000 yearly visits",
    hotels: "75 nearby hotels",
    rating: 4.8,
    mapLink: "https://www.google.com/maps/place/Mount+Cameroon/@4.0511,9.7679,12z"
  },
  {
    city: "Kribi",
    image: Kribi,
    name: "Kribi Beach",
    visits: "2500 yearly visits",
    hotels: "110 nearby hotels",
    rating: 4.6,
    mapLink: "https://www.google.com/maps/place/Kribi+Beach,+Kribi,+Cameroon/@2.9406,9.9102,15z"
  }
];
  return (
    <div className="text-center w-full h-full font-itim">
      <section className="py-8 mb-16 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="relative flex flex-col rounded-xl items-center  bg-white hover:shadow-xl transition duration-300"
          >
            {/* City Badge */}
            <div className="bg-[#1C1717] rounded-tr-lg rounded-bl-lg text-white px-5 py-1 absolute top-0 right-0 text-sm">
              <span>{loc.city}</span>
            </div>

            {/* Image */}
            <img
              src={loc.image}
              alt={loc.name}
              className="rounded-t-xl w-full h-40 object-cover"
            />

            {/* Info */}
            <div className="w-full px-3 py-3 flex flex-col text-left">
              <p className="font-semibold text-gray-900">{loc.name}</p>
              <p className="text-sm text-gray-600">{loc.visits}</p>
              <p className="text-sm text-gray-600">{loc.hotels}</p>

              {/* Rating */}
              <div className="flex items-center mt-2 text-yellow-500">
                {"★".repeat(Math.floor(loc.rating))}
                {loc.rating % 1 !== 0 ? "☆" : ""}
                <span className="ml-2 text-sm text-gray-700">
                  {loc.rating.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Button */}
                <button
                onClick={() => window.open(loc.mapLink, "_blank")} className="my-4 bg-[#1C1717] rounded-md w-3/4 text-white hover:bg-gray-800 text-sm py-2 transition">
                Show on Map
                </button>
          </div>
        ))}
      </section>

      <hr className="border-0 h-0.5 bg-black my-16 rounded-full w-2/4 mx-auto" />
      <h1 className="text-2xl font-bold my-20">Top Hotels in Cameroon</h1>
    </div>
  );
};

export default ViewedLocations;
