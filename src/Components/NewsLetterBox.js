import React, { useState } from 'react';

const NewsLetterBox = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true); // Show a success message when the form is submitted
  };

  return (
    <div className='text-center py-10 bg-gray-50'>
      <p className='text-3xl font-bold text-gray-800'>Join Our Exclusive Community</p>
      <p className='text-xl text-gray-600 mt-3'>
        Subscribe now and <span className='text-black font-semibold'>unlock 20% off</span> your first order!
      </p>
      <p className='text-gray-500 mt-1'>Be the first to know about exciting deals, new arrivals, and insider exclusives.</p>

      {!submitted ? (
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center mx-auto gap-3 my-6 border pl-3 rounded-md'>
          <input className='w-full sm:flex-1 outline-none py-3 text-gray-700 placeholder-gray-400' type='email' placeholder='Enter your email address' required />
          <button className='uppercase bg-black text-white text-sm py-4 px-10 rounded-md hover:bg-gray-800 transition-colors duration-300' type='submit'>
            Subscribe
          </button>
        </form>
      ) : (
        <p className='text-green-500 mt-4'>Thank you for subscribing! Check your inbox for a confirmation.</p>
      )}

      <p className='text-gray-400 text-sm'>
        No spam, just updates on the best deals. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default NewsLetterBox;
