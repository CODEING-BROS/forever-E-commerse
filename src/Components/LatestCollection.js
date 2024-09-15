"use client"
import { ShopContext } from '@/app/Context/Context'
import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import ProductItem from './Product-Item';

const LatestCollection = () => {
    
    const { products } = useContext(ShopContext)
    const [latestProducts , setLatestProducts] = useState([]);
    
    useEffect(() => {
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]);

    return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Collections'}/> 
            <p className='w-3/4 m-auto text-xs md:text-base sm:text-sm text-gray-600'>
            Check out our latest trending collections below.
            </p>
        </div>

        <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index}
                        id={item._id} 
                        image={item.image}
                        price={item.price}
                        name={item.name} 
                    />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
