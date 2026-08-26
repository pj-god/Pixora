import React from 'react'
import { assets } from '../assets/assets'
import Header from '../components/Header'
import Howitworks from '../components/Howitworks'
import Transform from '../components/Transform'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Header/>
      <Howitworks/>
      <Transform/>
      <Testimonials/>
    </div>
  )
}

export default Home
