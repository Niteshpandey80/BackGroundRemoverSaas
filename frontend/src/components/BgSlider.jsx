import React from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {
  return (
    <div className=''>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Remove Background With High <br /> Quality and Accuracy</h1>
      <img className='mt-20 sm:ml-32 w-300 sm:w-300 ' src={assets.bg} alt="" />
    </div>
  )
}

export default BgSlider
