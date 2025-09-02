import React from 'react'
import Gray from '../public/f.png'
import { Link } from 'react-router-dom'

const PaymentConfirmation = () => {
  return (
    <div
      className="">
      <div className="  p-8 md:p-16 rounded-lg text-center  font-itim">
        <h1 className="text-3xl md:text-5xl font-black mb-6 ">
          Confirming Payments
        </h1>
        <Link to="/bookingSuccesful">
          <p className="text-blue-400 underline hover:cursor-pointer text-lg md:text-xl">
            Click to confirm
          </p>
        </Link>
      </div>
    </div>
  )
}

export default PaymentConfirmation
