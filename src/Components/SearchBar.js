"use client"
import { ShopContext } from '@/app/Context/Context';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/public/assets/frontend_assets/assets';
import { usePathname } from 'next/navigation';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const pathname = usePathname(); 
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(pathname.includes('collection'));
    }, [pathname]); 

    if (!showSearch || !visible) return null; // Short-circuit rendering

    return (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm'
                    type='text'
                    placeholder='Search'
                />
                <Image className='w-4' src={assets.search_icon} alt="Search Icon" />
            </div>
            <Image 
                onClick={() => setShowSearch(false)}
                className='inline w-3 cursor-pointer'
                src={assets.cross_icon}
                alt="Close Icon"
            />
        </div>
    );
}

export default SearchBar;
