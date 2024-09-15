"use client"
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/Context';
import Image from 'next/image';
import { assets } from '@/public/assets/frontend_assets/assets';
import Title from '@/Components/Title';
import ProductItem from '@/Components/Product-Item';

const Page = () => {

  const filterOptions = [
    {
      name: 'categories',
      types: ['Men', 'Women', 'Kids'],
    },
    {
      name: 'type',
      types: ['Topwear', 'Bottomwear', 'Winterwear'],
    },
  ];

  const { products ,search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType , setSortType] = useState('relavent');

  const toggleCategory = (e) =>{

    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev => [...prev,e.target.value]);
    }
  }

  const toggleSubCategory = (e) =>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item=> item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev,e.target.value]);
    }
  }

  

  const applyfilter = () =>{
    let productsCopy = products.slice();//copying products

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
      
    }
    setFilteredProducts(productsCopy);

  }

  const sortProduct = ()=>{
    let filterProductCopy = filteredProducts.slice();

    switch (sortType) {
      case 'low - high':
          setFilteredProducts(filterProductCopy.sort((a,b)=>(a.price - b.price)));
          break;
      case 'high - low':
          setFilteredProducts(filterProductCopy.sort((a,b) =>(b.price - a.price)));
          break;
      default:
          applyfilter();
          break;
    }
  }

  useEffect(() => {
    applyfilter();
  }, [category,subCategory,search,showSearch]);

  useEffect(() => {
     sortProduct();
  }, [sortType]);
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options - left side */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='uppercase my-2 text-xl flex items-center gap-2 cursor-pointer'
        >
          Filters
          <Image
            className={`h-3 w-[10px] sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="dropdown icon"
          />
        </p>

        {filterOptions.map((filterOption, index) => (
          <div
            key={index}
            className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}
          >
            <p className='mb-3 text-sm font-medium uppercase'>{filterOption.name}</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              {filterOption.types.map((type, idx) => (
                <p key={idx} className='flex gap-2'>
                  <input
                    className='w-3'
                    type='checkbox'
                    onChange={index == 0 ? toggleCategory : toggleSubCategory}
                    value={type}
                  />{''}
                  {type}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Product listing - right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'all'} text2={'collections'} />
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm  p-2 '>
            <option value='relavent'>Sort by: Relavent</option>
            <option value='low - high'>Sort by: Low to High</option>
            <option value='high - low'>Sort by: High to Low </option>
          </select>
        </div>

        {/* Display filtered products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductItem
                key={index}
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
