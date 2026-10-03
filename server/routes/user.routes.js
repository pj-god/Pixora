import express from 'express'
import { clerkWebhooks, razorpayPayment, userCredits } from '../controllers/user.controller.js'
import authUser from '../middlewares/auth.middleware.js'

const userRouter = express.Router()

userRouter.post('/webhooks', clerkWebhooks)
userRouter.get('/credits', authUser, userCredits)
userRouter.post('/pay-razor', authUser, razorpayPayment)

export default userRouter