import React from 'react'
import {ASSETS} from '../../../public/Assets'
import Booking from '@/components/template/booking/Booking'
function page() {
  return (
    <div className="min-h-screen">
      <div
        className="h-[45vh] sm:h-[35vh] w-full flex  items-end "
        style={
          {
            backgroundImage:`url(${ASSETS.booking_banner})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
          }
        }
      >
      <h1
      data-aos="fade-down"
      className='text-2xl md:text-5xl text-white font-bold mb-8 ml-4'
      >TravelTrills Booking</h1>

      </div>
      <Booking/>
      </div>
        )
    }
    
    export default page