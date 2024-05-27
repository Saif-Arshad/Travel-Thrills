"use client"

import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function ContactUsForm() {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
  return (
    <div className="w-full flex flex-col flex-wrap">
        <h1 className="font-bold text-2xl md:text-4xl">
        Get in touch
        </h1>
        <p>
        Welcome to Travel Thrills, your ultimate gateway to the world’s most captivating destinations and unforgettable adventures. At Travel Thrills, we believe travel is more than just visiting new places; it&rsquo;s about experiencing the world in its most authentic and exhilarating forms. Whether you&rsquo;re a seasoned globetrotter or planning your first big adventure, we’re here to help you discover the wonders of our beautiful planet.

            </p>

<form >

<div>
    <label htmlFor="name">Name:</label>
<input type="text" name='name' id="name" />
</div>
<div>
    <label htmlFor="email">Email:</label>
<input type="email" name='email' id="email" />
</div>
<div>
    <label htmlFor="email">Email:</label>
<input type="email" name='email' id="email" />
</div>
<div>
    <label htmlFor="message">Message:</label>
    <textarea name="message" id="message"></textarea>
</div>

</form>

    </div>
  )
}

export default ContactUsForm
