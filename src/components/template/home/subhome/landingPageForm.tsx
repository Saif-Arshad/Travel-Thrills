"use client"

import React ,{useState} from 'react'
import { IoSearch } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { DatePickerWithRange } from '../../shadcn/DatePicker';
import { Selector } from '../../shadcn/Selector';
import { useSelector} from "react-redux"
import { toast } from "sonner"
import { usePathname } from 'next/navigation';
export default function LandingPageForm() {
    const [loading,setloading] = useState(false)
    const router = useRouter()
    const currentPath = usePathname() 
    const {destination,days,dateTo,
        dateFrom} = useSelector((state:any)=>state.formData)
    console.log(destination,days,dateTo,dateFrom)
    const submitHandler = (e:any)=>{  
        e.preventDefault()
        if(!destination || !days || !dateTo || !dateFrom){
            toast("All fields are required")
            return
        }
        setloading(true)
        if(currentPath == '/'){
            router.push(`/trip-plan/${destination}`)
        }
    }
    

  return (
    <div className='w-full absolute -bottom-40  sm:-bottom-16 lg:-bottom-10 flex items-center justify-center '>
    <div className=' bg-white  shadow-lg  overflow-x-hidden rounded-lg  py-5 w-11/12 lg:w-7/12 '>
      <form onSubmit={submitHandler}  className='flex sm:flex-row items-baseline flex-col justify-center gap-y-4  flex-wrap '>

      <div className="relative ">
        <Selector/>

</div>
  
      <div className="relative ">

<DatePickerWithRange />
</div>

<div className="relative ">
<button type='submit' className="flex flex-row capitalize items-center bg-[#43B97F] p-2 text-white rounded-lg  justify-center">
<IoSearch  size={23}/>
 
{loading ? "Getting Data"
:'Find trip now'
}
</button>

        </div>

</form>

    </div>
</div>
  )
}
