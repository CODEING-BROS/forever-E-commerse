"use client"
import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import Title from '@/Components/Title';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  const {products , currency} = useContext(ShopContext);
  return (
    <div className='border-t pt-16 '>
      <div className='text-2xl '>
          <Title text1={'my'} text2={'orders'} />
      </div>
      <div className=''>
          {
            products.slice(1,5).map((item,index)=>(
                <div key={index}
                  className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                    <div className='text-sm flex items-start gap-6'>
                        <Image className='w-16 sm:w-20 ' src={item.image[0]} />
                        <div >
                            <p className='font-medium sm:text-base'>{item.name}</p>
                            <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                <p className='text-lg'>{currency}{item.price}</p>
                                <p>Quantity : 1</p>
                                <p>Size : XL</p>
                            </div>
                            <p>Date : <span className='text-gray-400'>31 ,May , 2024</span></p>
                        </div>
                    </div>

                    <div className='md:w-1/2 justify-between flex'>
                          <div className='flex items-center gap-4'>
                              <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                              <p className='text-sm md:text-base'>Ready to ship</p>
                          </div>
                          <Link href='/' className='border px-4 text-sm py-2 font-medium rounded-sm'>
                                Track Order
                          </Link>
                    </div>
                </div>
            ))
          }
      </div>
    </div>
  )
}

export default page
