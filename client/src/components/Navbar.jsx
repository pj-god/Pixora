import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/react'
import { useContext } from 'react'
import { appContext } from '../context/AppContext'

const Navbar = () => {

  const { openSignIn } = useClerk()

  const { isSignedIn, user } = useUser()

  const {credit, loadCreditsData} = useContext(appContext)

  useEffect(() => {
    if(isSignedIn){
      loadCreditsData()
    }
  }, [isSignedIn])

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3"><img src={assets.logo_icon} alt="Pixora" className="w-30 h-30  object-contain" /></a>
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            <a href="#home" className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 py-2" >Home</a>
            <a href="#how-it-works" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200">How it works</a>
            <a href="#features" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200">Features</a>
            <a href="#testimonials" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200">Testimonials</a>
            <Link to="/pricing" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"> Pricing</Link>
          </div>
          {
            isSignedIn
              ? <div className='flex items-center gap-2 sm:gap-3'> 
                <button className='flex items-center gap-2 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full bg-[#f9f5f5]'>
                  <img className='w-7' src={assets.credit_icon} />
                  <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits : {credit}</p>
                </button>
                <p className='text-gray-800 max-sm:hidden'>Hi, {user.firstName}</p>
                <UserButton />
              </div>
              : <Link className="hidden md:flex items-center gap-2 sm:gap-3 bg-gray-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md">
                <span onClick={() => openSignIn({})}>Get started</span>
                <span className="text-xl leading-none">→</span>
              </Link>
          }
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-3 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              <a href="#home" onClick={closeMenu} className="px-4 py-3 rounded-xl text-gray-700 hover:text-white hover:font-semibold hover:bg-blue-400 transition-colors">Home</a>
              <a href="#how-it-works" onClick={closeMenu} className="px-4 py-3 rounded-xl text-gray-700 hover:text-white hover:font-semibold hover:bg-blue-400 transition-colors">How it works</a>
              <a href="#features" onClick={closeMenu} className="px-4 py-3 rounded-xl text-gray-700 hover:text-white hover:font-semibold hover:bg-blue-400 transition-colors">Features</a>
              <a href="#testimonials" onClick={closeMenu} className="px-4 py-3 rounded-xl text-gray-700 hover:text-white hover:font-semibold hover:bg-blue-400 transition-colors">Testimonials</a>
              <Link to="/pricing" onClick={closeMenu} className="px-4 py-3 rounded-xl text-gray-700 hover:text-white hover:font-semibold hover:bg-blue-400 transition-colors">Pricing</Link>
              <Link to="/get-started" onClick={closeMenu} className="mt-2 flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">Get started
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar