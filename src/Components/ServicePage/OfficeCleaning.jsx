import React from 'react';
import Navbar from '../Navbar';
import image from '../../assets/officeclean.jpg';
import WhatsappButton from '../WhatsappButton';

const OfficeCleaning = () => {
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
        <h1 className="text-3xl font-medium mb-4 text-black">Office Cleaning Services</h1>
        <p className="text-lg leading-relaxed text-black">
          At Golden Water Tank Cleaning & Pest Control Services, we offer comprehensive office cleaning solutions to ensure your workplace is clean, hygienic, and comfortable for your employees and clients.
        </p>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Customized Cleaning Plans
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Our office cleaning services are tailored to meet the specific needs of your business. We provide:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4">
          <li>Regular cleaning schedules that fit your office hours</li>
          <li>Thorough cleaning of workstations, common areas, and restrooms</li>
          <li>Disinfection of high-touch surfaces to prevent the spread of germs</li>
          <li>Specialized cleaning services for conference rooms and reception areas</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Eco-Friendly Cleaning Products
        </h3>
        <p className="text-lg leading-relaxed text-black">
          We use safe and eco-friendly cleaning products that are effective against germs and safe for your employees and the environment.
        </p>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Professional and Reliable Service
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Our team of trained professionals ensures a high standard of cleanliness and hygiene in your office, helping to create a positive and productive work environment.
        </p>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Contact Us
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Ensure a clean and welcoming office environment for your employees and clients. Contact Golden Water Tank Cleaning & Pest Control Services to schedule your office cleaning service today.
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


export default OfficeCleaning