import React from 'react'
import { assets } from '../assets/assets'
import Header from '../components/Header'
import Howitworks from '../components/Howitworks'
import Transform from '../components/Transform'
import Testimonials from '../components/Testimonials'
import Bottom from '../components/Bottom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Howitworks/>
      <Transform/>
      <Testimonials/>
      <Bottom/>
    </div>
  )
}

export default Home
