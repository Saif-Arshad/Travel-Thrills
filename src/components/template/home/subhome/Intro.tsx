import React from 'react'
import {ASSETS} from '../../../../../public/Assets'


function Intro() {
  return (
    <div className='w-full'>
        <div  className='flex  relative flex-col'>
            <video className='h-[75vh]  w-screen object-cover' src={ASSETS.video} autoPlay loop muted></video> 
            <div className='w-full absolute -bottom-5 flex items-center justify-center '>
                    <div className=' bg-slate-50 w-full  md:w-9/12'>
                      <form >
            <input type="text" placeholder='Destination' />
            <input type="number" placeholder='Members' />
            <input type="date"  />
          <button type='submit'>Search Hello0 World</button>
          </form>

                    </div>
                </div>
            </div>
           
           
    </div>
  )
}

export default Intro
