import React from 'react'
import {ASSETS} from '../../../../public/Assets'
import  TripPlanner from '@/components/template/planner/TripPlanner'
function page({params}:any) {
  const {slug} = params
  return (
    <div className="min-h-screen">
      <div
        className="h-[45vh] sm:h-[35vh] w-full flex  items-end "
        style={
          {
            backgroundImage:`url(${ASSETS.planner_banner})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
          }
        }
      >
      <h1
      data-aos="fade-down"
      className='text-2xl md:text-5xl text-white font-bold mb-8 ml-4'
      >TravelTrills Planner</h1>

      </div>
        <TripPlanner destination={slug} />

    </div>
  )
}

export default page
