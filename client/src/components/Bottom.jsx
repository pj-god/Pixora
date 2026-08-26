import React from 'react'
import { assets } from '../assets/assets'

const Bottom = () => {
    return (
        <div>
            <h1 className='text-center mb-5 sm:mb-8 text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-2 md:py-8'>Wanna See Magic ? Try Now</h1>
            <div className='mt-8 text-center mb-24'>
                <input type='file' name='' id='upload2' hidden />
                <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-linear-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor='upload2'>
                    <img width={20} src={assets.upload_btn_icon} />
                    <p className='text-white font-medium'>Upload Your Image</p>
                </label>
            </div>
        </div>
    )
}

export default Bottom
