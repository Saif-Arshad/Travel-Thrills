import React from 'react'
import {ASSETS} from '../../../public/Assets'
function page() {
  return (
    <div className="min-h-screen">
      <div
        className="h-[35vh] w-full flex  items-end "
        style={
          {
            backgroundImage:`url(${ASSETS.blog_banner})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
          }
        }
      >
      <h1
      data-aos="fade-down"
      className='text-2xl md:text-5xl text-white font-bold mb-4 ml-4'
      >TravelTrills Blog</h1>

      </div>
    </div>
  )
}

export default page
