import React from 'react'
import Gray from '../public/f.png'
import { Link } from 'react-router-dom'

const BookingSuccesful = () => {
  return (
    <div
      className="font-itim">
      <div className=" p-8 md:p-16 rounded-lg text-center  ">
        <h1 className="text-3xl md:text-5xl font-black mb-6">
          Booking Successful!!!
        </h1>
        <Link
          className="text-blue-400 text-lg md:text-xl underline hover:cursor-pointer block mb-6"
        >
          Click to print receipt
        </Link>
        <Link to="/user">
          <button className="bg-indigo-800 hover:bg-indigo-600 transition text-white font-semibold rounded-md px-2 text-sm py-2">
            Leave a review
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BookingSuccesful
