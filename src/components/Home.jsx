import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Bg1 from '../public/Bg1.jpg'
import Bg2 from '../public/Bg2.jpg'
import Bg3 from '../public/Bg3.jpg'
import Bg4 from '../public/Bg4.jpg'
import flag from '../public/flag.png'
import { SearchContext } from "../Context/SearchContext";
const HomePage = () => {
  const images = [Bg1, Bg2, Bg3, Bg4]
  const [current, setCurrent] = useState(0)

  // form states
  const [location, setLocation] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("")
  const [showDatePicker, setShowDatePicker] = useState(false)

   const { setSearchData } = useContext(SearchContext);

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const handleSearch = () => {
    navigate(`/stays?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`)
      setSearchData({ location, checkIn, checkOut, guests });
  }

  return (
    <>
      <div className="font-itim" >
        <div
          className="md:h-[400px] h-[250px] w-full bg-cover bg-center transition-all duration-700 ease-in-out relative"
          style={{ backgroundImage: `url(${images[current]})` }}
        >
          {/* Heading */}
          <h1 className="pl-6 pr-6 md:pl-20 md:pr-32 text-2xl text-center pt-24 sm:text-3xl md:text-5xl font-bold leading-snug md:leading-loose relative text-white drop-shadow-lg">
            Find and Book Hotels in <br />
            <span className="inline-flex items-center">
              Cameroon
              <img src={flag} alt="Cameroon flag" className="w-8 md:w-10 ml-2" />
            </span>
          </h1>

          {/* Search Bar */}
          <div className="absolute md:-bottom-8 hidden left-1/2 transform bg-[#0D6C02] gap-2 px-2 py-1 -translate-x-1/2 rounded-lg shadow-lg md:flex flex-col sm:flex-row items-center w-[90%] sm:w-auto">
            
            {/* Location Input */}
            <input
              type="text"
              className="bg-white py-3 px-6 rounded-md w-full sm:w-auto"
              placeholder="Where to? eg Douala..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            {/* Date Range (Fake Single Input) */}
            <div className="relative">
              <input
                type="text"
                className="bg-white py-3 px-6 rounded-md w-full sm:w-[220px] cursor-pointer"
                placeholder="Check-in - Check-out"
                value={
                  checkIn && checkOut
                    ? `${checkIn} → ${checkOut}`
                    : ""
                }
                onClick={() => setShowDatePicker(!showDatePicker)}
                readOnly
              />

              {/* Hidden actual date pickers */}
              {showDatePicker && (
                <div className="absolute bg-white p-3 mt-2 rounded-lg shadow-lg flex gap-2">
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

            {/* Guests */}
            <input
              type="text"
              className="bg-white py-3 px-6 rounded-md w-full sm:w-auto"
              placeholder="Number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-green-400 text-gray-100 px-10 py-3 rounded-md font-bold w-full sm:w-auto"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
