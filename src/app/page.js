"use client"
import React from 'react';
import Hero from '@/Components/Hero';
import LatestCollection from '@/Components/LatestCollection';
import BestSeller from '@/Components/BestSeller';
import OurPolicy from '@/Components/OurPolicy';
import NewsLetterBox from '@/Components/NewsLetterBox';

const Page = () => {
  return (
    <div className=''>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Page;
