import React from 'react'

function PopularDestinations(props:any) {
    const country = props.destination; 
    console.log(country)
  return (
    <div className="w-11/12 flex flex-col mt-60 sm:mt-40 md:mt-28">
        <h1 className='font-bold text-3xl'>
            i am popular destinations

        </h1>
    </div>
  )
}

export default PopularDestinations
