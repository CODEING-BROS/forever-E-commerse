'use client'
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Perform login or signup logic here
    // For demonstration, we'll just show a notification
    if (currentState === 'Login') {
      toast.success('You have successfully logged in!');
    } else {
      toast.success('You have successfully signed up!');
    }

    // You can also handle the actual authentication process here
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none bg-gray-800 w-8 h-[1.5px]' />
        </div>

        {currentState === 'Login' ? null : (
          <div className='w-full'>
            <label htmlFor='name' className='sr-only'>Name</label>
            <input
              id='name'
              required
              type='text'
              className='w-full px-3 py-2 border border-gray-800'
              placeholder='Name'
            />
          </div>
        )}

        <div className='w-full'>
          <label htmlFor='email' className='sr-only'>Email</label>
          <input
            id='email'
            required
            type='email'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Email'
          />
        </div>

        <div className='w-full'>
          <label htmlFor='password' className='sr-only'>Password</label>
          <input
            id='password'
            required
            type='password'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Password'
          />
        </div>

        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          {currentState === 'Login' && <p className='cursor-pointer'>Forgot your password?</p>}

          {currentState === 'Login'
            ? <p className='cursor-pointer' onClick={() => setCurrentState('Sign Up')}>Create account</p>
            : <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>Login Here</p>
          }
        </div>

        <button type='submit' className='bg-black text-white font-light mt-4 px-8 py-2'>
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </>
  );
}

export default Page;
