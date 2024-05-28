"use client"

import React from 'react'
import ContactUsForm from './ContactUsForm'
import Message from './Message';

function ContactInformation() {
  const messageFromStorage = localStorage.getItem("message");
  console.log(messageFromStorage)

    // const contactInform=[
    //     {
    //       "label": "Address",
    //       "value": "JL.Cindelaras No.205A"
    //     },
    //     {
    //       "label": "City",
    //       "value": "Pakistan, Punjab Lahore"
    //     },
    //     {
    //       "label": "Open",
    //       "value": "At 8 AM"
    //     },
    //     {
    //       "label": "Phone",
    //       "value": "+92 3491797803"
    //     },
    //     {
    //       "label": "Email",
    //       "value": "saifarshad3344@gmail.com"
    //     },
    //     {
    //       "label": "Close",
    //       "value": "At 8 PM"
    //     }
    //   ]
  return (
    <div className='w-full flex   justify-center'>
      
      <div className="w-11/12 flex flex-col lg:flex-row flex-wrap" >

        <div className='w-full lg:w-6/12 flex flex-col my-4'>

<ContactUsForm/>
            </div>
        <div className='w-full lg:w-6/12 flex items-center justify-start flex-col my-4'>


        <div className='w-11/12 flex justify-center items-center'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27237.71547953342!2d73.05411111083981!3d31.421993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268202828e7a3%3A0x958cba26935e6f45!2sRegency%20Travels!5e0!3m2!1sen!2s!4v1716810534465!5m2!1sen!2s" width="450" height="350" style={{border:"0",
          borderRadius:"10px",
        }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            {

messageFromStorage ? <Message/> : ""
}


            {/* <div className="w-full flex items-center justify-center">
      <div className='w-full flex flex-col mt-3 items-center justify-center'>
        {contactInform.map((item:any, index:any) => (
          <span key={index} className='flex w-full items-center gap-x-5 px-12 my-1'>
            <h3 className='font-semibold text-lg'>{item.label}:</h3>
            <span>{item.value}</span>
          </span>
        ))}
      </div>
    </div> */}


            </div>
      </div>

        

    </div>
  )
}

export default ContactInformation
