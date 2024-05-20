import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import WhatsappButton from '../Components/WhatsappButton';
import ServiceCard1 from '../Components/Card/ServiceCard1';
import ServiceCard2 from '../Components/Card/ServiceCard2';
import ServiceCard3 from '../Components/Card/ServiceCard3';
import ServiceCard4 from '../Components/Card/ServiceCard4';

const Services = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services = [
    '',
    'Google Ads',
    'Web Application',
    'SEO',
    'Meta Ads',
    'E Commerce Listing'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
<>
<div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-start ">
        <div className="p-6 text-white flex flex-col items-center md:flex-row justify-center md:justify-start">
          <h3 className="text-xl md:text-2xl lg:text-4xl text-center md:text-left jerking-effect">
            {/* <strong className='text-white'>Our Services:</strong><br/> */}
            <p className=" text-gray-500  mt-32 sm:mt-20">
            Your one-stop solution for a cleaner, safer home. From crystal-clear water tanks to effective pest control and reliable home maintenance, we ensure your home is always at its best.
</p>
          </h3>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-gray-400 mb-4 mt-8 text-center jerking-effect">
        Some of Our Services
      </h1>

     
        <ServiceCard1 />
        <ServiceCard2 />
        <ServiceCard3 />
        <ServiceCard4 />
     

      <WhatsappButton />
      </div>
      </>
  );
};

export default Services;
