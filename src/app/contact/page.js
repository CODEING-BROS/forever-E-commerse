"use client"
import React from 'react'
import Title from '@/Components/Title'
import NewsLetterBox from '@/Components/NewsLetterBox'
import Image from 'next/image'
import { assets } from '@/public/assets/frontend_assets/assets'
const page = () => {
  return (
    <div>
      <div className='text-2xl text-center border-t pt-10'>
          <Title text1={"Contact"} text2={"us"} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mn-28 '>
        <Image
         src={assets.contact_img}
          className=' w-full md:max-w-[480px] ' 
        />
        <div className='flex flex-col items-start justify-center gap-6 '>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station <br/> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br/> Email: admin@forever.com</p>
          <p className='text-gray-600 font-semibold text-xl'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500  '>Explore Jobs</button>
        </div>

      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default page
