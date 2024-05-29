import React from 'react'
import {ASSETS} from '../../../../public/Assets'

import PopularDestinations from '@/components/template/planner//PopularDestinations';
import HeroSection from '@/components/template/heroSection/HeroSection';


function page({params}:any) {
    const {slug} = params
    console.log(slug)
  return (
    <>
    <HeroSection image={ASSETS.planner_banner} title={slug}/>
    <PopularDestinations destination={slug} />
    </>

  )
}

export default page
