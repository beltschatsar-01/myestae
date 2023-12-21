import React from 'react';

export default function CreateListing() {
  return (
    <main className="flex justify-center flex-wrap max-w-7xl max-h-full mx-auto p-5 bg-gray-200 shadow-lg rounded-md">
      <h1 className="mt-6 text-center text-slate-700 text-3xl font-semibold mb-4 w-full">
        Create a Listing
      </h1>
      <div className="flex flex-wrap md:flex-row items-center justify-center space-y-6 md:space-y-0 gap-4 my-7">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyZWF0ZSUyMGxpc3Rpbmd8ZW58MHx8MHx8fDA%3D"
            alt="About myEstate"
            className="w-full h-auto rounded-md"
          />
        </div>
        <form className='flex flex-col sm:flex-row gap-4 md:w-1/2'>
          <div className='flex flex-col gap-4 flex-1'>
            <input
              type='text'
              placeholder='Name'
              className='border p-3 rounded-lg'
              id='name'
              maxLength='62'
              minLength='10'
              required
            />
            <textarea
              type='text'
              placeholder='Description'
              className='border p-3 rounded-lg'
              id='description'
              required
            />
            <input
              type='text'
              placeholder='Address'
              className='border p-3 rounded-lg'
              id='address'
              required
            />
            <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='sale'
                className='w-5'
              />
              <span>Sell</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='rent'
                className='w-5'
              />
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='parking'
                className='w-5'
              />
              <span>Parking spot</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='furnished'
                className='w-5'
              />
              <span>Furnished</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='offer'
                className='w-5'
              />
              <span>Offer</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
              <input
                type='number'
                id='bathrooms'
                min='1'
                max='10'
                required
                className='p-3 border border-gray-300 rounded-lg'
              />
              <p>Baths</p>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='regularPrice'
                min='50'
                max='10000000'
                required
                className='p-3 border border-gray-300 rounded-lg'
              />
              <div className='flex flex-col items-center'>
                <p>Regular price</p>
                {'rent' && (
                  <span className='text-xs'>($ / month)</span>
                )}
              </div>
            </div>
          </div>
          <div className='flex flex-col flex-1 gap-4'>
            <p className='font-semibold'>
              Images:
              <span className='font-normal text-gray-600 ml-2'>
                The first image will be the cover (max 6)
              </span>
            </p>
            <div className='flex gap-4'>
              <input
                className='p-3 border border-gray-300 rounded w-full'
                type='file'
                id='images'
                accept='image/*'
                multiple
              />
              <button
                type='button'
                className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
              >
                Upload
              </button>
            </div>
            <p className='text-red-700 text-sm'>
              {/* Error message goes here */}
            </p>
            <button
              className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
            >
              Create Listing
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
