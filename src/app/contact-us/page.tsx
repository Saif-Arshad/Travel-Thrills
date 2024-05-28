import React from 'react'
import {ASSETS} from '../../../public/Assets'
import ContactInformation from '@/components/template/contact/ContactInformation'
import NewsLetter from '@/components/template/home/subhome/NewsLetter'

function page() {
   
  return (
    <div>
      <div
        className="h-[45vh] sm:h-[35vh] w-full flex  items-end "
        style={
          {
            backgroundImage:`url(${ASSETS.contact_banner})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
          }
        }
      >
       <h1
      data-aos="fade-down"
      className='text-2xl md:text-5xl text-white font-bold mb-8 ml-4'
      >TravelTrills Contact</h1>

      </div>


<ContactInformation/>
<NewsLetter/>

    </div>
  )
}

export default page
