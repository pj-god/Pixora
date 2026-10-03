import {Webhook} from 'svix'
import userModel from '../models/user.model.js'
import razorpay from 'razorpay'
import transactionModel from '../models/transaction.model.js'

const clerkWebhooks = async (req, res) => {
    try{

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body), {
            "svix-id" : req.headers["svix-id"],
            "svix-timestamp" : req.headers["svix-timestamp"],
            "svix-signature" : req.headers["svix-signature"]
        })

        const {data,type} = req.body

        switch (type) {

            case "user.created": {

                const userData = {
                    clerkId : data.id,
                    email : data.email_addresses[0].email_address,
                    firstName : data.first_name,
                    lastName : data.last_name,
                    photo : data.image_url
                }

                await userModel.create(userData)

                res.json({})

                break;
            }

            case "user.updated": {

                const userData = {
                    email : data.email_addresses[0].email_address,
                    firstName : data.first_name,
                    lastName : data.last_name,
                    photo : data.image_url
                }

                await userModel.findOneAndUpdate({clerkId : data.id}, userData)

                res.json({})

                 break;
            }

            case "user.deleted": {

                await userModel.findOneAndDelete({clerkId : data.id})

                res.json({})

                 break;
            }  
        
            default:
                break;
        }

    } catch(error){

        console.log(error.message)
        res.json({
            success:false,
            message : error.message
        })

    }
}


const userCredits = async (req, res) => {

    try{

        const {clerkId} = req

        const userData = await userModel.findOne({clerkId})

        res.json({
            success : true,
            credits : userData.creditBalance
        })

    } catch(error){
        
        console.log(error.message)
        res.json({
            success:false,
            message : error.message
        })

    }

}

const razorpayInstance = new razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_KEY_SECRET,
})

const razorpayPayment = async (req,res) => {

    try{

        const {clerkId, planId} = req

        const userData = await userModel.findOne({clerkId})

        if(!userData || !planId){
            return res.json({
                success : false,
                message : 'Invalid credentials'
            })
        }

        let credits, plan, amount, date

        switch (planId) {
            case 'Plus':
                plan = 'Plus'
                credits = 100
                amount = 150
                break;

            case 'Pro':
                plan = 'Pro'
                credits = 500
                amount = 700
                break;
            
            case 'Max':
                plan = 'Max'
                credits = 2000
                amount = 2500
                break;
        
            default:
                break;
        }

        date = Date.now()

        const transactionData = {
            clerkId,
            plan,
            amount,
            credits,
            date
        }

        const newTransaction = await transactionModel.create(transactionData)

        const options = {
            amount : amount*100,
            currency : process.env.CURRENCY,
            receipt : newTransaction._id,
        }

        await razorpayInstance.orders.create(options, (error, order) => {
            if(error){
                return res.json({
                    success : false,
                    message : 'Error'
                })
            }

            res.json({
                success : true,
                order,
            })
        })



    } catch(error){
        
        console.log(error.message)
        res.json({
            success:false,
            message : error.message
        })

    }

}

export {clerkWebhooks, userCredits, razorpayPayment}