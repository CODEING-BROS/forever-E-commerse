import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/assets/frontend_assets/assets'
const OurPolicy = () => {

    const policy = [
        {
            img : assets.exchange_icon,
            text1 : "Easy Exchange Policy",
            text2 : "We offer hassle free echange policy"
        },
        {
            img : assets.quality_icon,
            text1 : "7 Days Return Policy",
            text2 : "We provide 7 days free return policy"
        },
        {
            img : assets.support_img,
            text1 : "Best customer support",
            text2 : "we provide 24/7 customer support"
        },
    ]

    

  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20  text-xs sm:text-sm md:text-base text-gray-700 ' >
            {
                policy.map((item,index)=>(
                    <div key={index} >
                        <Image className='w-12 m-auto mb-5' src={item.img}/>
                        <p className='font-semibold'>{item.text1}</p>
                        <p className='text-gray-400'>{item.text2}</p>
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default OurPolicy
