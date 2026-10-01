import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { appContext } from '../context/AppContext'

const Header = () => {
    const {removeBg} = useContext(appContext)
  return (
    <div id='home' className='pt-30 flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        <div>
            <h1 className='text-5xl font-bold text-gray-800 font-["Times New Roman"] leading-tight'>Remove the</h1>
            <h1 className='text-5xl font-bold text-gray-800 font-["Times New Roman"] leading-relaxed'><span className="text-6xl bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">background</span> from</h1>
            <h1 className='text-5xl font-bold text-gray-800 font-["Times New Roman"] '>images for free</h1>
            <p className='text-gray-500 mt-8 font-semibold'>Remove unwanted backgrounds in seconds. Upload your image <br className='max-sm:hidden'/>and let Pixora do the magic — fast, clean, and effortless.</p>
            <div className='mt-8'>
                <input onChange={e => removeBg(e.target.files[0])} type='file' accept='image/*' id='upload1' hidden/>
                <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-linear-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor='upload1'>
                    <img width={20} src={assets.upload_btn_icon}/>
                    <p className='text-white font-medium'>Upload Your Image</p>
                </label>
            </div>
        </div>
        <div>
            <img src={assets.header_img} alt="Remove" className="w-120 h-120  object-contain"/>
        </div>
    </div>
  )
}

export default Header
