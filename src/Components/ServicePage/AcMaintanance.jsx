import React from 'react';
import Navbar from '../Navbar';
import image from '../../assets/acmech.jpg';
import WhatsappButton from '../WhatsappButton';
import Footer from '../Footer';

const AcMaintanance = () => {
    return (
        <>
          <Navbar />
          <section className="text-black bg-white">
  <div className="container px-4 py-24 mx-auto">
    <div className="lg:flex">
      <div className="lg:w-1/2 lg:h-auto h-72 mb-8 lg:mb-0">
        <img alt="service-image" src={image} className="w-full h-full object-cover rounded" />
      </div>
      <div className="lg:w-1/2 lg:pl-8">
        <h1 className="text-3xl font-bold mb-4 text-black pt-20">AC Maintenance</h1>
        <p className="text-lg leading-relaxed text-black font-medium">
          At Golden Water Tank Cleaning & Pest Control Services, we understand the importance of a well-maintained air conditioning system for your comfort and health. Our expert team provides comprehensive AC maintenance services to ensure your system runs efficiently and reliably, keeping your environment cool and comfortable.
        </p>

        <h3 className="text-xl font-bold leading-relaxed text-black ">
          Why Choose Us for AC Maintenance?
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Expert Technicians: Our team of skilled technicians is trained to handle all types of AC units. We use the latest tools and techniques to provide the best service possible.<br />
          Preventive Maintenance: Regular maintenance helps prevent unexpected breakdowns and extends the lifespan of your AC unit. We offer thorough inspections and tune-ups to keep your system in top condition.<br />
          Energy Efficiency: A well-maintained AC unit runs more efficiently, saving you money on energy bills. Our services ensure your system operates at peak performance.<br />
          Improved Air Quality: Clean and well-maintained AC systems improve indoor air quality by reducing dust, allergens, and pollutants. We clean and replace filters to ensure a healthy environment.<br />
          Customer Satisfaction: Your satisfaction is our priority. We provide reliable and prompt service, ensuring your AC system is always ready to keep you cool.
        </p>

        <h3 className="text-xl font-bold leading-relaxed text-black">
          Let's Get Started!
        </h3>
        <p className="text-lg leading-relaxed text-black font-medium">
          Ready to experience the benefits of professional AC maintenance? Contact us today to schedule your service. Whether you need routine maintenance or emergency repairs, Golden Water Tank Cleaning & Pest Control Services is here to help you stay comfortable all year round.<br />
          <br />
          At <span className="font-extrabold">Golden Water Tank Cleaning & Pest Control Services</span>, we ensure your AC system is in excellent hands.
        </p>
      </div>
    </div>
  </div>
</section>
          {/* <Footer /> */}
          <WhatsappButton />
          <Footer />
        </>
      );
    };

export default AcMaintanance