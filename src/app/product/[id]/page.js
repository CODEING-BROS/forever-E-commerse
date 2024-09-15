"use client"
import { ShopContext } from '@/app/Context/Context';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { assets } from '@/public/assets/frontend_assets/assets';
import Descripton from '@/Components/Descripton';
import RelatedProducts from '@/Components/RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams();  // useParams will extract the dynamic `id`

  const policy = ["100% Original product.","Cash on delivery is available on this product.","Easy return and exchange policy within 7 days."];

  const {products,currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');


  const fetchProductData = async ()=>{

      products.map((item)=>{
        if (item._id === id) {
          setProductData(item)
          setImage(item.image[0])
          return null;
        }
      })
  }

  useEffect(() => {
    fetchProductData();
  }, [id]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
       {/* ------------------product data--------------- */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/*--------- product img--------------------- */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal  sm:w-[18.7%] w-full '>
                  {
                    productData.image.map((item,index)=>(
                      <Image onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0  cursor-pointer ' src={item} key={index}  />
                    ))
                  }
              </div>

              <div className='w-full sm:w-[80%]  '>
                  <Image className='w-full h-auto ' src={image} />
              </div>
            </div>
            {/*--------- product info---------------------  */}
            <div className='flex-1 '>
                  <h1 className='font-medium text-2xl mt-2 '>{productData.name}</h1>
                  <div className='flex items-center gap-1 mt02'>
                    <Image src={assets.star_icon}  className='w-3 5' />
                    <Image src={assets.star_icon}  className='w-3 5' />
                    <Image src={assets.star_icon}  className='w-3 5' />
                    <Image src={assets.star_icon}  className='w-3 5' />
                    <Image src={assets.star_dull_icon} className='w-3 5'  />
                    <p className='pl-2'>(122)</p>
                  </div>
                  <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
                  <p className='w-4/5 text-gray-500 mt-5'>{productData.description}</p>
                  <div className='flex flex-col gap-4 my-6'>
                    <p>Select Size</p>
                    <div className='flex gap-2'>
                      {productData.sizes.map((item,index) =>(
                         <button
                         onClick={() => setSize(item)}
                         className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                         key={index}
                         >  
                         {item}
                       </button>
                      ))}
                    </div>
                  </div>
                  <button 
                  onClick={()=>addToCart(productData._id,size)}
                  className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 uppercase'
                  >Add to cart
                  </button>
                  <hr className='mt-8 sm:w-4/5'/>
                  <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                      {
                        policy.map((item,index)=>(
                          <p key={index}>{item}</p>
                        ))
                      }
                  </div>
            </div>
        </div>

                      {/* ---------description and review -------------*/}
        <Descripton/>

                {/* ----------related products -------------- */}
        <RelatedProducts subCategory={productData.subCategory} category={productData.category}  />


    </div>
  ) : <div className='opacity-0'></div>
  
};

export default ProductDetail;
