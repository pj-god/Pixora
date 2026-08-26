import React from 'react'
import { assets } from '../assets/assets'

const Howitworks = () => {
  return (
    <div id='how-it-works' className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center py-1 text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove background<br/>image in seconds</h1>
      <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>
        <div className='flex items-start gap-4 bg-white border border-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.upload_icon}/>
            <div>
                <p className='text-xl font-medium'>Upload Image</p>
                <p className='text-sm text-neutral-500 mt-1.5 font-medium'>Choose an image from your device<br/>and upload it to Pixora</p>
            </div>
        </div>
        <div className='flex items-start gap-4 bg-white border border-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.remove_bg_icon}/>
            <div>
                <p className='text-xl font-medium'>Remove Background</p>
                <p className='text-sm text-neutral-500 mt-1.5 font-medium'>AI detects the subject and removes<br/>the background in seconds</p>
            </div>
        </div>
        <div className='flex items-start gap-4 bg-white border border-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.download_icon}/>
            <div>
                <p className='text-xl font-medium'>Download Image</p>
                <p className='text-sm text-neutral-500 mt-1.5 font-medium'>Preview the result & download your<br/>background-free image </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Howitworks
