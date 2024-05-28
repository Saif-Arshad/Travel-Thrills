"use client"

import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ASSETS} from '../../../../../public/Assets'
import { BsPersonFill } from "react-icons/bs";
import { ImLocation } from 'react-icons/im';
import { IoSearch } from "react-icons/io5";
import { DatePickerWithRange } from '../../shadcn/DatePicker';
import { Selector } from '../../shadcn/Selector';


function Intro() {
  const submitHandler = (e:any)=>{  
      e.preventDefault()
      alert("Hello World")
  }
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <div className='w-full'> 
        <div  className='flex  relative flex-col'>
            <video className='h-[90vh]  w-screen object-cover' src={ASSETS.video} autoPlay loop muted></video> 
            <div className='w-full absolute -bottom-56  sm:-bottom-20 lg:-bottom-10 flex items-center justify-center '>
                    <div className=' bg-white  shadow-lg  overflow-x-hidden rounded-lg p-4 py-5 w-11/12 lg:w-9/12 '>
                      <form onSubmit={submitHandler}  className='flex sm:flex-row items-baseline flex-col justify-center gap-y-4  flex-wrap '>

                      <div className="relative ">
                        <Selector/>
              {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none  text-gray-500">
                <ImLocation size={23} />
              </div>
              <input type="text"  id="voice-search" className=" text-gray-900  text-lg rounded-md outline-none hover:border-none hover:border-b border-blue-400 pl-10 p-2.5 " placeholder="City or Destination" /> */}
            </div>
                      <div className="relative ">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none  text-gray-500">
              <BsPersonFill size={25} />
              </div>
              <input type="number"  id="voice-search" className=" text-gray-900  text-lg rounded-md outline-none hover:border-none hover:border-b border-blue-400 pl-10 p-2.5 " placeholder="Persons" />
            </div>
                      <div className="relative sm:px-2 ">
             
    <DatePickerWithRange />
            </div>
            {/* <div className="relative ">
             <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none  text-gray-500">
              <MdAttachMoney size={25} />
              </div>
              <input type="number"  id="voice-search" className=" text-gray-900  text-lg rounded-md outline-none hover:border-none hover:border-b border-blue-400 pl-10 p-2.5 " placeholder="Budget Range" />
            </div>  */}
            <div className="relative ">
          <button type='submit' className="flex flex-row capitalize items-center bg-[#43B97F] p-2 text-white rounded-lg  justify-center">
          <IoSearch  size={23}/>
            Find trip now</button>

                        </div>
       
          </form>

                    </div>
                </div>
            </div>
           
           
    </div>
  )
}

export default Intro
