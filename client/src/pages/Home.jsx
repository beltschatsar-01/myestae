import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col gap-12 p-28 px-3 max-w-7xl mx-auto bg-gray-200 shadow-lg rounded-md'>
        <h1 className='text-center text-slate-400 font-bold text-4xl md:text-6xl lg:text-7xl'>
          Discover Your Dream Home with{' '}
          <span className='text-slate-700'> My Dream Estate</span>
        </h1>
        <p className='text-gray-600 text-lg sm:text-xl'>
          Welcome to My Dream Estate, where your journey to finding the perfect
          home begins. We believe in making the process seamless and enjoyable,
          ensuring you find a place that truly feels like home.
        </p>
        <div className='flex items-center'>
          <div className='mr-4'>
            <img
              src='https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlYW1ob21lfGVufDB8fDB8fHww'
              alt='Dream Home Illustration'
              className='w-40 h-40 md:w-64 md:h-64 object-cover rounded-md shadow-lg'
            />
          </div>
          <p className='text-gray-600 text-lg sm:text-xl'>
            Whether you are looking for a cozy apartment, a family house, or a
            modern condominium, My Dream Estate offers a diverse range of
            properties. Our curated listings are designed to match your unique
            preferences and lifestyle.
          </p>
        </div>
        <p className='text-gray-600 text-lg sm:text-xl'>
          Take advantage of our advanced search features to narrow down your
          options. From specific neighborhoods to desired amenities, we've got
          you covered. Your dream home is just a few clicks away.
        </p>
        <Link
          to='/search'
        >
          <button
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            Advanced search
          </button>
        </Link>

      </div>
    </div>
  );
};

