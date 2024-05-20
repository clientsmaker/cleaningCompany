import React from 'react';
import Navbar from '../Navbar';
import image from '../../assets/pestContorl.jpg';
import WhatsappButton from '../WhatsappButton';

const PestControl = () => {
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
        <h1 className="text-3xl font-medium mb-4 text-black">Pest Control Services</h1>
        <p className="text-lg leading-relaxed text-black">
          At Golden Water Tank Cleaning & Pest Control Services, we provide comprehensive pest control solutions to ensure your home or business is free from pests. Our expert team uses safe and effective methods to eliminate pests and prevent future infestations.
        </p>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Residential Pest Control
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Our residential pest control services are tailored to protect your home and family from unwanted pests. We offer:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4">
          <li>Effective treatments for common household pests such as ants, cockroaches, spiders, and rodents</li>
          <li>Safe and eco-friendly pest control solutions</li>
          <li>Preventive measures to keep pests out of your home</li>
          <li>Regular inspections and maintenance plans</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Commercial Pest Control
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Our commercial pest control services are designed to protect your business and maintain a pest-free environment. We offer:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4">
          <li>Customized pest management plans tailored to your business needs</li>
          <li>Discreet and efficient treatments to minimize business disruption</li>
          <li>Compliance with industry standards and regulations</li>
          <li>Ongoing monitoring and reporting</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Why Choose Us?
        </h3>
        <p className="text-lg leading-relaxed text-black">
          With our experience and dedication to customer satisfaction, Golden Water Tank Cleaning & Pest Control Services is your trusted partner in pest management. We ensure the health and safety of your family, employees, and customers by delivering effective pest control solutions.
        </p>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Contact Us
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Protect your home or business from pests today. Contact Golden Water Tank Cleaning & Pest Control Services to schedule your pest control service and experience the difference of professional pest management.
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
export default PestControl