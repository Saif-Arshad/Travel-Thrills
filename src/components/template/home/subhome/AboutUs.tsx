import React from 'react'
import Image from 'next/image'
import {ASSETS } from '../../../../../public/Assets'
function AboutUs() {
  return (
    <div className="w-full flex items-center justify-center mt-60 sm:mt-40 md:mt-28 relative">
    <div className="w-11/12 flex my-6 flex-col lg:flex-row flex-wrap justify-center">
    <div className="w-full flex itmes-center justify-center lg:w-6/12 ">
        <Image
        src={ASSETS.about_img}
    	 height={500}
         className="object-cover"
          width={500}
        alt="About-Us"
        
        ></Image>
    </div>
    <div className="w-full lg:w-6/12">
    <h1
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    className='font-bold text-2xl my-3 md:text-5xl'>
    We help to find your dream place
    </h1>
    <p className='my-3 mt-7 text-lg'>
    At TravelThrills , we&rsquo;re dedicated to turning your travel dreams into reality. Whether you&rsquo;re seeking hidden gems or iconic destinations, our expert guides and personalized recommendations ensure unforgettable experiences. Join our community of explorers and embark on your journey to discover the world&rsquo;s most enchanting places. Let us help you find your perfect getaway!
    </p>
    <button
        className='bg-emerald-500 py-3 px-9 font-semibold text-white mt-5 rounded-3xl hover:scale-95 transition-all text-lg'
    >
        Book Now
    </button>

    </div>
    </div>
    </div>
  )
}

export default AboutUs
