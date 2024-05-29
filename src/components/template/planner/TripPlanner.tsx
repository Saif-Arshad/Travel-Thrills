"use client"

import React from 'react'
import { useSelector} from "react-redux"
import LandingPageForm from '../home/subhome/landingPageForm';
import AiPlanner from './AiPlanner';

function TripPlanner() {
  
     const {destination,days,dateTo,clicked,dateFrom} = useSelector((state:any)=>state.formData)
        const formData = !destination || !days || !dateTo || !dateFrom || !clicked;
  return (
    <div className="w-full flex flex-col justify-center items-center">

    <div className='w-11/12'>
   
        {
            formData ?
            <div>

                <h1 className='text-3xl md:text-5xl font-bold text-center mt-9 '>Plan Your Trip with AI</h1>
            <div className="relative mt-24">
                <LandingPageForm />

            </div>
            </div>
            
            :
            <>
            <AiPlanner/>
            </>
        }
    </div>
    </div>
  )
}

export default TripPlanner
