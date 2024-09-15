import React from 'react'
import Image from 'next/image';
import { assets } from '@/public/assets/frontend_assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      <div className='hero-left w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0 '>
        <div className='text-[#414141] '>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141] '></p>
                <p className='uppercase font-medium text-sm md:text-base  '>our best sellers</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed '>Latest Arrivals</h1> 
            <div className='flex items-center gap-2 '>
                <p className='font-semibold text-sm md:text-base uppercase'>Shop now</p>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>
        </div>
      </div>
      <div className='hero-right w-full sm:w-1/2 '>
        <Image src={assets.hero_img} className='w-full sm:w-1.2' />
      </div>
    </div>
  )
}

export default Hero
