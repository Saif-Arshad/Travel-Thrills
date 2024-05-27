import React from 'react'
import ContactUsForm from './ContactUsForm'

function ContactInformation() {
  return (
    <div className='w-full flex items-center justify-center'>
      
      <div className="w-11/12 flex flex-col lg:flex-row flex-wrap" >

        <div className='w-full lg:w-6/12 flex flex-col my-4'>

<ContactUsForm/>
            </div>
        <div className='w-full lg:w-6/12 flex flex-col my-4'>


            </div>
      </div>

    </div>
  )
}

export default ContactInformation
