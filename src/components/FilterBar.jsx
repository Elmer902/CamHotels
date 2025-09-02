import React, { useState } from "react";
import {
  FaWifi, FaSwimmingPool, FaParking, FaUtensils, FaDumbbell,
  FaMoneyBillWave, FaCoffee, FaDog, FaSnowflake, FaGlassMartiniAlt, FaShuttleVan,
  FaFilter, FaTimes
} from "react-icons/fa";

const FilterBar = ({ onFilterChange }) => {
  const popular = [
    { key: "wifi", name: "Wifi", icon: <FaWifi /> },
    { key: "pool", name: "Pool", icon: <FaSwimmingPool /> },
    { key: "parking", name: "Parking", icon: <FaParking /> },
    { key: "restaurant", name: "Restaurant", icon: <FaUtensils /> },
    { key: "gym", name: "Gym", icon: <FaDumbbell /> },
  ];

  const prices = [
    { key: "0-20000", label: "0 – 20,000 XAF", min: 0, max: 20000 },
    { key: "20000-50000", label: "20,000 – 50,000 XAF", min: 20000, max: 50000 },
    { key: "50000-100000", label: "50,000 – 100,000 XAF", min: 50000, max: 100000 },
    { key: "100000+", label: "100,000+ XAF", min: 100000, max: Infinity },
  ];

  const other = [
    { key: "breakfast", name: "Breakfast Included", icon: <FaCoffee /> },
    { key: "petFriendly", name: "Pet Friendly", icon: <FaDog /> },
    { key: "ac", name: "Air Conditioning", icon: <FaSnowflake /> },
    { key: "bar", name: "Bar", icon: <FaGlassMartiniAlt /> },
    { key: "shuttle", name: "Airport Shuttle", icon: <FaShuttleVan /> },
  ];

  const [selected, setSelected] = useState({});
  const [price, setPrice] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const push = (next) => onFilterChange?.(next);

  const toggle = (key) => {
    const next = { ...selected, [key]: !selected[key] };
    setSelected(next);
    push({ filters: next, price });
  };

  const choosePrice = (key) => {
    const p = prices.find((x) => x.key === key) || null;
    setPrice(p);
    push({ filters: selected, price: p });
  };

  const clearAll = () => {
    setSelected({});
    setPrice(null);
    push({ filters: {}, price: null });
  };

  return (
    <>
      {/* Mobile filter button */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          
          <FaFilter /> Filters
        </button>
      </div>

      {/* Sidebar / Drawer */}
      <div
        className={`
          fixed  left-0 h-full w-64 bg-white shadow-lg p-4 font-itim z-50
          transition-transform duration-300 border rounded-md
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:h-auto md:shadow-none
        `}
      >
        
        {/* Mobile close button */}
        <div className="flex items-center justify-between mb-4 md:hidden">
          <h2 className="text-2xl font-bold">Filters</h2>
          <button onClick={clearAll} className="text-sm text-blue-600 hover:underline">Clear</button>
          <button onClick={() => setMobileOpen(false)} className="text-xl">
            <FaTimes />
          </button>
        </div>

        {/* Clear button */}
        <div className=" items-center justify-between mb-4 hidden md:flex">
          <h2 className="text-2xl font-bold">Filters</h2>
          <button onClick={clearAll} className="text-sm text-blue-600 hover:underline">Clear</button>
        </div>

        {/* Popular Filters */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Popular filters</h3>
          <div className="flex flex-col space-y-2">
            {popular.map((f) => (
              <label key={f.key} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!selected[f.key]}
                  onChange={() => toggle(f.key)}
                  className="accent-blue-500"
                />
                <span className="flex items-center space-x-2">{f.icon}<span>{f.name}</span></span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
            <FaMoneyBillWave className="text-green-600" /> <span>Price range</span>
          </h3>
          <div className="flex flex-col space-y-2">
            {prices.map((p) => (
              <label key={p.key} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  checked={price?.key === p.key}
                  onChange={() => choosePrice(p.key)}
                  className="accent-blue-500"
                />
                <span>{p.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Other options */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Other options</h3>
          <div className="flex flex-col space-y-2">
            {other.map((f) => (
              <label key={f.key} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!selected[f.key]}
                  onChange={() => toggle(f.key)}
                  className="accent-blue-500"
                />
                <span className="flex items-center space-x-2">{f.icon}<span>{f.name}</span></span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile when drawer is open */}
      {mobileOpen && (
        <div
          className="fixed  bg-opacity-30 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default FilterBar;
