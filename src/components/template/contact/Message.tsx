"use client"

import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { toast } from "sonner"

function Message() {
  const messageFromStorage = localStorage.getItem("message");

  let parseMessage;
  if (messageFromStorage) {
    try {
      parseMessage = JSON.parse(messageFromStorage);
    } catch (error) {
      console.error("Error parsing message from localStorage:", error);
    }
  }
  console.log(parseMessage)
  const deleteMessage = ()=>{
    const option = confirm("Ary you really want to delete message")
    if(option){
      localStorage.removeItem("message")
      toast("Message deleted Sucessfully")
      window.location.reload()
    }
    else{
      toast("Message not deleted")

    }
  }
  
    return (
    <div className="w-full flex">
      <div className='w-11/12 pl-8'>
        <h1 className="text-center my-4  text-4xl font-bold ">Your Messages</h1>
        <div className="flex justify-around items-center">
      <p>This message only visible to you</p>
<button  onClick={deleteMessage}>
<AiFillDelete size={25} color='red' />
</button>
      </div>  
      <h1 className="mt-2 capatlize text-3xl font-bold">{parseMessage.name}</h1>
      <p className="mb-2 text-sm">{parseMessage.email}</p>
      
      <p 
      className='text-lg'
      >{parseMessage.message}</p>


      </div>  
    </div>
  )
}

export default Message
