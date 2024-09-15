"use client"
import CartTotal from '@/Components/CartTotal'
import Title from '@/Components/Title'
import { assets } from '@/public/assets/frontend_assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {

    const [method, setMethod] = useState('cod');

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>
        {/* ------------------left side ------------------------- */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
            <div className='text-xl sm:text-2xl my-3'>
                <Title text1={'delivery'} text2={'informatin'}/>
            </div>
            <div className='flex gap-3'>
                <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type='text' placeholder='First name' />
                <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type='text' placeholder='Last name' />
            </div>
            <div>  
            <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type='email' placeholder='Email address' />
            </div>
            <div>  
            <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type='text' placeholder='Street' />
            </div>
            <div className='flex gap-3'>
                <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type='text' placeholder='City' />
                <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type='text' placeholder='State' />
            </div>
            <div className='flex gap-3'>
                <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type='number' placeholder='Zipcode' />
                <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type='text' placeholder='Country' />
            </div>
            <div>
            <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type='number' placeholder='Phone' />
            </div>
        </div>

        {/* -------------------------Right side---------------------- */}
        <div className='mt-8'>
            <div className='mt-8 min-w-80'>
                <CartTotal />
            </div>
            <div className='mt-12'>
                <Title text1={'payment'} text2={'methods'} />
                {/* ----------- payemnt methods ----------------- */}
                <div className='flex gap-3 flex-col lg:flex-row'>
                    <div  onClick={()=>setMethod('stripe')} className='flex items-center cursor-pointer px-3 p-2 gap-3 border'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ' '}`}></p>
                            <Image className='h-5 w-10 mx-4' src={assets.stripe_logo} />
                    </div>
                    <div  onClick={()=>setMethod('razorpay')} className='flex items-center cursor-pointer px-3 p-2 gap-3 border'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ' '}`}></p>
                            <Image className='h-5 w-24  mx-4' src={assets.razorpay_logo} />
                    </div>
                    <div  onClick={()=>setMethod('cod')} className='flex items-center cursor-pointer px-3 p-2 gap-3 border'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ' '}`}></p>
                            <p className='uppercase text-gray-500 text-sm font-medium mx-4'> Cash on delivery </p>
                    </div>

                </div>
                <div className='w-full text-end mt-10'>
                    <Link href='/orders' className='uppercase text-white bg-black px-16 py-3 text-sm'>
                    place order
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
