import React from 'react'
import Home from '../components/Home'
import ViewedLocations from '../components/ViewedLocations'
import HotelListing from '../components/HotelListing'
import Reviews from '../components/Reviews'
import { allHotels } from './HotelListings';
import { Link } from 'react-router-dom'
const HomePage = () => {
  const featuredHotels = allHotels.slice(0, 3);
  return (
    <div className='space-y-5 items-center justify-center font-itim'>
      <Home />

      {/* Text between Home and ViewedLocations */}
      <div className='text-center px-4'>
        <p className='text-lg text-gray-900 mt-24'>
          Explore our curated list of destinations and see which places have caught the attention of travelers just like you.
        </p>
      </div>
      <ViewedLocations />

      {/* Text between ViewedLocations and HotelListing */}
      <div className='text-center px-4'>
        <p className='text-gray-600'>
          Take a look at the most prolific hotels in Cameroon, handpicked for comfort and quality service.
        </p>
      </div>
       
    <HotelListing  hotels={featuredHotels}/>

       
      {/* Text between HotelListing and Reviews */}
      <div className='text-center px-4'>
        <h2 className='text-2xl font-semibold my-4'>
          What Our Guests Say
        </h2>
        <p className='text-gray-600'>
          Discover reviews and experiences from travelers who have stayed at these wonderful hotels.
        </p>
      </div>
      <Reviews />
          <div className=' py-12 text-center rounded-lg mx-4'>
          <h2 className='text-3xl font-bold mb-4'>Ready to book your next stay?</h2>
          <p className='text-gray-700 mb-6'>Find the perfect hotel and experience comfort like never before.</p>
          <Link to="/stays">
          <button className='bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 hover:shadow-lg'>
          Browse All Hotels
          </button>
          </Link>
          </div>

    </div>
  )
}

export default HomePage
