import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/assets/frontend_assets/assets'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' '>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <Link href="/" ><Image src={assets.logo} alt="Company Logo" className='mb-5 w-32' width={128} height={64} /></Link>
          <p className='w-full md:w-2/3 text-gray-600'>
            We are committed to providing top-notch services and ensuring customer satisfaction at all times. Contact us anytime for inquiries or support. We are here to help!
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 uppercase'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600 '>
            <li>
              <Link href="/" className="hover:text-blue-500 cursor-pointer">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 cursor-pointer">About Us</Link>
            </li>
            <li>
              <Link href="/delivery" className="hover:text-blue-500 cursor-pointer">Delivery</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-500 cursor-pointer">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 uppercase'>Get in Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>8941966505</li>
            <li>deepakcoder023@gmail.com</li>
            <li>
              <a href='https://www.instagram.com/coding.shaka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
                 target='_blank' 
                 rel='noopener noreferrer' 
                 className="hover:text-blue-500">Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ codewithstella - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
