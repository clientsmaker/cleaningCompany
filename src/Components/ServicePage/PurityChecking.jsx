import React from "react";
import Navbar from "../Navbar";
import image from "../../assets/dis.jpg";
import WhatsappButton from "../WhatsappButton";
import Footer from "../Footer";
const PurityChecking = () => {
  return (
    <>
      <Navbar />
      <section className="text-black bg-white">
        <div className="container px-4 py-24 mx-auto">
          <div className="lg:flex">
            <div className="lg:w-1/2 lg:h-auto h-72 mb-8 lg:mb-0">
              <img
                alt="service-image"
                src={image}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h1 className="text-3xl font-bold mb-4 text-black pt-20">
                Disinfection and Sanitization
              </h1>
              <p className="text-lg leading-relaxed text-black font-medium">
                At Golden Water Tank Cleaning & Pest Control Services, we
                prioritize your health and safety by offering top-notch
                disinfection and sanitization services. Our comprehensive
                solutions are designed to eliminate harmful pathogens, bacteria,
                and viruses from your environment, ensuring a clean and safe
                space for you and your loved ones.
              </p>

              <h3 className="text-xl font-bold leading-relaxed text-black">
                Residential Disinfection Services
              </h3>
              <p className="text-lg leading-relaxed text-black font-medium">
                Our residential disinfection services focus on creating a
                germ-free environment in your home. We use industry-approved
                disinfectants and techniques to sanitize high-touch surfaces,
                living areas, kitchens, bathrooms, and more.
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4 font-medium">
                <li>Comprehensive home disinfection</li>
                <li>Safe and effective disinfectants</li>
                <li>Targeted sanitization of high-touch areas</li>
                <li>One-time and regular disinfection plans available</li>
              </ul>

              <h3 className="text-xl font-bold leading-relaxed text-black ">
                Commercial Disinfection Services
              </h3>
              <p className="text-lg leading-relaxed text-black font-medium">
                Maintaining a clean and sanitized workplace is crucial for the
                health of your employees and customers. Our commercial
                disinfection services ensure your business environment is
                thoroughly disinfected and safe.
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-black mb-4 font-medium">
                <li>Office and workspace disinfection</li>
                <li>Retail and commercial space sanitization</li>
                <li>Healthcare facility disinfection</li>
                <li>Regular and one-time disinfection services</li>
              </ul>

              <h3 className="text-xl font-bold leading-relaxed text-black">
                Why Choose Us?
              </h3>
              <p className="text-lg leading-relaxed text-black font-medium">
                Our expert team at Golden Water Tank Cleaning & Pest Control
                Services is dedicated to providing the highest quality
                disinfection and sanitization services. We use advanced
                techniques and products to ensure effective and safe
                disinfection, giving you peace of mind.
              </p>

              <h3 className="text-xl font-bold leading-relaxed text-black">
                Contact Us
              </h3>
              <p className="text-lg leading-relaxed text-black font-medium">
                Protect your home and workplace with our professional
                disinfection and sanitization services. Contact Golden Water
                Tank Cleaning & Pest Control Services today to schedule a
                service and ensure a cleaner, safer environment.
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

export default PurityChecking;
