import React from "react";
import { useSearch } from "../Context/SearchContext";

const GuestCounter = () => {
  const { searchData, setSearchData } = useSearch();

  const increase = () => {
    setSearchData({ ...searchData, guests: searchData.guests + 1 });
  };

  const decrease = () => {
    if (searchData.guests > 1) {
      setSearchData({ ...searchData, guests: searchData.guests - 1 });
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-md w-fit">
      <button
        onClick={decrease}
        className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        -
      </button>
      <span className="text-lg font-semibold">{searchData.guests}</span>
      <button
        onClick={increase}
        className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default GuestCounter;
