import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import HotelListing from "../components/HotelListing";
import K_Hotel from '../public/k hotel douala.webp';
import Star from '../public/StarHotel.jpeg';
import Ellisam from '../public/Ellisam.jpg';
import Ocean from '../public/Ocean.webp';
import random from '../public/random.jpeg';
import Mountain from '../public/Mountain.jpg';
import Palm from '../public/Palm.jpg'
import Sunset from '../public/Sunset.jpg'
import CityInn from '../public/city.avif'
import GreenView from '../public/Green.webp'

// Full hotel data
// eslint-disable-next-line react-refresh/only-export-components
export const allHotels = [
  {
    name: "K Hotel",
    location: "Douala",
    description: "K Hotel Douala is a modern 4-star hotel in Bonanjo offering stylish rooms, fine dining, and a rooftop pool.",
    oldPrice: "20,000 FCFA",
    newPrice: "25,000 FCFA",
    available: false,
    rating: 4,
    image: K_Hotel,
    wifi: true, pool: true, parking: true, restaurant: true, gym: true,
    breakfast: false, petFriendly: false, ac: true, bar: true, shuttle: false,
  },
  {
    name: "Star Palace",
    location: "Yaoundé",
    description: "Luxury suites with city views, rooftop bar, and spa services. Perfect for business and leisure.",
    oldPrice: "35,000 FCFA",
    newPrice: "28,000 FCFA",
    available: true,
    rating: 5,
    image: Star,
    wifi: true, pool: true, parking: true, restaurant: true, gym: false,
    breakfast: true, petFriendly: false, ac: true, bar: true, shuttle: true,
  },
  {
    name: "Ocean Breeze",
    location: "Kribi",
    description: "Beachfront hotel offering serene views, seafood restaurants, and water activities.",
    oldPrice: "30,000 FCFA",
    newPrice: "22,000 FCFA",
    available: false,
    rating: 4,
    image: Ocean,
    wifi: true, pool: true, parking: false, restaurant: true, gym: false,
    breakfast: true, petFriendly: true, ac: true, bar: true, shuttle: false,
  },
  {
    name: "Mountain View Lodge",
    location: "Bamenda",
    description: "Charming lodge in the hills with hiking trails, fresh air, and cozy accommodations.",
    oldPrice: "18,000 FCFA",
    newPrice: "15,000 FCFA",
    available: true,
    rating: 3,
    image: Mountain,
    wifi: false, pool: false, parking: true, restaurant: false, gym: false,
    breakfast: true, petFriendly: false, ac: false, bar: false, shuttle: false,
  },
  {
    name: "Hotel Ellisam",
    location: "Bamenda",
    description: "Cozy rooms with quick access to city center and markets.",
    oldPrice: "15,000 FCFA",
    newPrice: "70,000 FCFA",
    available: true,
    rating: 2,
    image: Ellisam,
    wifi: true, pool: false, parking: true, restaurant: true, gym: false,
    breakfast: false, petFriendly: false, ac: true, bar: true, shuttle: false,
  },
  {
    name: "MNaedou",
    location: "Bamenda",
    description: "Budget stay with essential amenities and friendly staff.",
    oldPrice: "10,000 FCFA",
    newPrice: "15,000 FCFA",
    available: true,
    rating: 3.5,
    image: random,
    wifi: true, pool: false, parking: true, restaurant: false, gym: false,
    breakfast: false, petFriendly: true, ac: false, bar: false, shuttle: false,
  },
    {
    name: "Palm Beach Resort",
    location: "Kribi",
    description: "Relax in luxury at this beachfront resort with palm trees and infinity pool.",
    oldPrice: "40,000 FCFA",
    newPrice: "35,000 FCFA",
    available: true,
    rating: 5,
    image: Palm,
    wifi: true, pool: true, parking: true, restaurant: true, gym: true,
    breakfast: true, petFriendly: true, ac: true, bar: true, shuttle: true,
  },
  {
    name: "Sunset Hotel",
    location: "Limbe",
    description: "Enjoy stunning sunset views over the sea with modern amenities.",
    oldPrice: "25,000 FCFA",
    newPrice: "20,000 FCFA",
    available: true,
    rating: 4,
    image: Sunset,
    wifi: true, pool: true, parking: true, restaurant: true, gym: false,
    breakfast: true, petFriendly: false, ac: true, bar: true, shuttle: false,
  },
  {
    name: "GreenView Lodge",
    location: "Buea",
    description: "Nestled in the mountains, perfect for nature lovers and hikers.",
    oldPrice: "15,000 FCFA",
    newPrice: "12,000 FCFA",
    available: true,
    rating: 3,
    image: GreenView,
    wifi: true, pool: false, parking: true, restaurant: false, gym: false,
    breakfast: true, petFriendly: false, ac: false, bar: false, shuttle: false,
  },
  {
    name: "City Inn",
    location: "Yaoundé",
    description: "Affordable urban hotel close to transport hubs and city attractions.",
    oldPrice: "12,000 FCFA",
    newPrice: "10,000 FCFA",
    available: true,
    rating: 2.5,
    image: CityInn,
    wifi: true, pool: false, parking: true, restaurant: true, gym: false,
    breakfast: false, petFriendly: false, ac: true, bar: false, shuttle: false,
  }
];



// Parse "25,000 FCFA" -> 25000
const priceValue = (priceStr) =>
  Number(String(priceStr).replace(/[^\d]/g, "")) || 0;

const HotelListings = () => {
  const locationHook = useLocation();
  const query = new URLSearchParams(locationHook.search);

  const initialPlace = query.get("location") || "";
  const [place, setPlace] = useState(initialPlace);
  const [placeInput, setPlaceInput] = useState(initialPlace);
  const [checkIn, setCheckIn] = useState(query.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(query.get("checkOut") || "");
  const [guests, setGuests] = useState(query.get("guests") || "");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [activeFilters, setActiveFilters] = useState({ filters: {}, price: null });

  useEffect(() => {
    const q = new URLSearchParams(locationHook.search);
    const loc = q.get("location") || "";
    setPlace(loc);
    setPlaceInput(loc);
    setCheckIn(q.get("checkIn") || "");
    setCheckOut(q.get("checkOut") || "");
    setGuests(q.get("guests") || "");
  }, [locationHook.search]);

  const filteredHotels = allHotels.filter((h) => {
    if (place && !h.location.toLowerCase().includes(place.toLowerCase())) return false;

    for (const [key, needed] of Object.entries(activeFilters.filters || {})) {
      if (needed && !h[key]) return false;
    }

    if (activeFilters.price) {
      const p = priceValue(h.newPrice);
      if (p < activeFilters.price.min || p > activeFilters.price.max) return false;
    }

    return true;
  });

  const runSearch = () => setPlace(placeInput);

  return (
    <div className="font-itim">
      {/* Top Search Bar */}
      <div className="fixed z-20 left-1/2 transform -translate-x-1/2 top-20 bg-[#0D6C02] py-2 px-2 rounded-lg shadow-lg  md:flex md:flex-row md:items-center md:gap-2 hidden flex-col">
        <input
          type="text"
          className="bg-white py-3 px-4 rounded-md w-full sm:w-auto"
          placeholder="Where to?..."
          value={placeInput}
          onChange={(e) => setPlaceInput(e.target.value)}
        />

        <div className="relative w-full sm:w-[220px]">
          <input
            type="text"
            className="bg-white py-3 px-4 rounded-md w-full cursor-pointer"
            placeholder="Check-in - Check-out"
            value={checkIn && checkOut ? `${checkIn} → ${checkOut}` : ""}
            onClick={() => setShowDatePicker(!showDatePicker)}
            readOnly
          />
          {showDatePicker && (
            <div className="absolute bg-white p-3 mt-2 rounded-lg shadow-lg flex gap-2 z-30">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="border p-2 rounded-md"
              />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="border p-2 rounded-md"
              />
            </div>
          )}
        </div>

        <input
          type="text"
          className="bg-white py-3 px-4 rounded-md w-full sm:w-auto"
          placeholder="Number of guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <button
          onClick={runSearch}
          className="hover:bg-green-400 text-white px-6 py-2 rounded-md font-semibold mt-2 md:mt-0"
        >
          Search
        </button>
      </div>

      {/* Main Layout */}
      <div className="md:pt-20 px-2 md:px-6 lg:px-12 flex  md:flex-row md:space-x-6">
        {/* Sidebar */}
        <section className="md:w-1/4  mb-6 z-5">
          <FilterBar onFilterChange={setActiveFilters} />
        </section>

        {/* Hotels Section */}
        <section className=" w-full">
          <HotelListing hotels={filteredHotels} />
        </section>
      </div>
    </div>
  );
};

export default HotelListings;
