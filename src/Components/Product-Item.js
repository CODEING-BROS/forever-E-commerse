import { ShopContext } from '@/app/Context/Context'
import Link from 'next/link';
import React, { useContext } from 'react'
import Image from 'next/image';

const ProductItem = ({id,name,image,price}) => {
  
    const {currency} = useContext(ShopContext);
  
    return (
    <Link className='text-gray-700 cursor-pointer  ' href={`/product/${id}`} passHref >
      <div className='overflow-hidden'> 
        <Image className='hover:scale-110 transition ease-in-out' src={image[0]} />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium '>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
