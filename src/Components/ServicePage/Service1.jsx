import React from 'react';
import Navbar from '../Navbar';
import image from '../../assets/water1.jpg';
import WhatsappButton from '../WhatsappButton';

const Service1 = () => {
  return (
    <>
      <Navbar />
      <section className="text-black bg-white">
  <div className="container px-4 py-24 mx-auto">
    <div className="lg:flex">
      <div className="lg:w-1/2 lg:h-auto h-72 mb-8 lg:mb-0">
        <img alt="service-image" src={image} className="w-full h-full object-auto rounded" />
      </div>
      <div className="lg:w-1/2 lg:pl-8">
        <h1 className="text-3xl font-bold mb-4 text-black pt-20">Water Tank Cleaning Services</h1>
        <p className="text-lg leading-relaxed text-black font-medium">
          At Golden Water Tank Cleaning & Pest Control Services, we specialize in professional water tank cleaning services to ensure clean and safe water for your home or business.
        </p>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Comprehensive Cleaning Process
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Our water tank cleaning services include:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4 font-medium">
          <li>Removal of sludge, sediment, and contaminants from the tank</li>
          <li>Thorough cleaning of the tank interior and exterior</li>
          <li>Disinfection using safe and effective methods</li>
          <li>Inspection for leaks, cracks, or other issues</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Benefits of Clean Water Tanks
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Clean water tanks provide several benefits, including:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4 font-medium">
          <li>Safe and healthy drinking water</li>
          <li>Prevention of waterborne diseases</li>
          <li>Extended lifespan of your water tank</li>
          <li>Improved water quality for daily use</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Schedule Your Service
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Ensure clean and safe water for your home or business. Contact Golden Water Tank Cleaning & Pest Control Services to schedule your water tank cleaning service today.
        </p>
      </div>
    </div>
  </div>
</section>
<WhatsappButton />
      {/* <Footer /> */}
    </>
  );
};

export default Service1;
