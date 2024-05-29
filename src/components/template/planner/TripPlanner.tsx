"use client"

import React from 'react'
import { useSelector} from "react-redux"
import LandingPageForm from '../home/subhome/landingPageForm';
import AiPlanner from './AiPlanner';

function TripPlanner() {
  
     const {destination,days,dateTo,
        dateFrom} = useSelector((state:any)=>state.formData)
        const formData = !destination || !days || !dateTo || !dateFrom;
        console.log(formData)
  return (
    <div className={`w-full flex ${!formData ? 'flex-col' : "flex-col-reverse" } justify-center items-center`}>

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
            <AiPlanner/>
        }
    </div>
    <div className='w-11/12'>

</div>
    </div>
  )
}

export default TripPlanner
