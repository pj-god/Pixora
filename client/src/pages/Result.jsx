import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { appContext } from '../context/AppContext'

const Result = () => {

  const {resultImage, image} = useContext(appContext)

  return (
    <div className='mx-4 my-3 lg:mx-44 mt-25 min-h-[74vh] flex items-center'>
      <div className='rounded-lg px-8 py-6 drop-shadow-md bg-white'>
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          <div>
            <p className='font-medium mb-2 text-xl'>Original Image</p>
            <img src={image ? URL.createObjectURL(image) : ''} className='rounded-md border' />
          </div>
          <div className='flex flex-col'>
            <p className='font-medium mb-2 text-xl'>Final Image</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              <img src={resultImage ? resultImage : ''} />
              {
                !resultImage && image &&  <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
              </div>
              }
            </div>
          </div>
        </div>
        {  resultImage && <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
          <button className='cursor-pointer px-8 py-2.5 font-medium text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>Try Another Image</button>
          <a href={resultImage} download className='px-8 py-2.5 text-white text-sm bg-linear-to-r font-medium from-violet-600 to-fuchsia-500 rounded-full cursor-pointer hover:scale-105 transition-all duration-700'>Download Image</a>
        </div>}
      </div>
    </div>
  )
}

export default Result
