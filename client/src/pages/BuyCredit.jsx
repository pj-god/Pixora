import React, { useContext } from 'react'
import { assets,plans } from '../assets/assets'
import { appContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/react'
import { toast } from 'react-toastify'
import axios from 'axios'

const BuyCredit = () => {

  const {backendUrl, loadCreditsData} = useContext(appContext)

  const navigate = useNavigate()

  const {getToken} = useAuth()

  const initPay = async (order) => {
    const options = {
      key : import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount : order.amount,
      currency : order.currency,
      name : 'Credits Payment',
      description : 'Credits Payment for Pixora',
      order_id : order.id,
      receipt : order.receipt,
      handler : async (response) => {
        console.log(response)
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRzr = async (planId) => {
    try{

      const token = await getToken()
      const {data} = await axios.post(backendUrl + '/api/user/pay-razor', {planId}, {
        headers : {
          token
        }
      })

      if(data.success){
        initPay(data.order)
      }

    } catch(error){

      console.log(error)
      toast.error(error.message)

    }
  }

  return (
    <div className='min-h-[78vh] text-center pt-22 mb-15'>
      <button className='border border-violet-600 px-10 py-2 rounded-full mb-6 text-violet-600 mt-10'>Our Plans</button>
      <h1 className='text-center mb-6 sm:mb-10 py-1 text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Choose the plan that's right for you</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div className='bg-white drop-shadow-md border border-violet-600 rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500' key={index}>
             <img width={40} src={assets.upper_logo } />
             <p className='font-bold mt-3 text-4xl bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>{item.id}</p>
             <p className='text-sm'>{item.desc}</p>
             <p className='mt-6 mb-6'>
              <span className='text-2xl font-medium'>₹{item.price}</span>/{item.credits} credits
             </p>
             <button onClick={()=> paymentRzr(item.id)} className='w-full py-2.5 min-w-52 text-white bg-linear-to-r font-medium rounded-md from-violet-600 to-fuchsia-500 cursor-pointer'>Purchase Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
