import React from 'react';
import Navbar from '../Navbar';
import image from '../../assets/puritycheck.jpg';
import WhatsappButton from '../WhatsappButton';
const PurityChecking = () => {
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
        <h1 className="text-3xl font-medium mb-4 text-black">Purity Checking</h1>
        <p className="text-lg leading-relaxed text-black">
          At Golden Water Tank Cleaning & Pest Control Services, we are committed to ensuring the highest standards of water quality for both drinking and recreational purposes. Our comprehensive purity checking services are designed to provide you with safe and clean water, whether it's for consumption or swimming.
        </p>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Drinking Water Purity Checking
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Our drinking water purity checking service involves detailed analysis and testing to ensure that your water is free from contaminants and safe for consumption. We employ advanced testing methods to detect impurities and provide solutions to maintain optimal water quality.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4">
          <li>Comprehensive water testing and analysis</li>
          <li>Detection of harmful bacteria and chemicals</li>
          <li>Recommendations for water purification and filtration systems</li>
          <li>Regular monitoring and maintenance services</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Swimming Pool Water Purity Checking
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Maintaining the purity of swimming pool water is essential for the health and safety of swimmers. Our swimming pool water purity checking service includes thorough testing and treatment to ensure your pool water is crystal clear and free of harmful substances.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4">
          <li>Comprehensive pool water testing and analysis</li>
          <li>Identification and removal of algae and bacteria</li>
          <li>Chemical balancing and treatment recommendations</li>
          <li>Regular maintenance and quality assurance</li>
        </ul>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Why Choose Us?
        </h3>
        <p className="text-lg leading-relaxed text-black">
          With our expert team and advanced technology, Golden Water Tank Cleaning & Pest Control Services ensures that your water quality meets the highest standards. Our commitment to excellence and customer satisfaction makes us the preferred choice for purity checking services.
        </p>
        
        <h3 className="text-xl font-bold leading-relaxed text-black">
          Contact Us
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Ensure the purity and safety of your water today. Contact Golden Water Tank Cleaning & Pest Control Services to schedule your water purity check and experience the difference of professional service.
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

export default PurityChecking