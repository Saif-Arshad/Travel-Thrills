import React from 'react'
import {ASSETS} from '../../../public/Assets'
import WhyUs from '@/components/template/about/WhyUs'
import BestPlaces from '@/components/template/home/subhome/BestPlaces'
import LatestBlog from '@/components/template/home/subhome/LatestBlog'
import AboutTravelTrills from '@/components/template/about/AboutTravelTrills'
import Slider from '@/components/template/about/carosalAbout/AboutCarousal'
import NewsLetter from '@/components/template/home/subhome/NewsLetter'
function page() {
  return (
    <div>
      <div
        className="h-[45vh] sm:h-[35vh] w-full flex  items-end "
        style={
          {
            backgroundImage:`url(${ASSETS.about_banner})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
          }
        }
      >
      </div>
      <Slider/>
<WhyUs/>
<BestPlaces/>
<AboutTravelTrills/>
<LatestBlog/>
<NewsLetter/>

    </div>
  )
}

export default page
