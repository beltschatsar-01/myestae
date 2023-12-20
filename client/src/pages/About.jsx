import React from 'react'

export default function About() {
  return (
    <div className="flex justify-center flex-wrap max-w-7xl max-h-full mx-auto p-5 bg-white shadow-lg rounded-md">
      <h1 className="mt-6 text-center text-slate-700 text-3xl font-bold mb-4">Welcome to my Dream Estate</h1>

      <div className="flex flex-wrap md:flex-row items-center justify-center space-y-6 md:space-y-0 gap-4 my-7">

        <div className="md:w-1/2 mb-4 md:mb-0">
          <img 
            src='https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'
            alt="About myEstate" className="w-full h-auto rounded-md" />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed">
            At my Dream Estate, we believe that finding your dream home should be a seamless and enjoyable experience.
            Our mission is to simplify the real estate journey, providing you with the tools and information
            you need to make informed decisions about your property endeavors.
          </p>
          <p className="text-slate-700 text-lg mt-2">
            <span className="font-bold">Who We Are</span>
          </p>
          <p className="text-lg mt-2">
            Founded in 2023, my Dream Estate has quickly become a trusted name in the real estate industry.
            Our team is composed of passionate individuals dedicated to revolutionizing the way people
            buy, sell, and rent properties. We understand that a home is more than just a structure;
            it's where memories are made and dreams are realized.
          </p>
          <p className='text-slate-700 text-lg mt-2'>
            <strong >What Sets Us Apart</strong>
          </p>
          <p className='mt-2'>
            Unlike traditional real estate platforms, my Dream Estate is committed to combining cutting-edge technology
            with personalized service. Our user-friendly interface empowers you to explore listings with ease,
            while our team of experienced professionals is ready to provide expert guidance every step of the way.
          </p>
          <p className='text-slate-700 text-lg mt-2'>
            <strong>Our Services</strong>
          </p>
          <p className='mt-2'>
            Whether you are in search of a cozy apartment, a family home, or commercial space, myEstate has you covered.
            Our platform offers a diverse range of properties, and our comprehensive search filters ensure that you find
            the perfect match for your needs and preferences. From first-time buyers to seasoned investors, we cater to
            all levels of experience in the real estate market.
          </p>
          <p className='text-slate-700 text-lg mt-2'>
            <strong>Community Engagement</strong>
          </p>
          <p className='mt-2'>
            Beyond property transactions, myEstate is committed to building vibrant and connected communities.
            We actively engage with local initiatives and charities, contributing to the well-being and development
            of the neighborhoods we serve. We believe that a strong community enhances the overall quality of life,
            and we are proud to play a role in fostering that strength.
          </p>
          <p className='text-slate-700 text-lg mt-2'>
            <strong>Join Us on the Journey</strong>
          </p>
          <p className='mt-2'>
            Whether you are a prospective homebuyer, seller, or someone looking to join our team, we invite you to
            embark on this exciting journey with myEstate. Explore our platform, connect with our dedicated professionals,
            and discover the possibilities that await you in the world of real estate.
          </p>
        </div>
      </div>
    </div>
  );
}
