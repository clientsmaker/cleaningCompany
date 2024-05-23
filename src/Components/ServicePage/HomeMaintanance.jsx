import React from 'react';
import Navbar from '../Navbar';
import image from '../../assets/carpetclean.jpg';
import WhatsappButton from '../WhatsappButton';
import Footer from '../Footer';

const HomeMaintanance = () => {
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
        <h1 className="text-3xl font-medium mb-4 text-black pt-20">Home Maintenance, Cleaning, Plumbing, and Electrical Repairs</h1>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Home Maintenance Services
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Our home maintenance services are designed to keep your property in top condition. From routine inspections to repairs, we ensure that your home remains safe and comfortable.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4 font-medium">
          <li>General home inspections and maintenance</li>
          <li>Roof and gutter cleaning and repair</li>
          <li>Painting and wall repairs</li>
          <li>Seasonal maintenance services</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Home Cleaning Services
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Our home cleaning services ensure a clean and healthy living environment for you and your family. We offer comprehensive cleaning solutions tailored to your needs.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4 font-medium">
          <li>Regular and deep cleaning services</li>
          <li>Carpet and upholstery cleaning</li>
          <li>Kitchen and bathroom cleaning</li>
          <li>Window cleaning</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Plumbing Repairs
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Our plumbing repair services address a wide range of issues, ensuring your plumbing systems operate smoothly and efficiently.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4 font-medium">
          <li>Leak detection and repair</li>
          <li>Drain cleaning and unclogging</li>
          <li>Toilet, sink, and faucet repair</li>
          <li>Water heater repair and installation</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Electrical Repair
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Our electrical repair services ensure the safety and functionality of your electrical systems.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4 font-medium">
          <li>Electrical troubleshooting and repairs</li>
          <li>Lighting installation and repair</li>
          <li>Panel upgrades and circuit repairs</li>
          <li>Appliance wiring and installation</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Why Choose Us?
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          With our dedicated team and commitment to quality, Golden Water Tank Cleaning & Pest Control Services ensures your home maintenance, cleaning, plumbing, and electrical needs are met with professionalism and care.
        </p>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Contact Us
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Experience reliable home services today. Contact Golden Water Tank Cleaning & Pest Control Services to schedule your home maintenance, cleaning, plumbing, or electrical repair service.
        </p>
      </div>
    </div>
  </div>
</section>
<WhatsappButton />
          {/* <Footer /> */}
          <Footer />
        </>
      );
    };


export default HomeMaintanance