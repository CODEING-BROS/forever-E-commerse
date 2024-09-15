"use client";
import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '@/app/Context/Context';
import Title from './Title';
import ProductItem from './Product-Item';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]);  // Added dependency on products

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'Best'} text2={'sellers'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Check out our top 5 best-selling products!
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item) => (
                    <ProductItem 
                        key={item._id}  // Use item._id as the key
                        id={item._id} 
                        image={item.image}
                        price={item.price}
                        name={item.name} 
                    />
                ))}
            </div>
        </div>
    );
}

export default BestSeller;
