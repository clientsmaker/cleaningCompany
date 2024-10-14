import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import WhatsappButton from '../Components/WhatsappButton';
import ServiceCard1 from '../Components/Card/ServiceCard1';
import ServiceCard2 from '../Components/Card/ServiceCard2';
import ServiceCard3 from '../Components/Card/ServiceCard3';
import ServiceCard4 from '../Components/Card/ServiceCard4';
// import backgroundImage from '../../assets/Images/';
import backgroundImage from '../assets/disintection.jpeg';
import Footer from '../Components/Footer';
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
<Navbar />
      <div className="relative">
        <WhatsappButton />
        <div
          className="h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundColor: "#c6b069" }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-md max-w-2xl text-center text-white pt-20">
            <h3 className="text-4xl font-bold mb-4">Services</h3>
            <p className="text-lg font-medium">
              From crystal-clear water tanks to effective pest control and reliable home maintenance, we ensure your home is always at its best.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-400  mt-8 text-center jerking-effect">
        Some of Our Services
      </h1>

     
        <ServiceCard2 />
        <ServiceCard1 />
        <ServiceCard3 />
        <ServiceCard4 />
     

      <WhatsappButton />
  <Footer />
      </>
  );
};

export default Services;
