import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <div className='flex items-center gap-2'>
            <img className='w-15 h-15' src={assets.upper_logo}/>
            <p className='font-bold text-3xl'>Pixora</p>
        </div>
        <p className='flex-1 border-l border-gray-400 pl-4 text-md font-semibold text-gray-500 max-sm:hidden'>Copyright @Pj_God | All rights reserved</p>
        <div className='flex gap-1'>
            <img width={40} src={assets.facebook_icon} />
            <img width={40} src={assets.twitter_icon} />
            <img width={40} src={assets.google_plus_icon} />
        </div>
    </div>
  )
}

export default Footer
