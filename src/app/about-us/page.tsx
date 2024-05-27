import React from 'react'
import {ASSETS} from '../../../public/Assets'
import WhyUs from '@/components/template/about/WhyUs'
import BestPlaces from '@/components/template/home/subhome/BestPlaces'
import LatestBlog from '@/components/template/home/subhome/LatestBlog'

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
<WhyUs/>
<BestPlaces/>
<LatestBlog/>

    </div>
  )
}

export default page
