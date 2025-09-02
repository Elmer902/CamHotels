// src/context/SearchContext.js
import React, { createContext, useState } from "react";
/* eslint-disable react-refresh/only-export-components */
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};
