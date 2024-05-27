import React from 'react'
import './slider.scss'
import {ASSETS } from '../../../../../public/Assets'

export default function Slider() {
  return (
    <div  className="min-h-screen overflow-x-hidden flex items-center justify-center py-[80px]">
  <span className="parallax-text" text="TRAVELIA">TRAVELIA</span>
  <img id='homepageimg' src={ASSETS.airplan} alt="Nike Sneaker" />
</div>

  )
}