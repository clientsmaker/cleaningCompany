import React from "react";
import Navbar from "../Components/Navbar";
import WhatsappButton from "../Components/WhatsappButton";
import backgroundImage from "../assets/abt.jpg";
import waterTankImage from "../assets/water1.jpg";
import pestControlImage2 from "../assets/pest1.jpg";
import pestControlImage from "../assets/pest2.jpg";
import homeServiceImage from "../assets/carpetclean.jpg";
import homeServiceImage1 from "../assets/homeclean.jpg";

import watertank2 from "../assets/watertank2.jpeg";
import Footer from "../Components/Footer";

const About = () => {
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
            <h3 className="text-4xl font-bold mb-4">About</h3>
            <p className="text-lg">
             Our Vision is Clean Spaces,Happy Faces
            </p>
          </div>
        </div>
      </div>

        <div className="bg-gray-100 p-8 text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg mb-8 leading-relaxed font-medium">
            Welcome to Golden Cleaning Service, a premier home maintenance and
            cleaning company proudly serving our community. We specialize in
            providing top-tier services that ensure your living and working
            spaces are immaculate, safe, and comfortable. We are your trusted
            partner for comprehensive home services. We specialize in water tank
            cleaning, pest control, and a wide range of other home maintenance
            solutions to ensure your living environment is clean, safe, and
            comfortable. At Golden Cleaning Service, our mission is to provide
            top-quality cleaning and maintenance services that exceed our
            clients' expectations. We are committed to delivering exceptional
            results through meticulous attention to detail, cutting-edge
            techniques, and a dedicated team of professionals. At Golden
            Cleaning Service, we understand the importance of a clean and
            healthy environment. That’s why we offer a comprehensive range of
            services designed to meet your specific needs and exceed your
            expectations. Whether you require thorough water tank cleaning,
            effective pest control, or a variety of home maintenance solutions,
            we have the expertise and dedication to deliver exceptional results.
          </p>

          <div className="flex flex-wrap mb-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <p className="font-bold">Water Tank Cleaning:</p>
              <p className="font-medium">
                Ensure the purity and safety of your water supply with our thorough water tank cleaning services. We use advanced equipment and eco-friendly solutions to clean and sanitize your water tanks.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-full md:w-1/2 p-2">
                <img src={waterTankImage} alt="Water Tank Cleaning" className="rounded-lg h-44" />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <img src={watertank2} alt="Water Tank Cleaning" className="rounded-lg h-44" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <p className="font-bold">Pest Control:</p>
              <p className="font-medium">
                Protect your home from unwanted pests with our effective pest control services. Our experienced technicians use safe and efficient methods to eliminate pests and prevent future infestations.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-full md:w-1/2 p-2">
                <img src={pestControlImage} alt="Pest Control" className="rounded-lg h-44" />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <img src={pestControlImage2} alt="Pest Control" className="rounded-lg h-44" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <p className="font-bold">Home Maintenance:</p>
              <p className="font-medium">
                From deep cleaning to routine upkeep, we offer a variety of home maintenance services tailored to your specific needs. Our goal is to keep your home in pristine condition, giving you more time to enjoy it.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-full md:w-1/2 p-2">
                <img src={homeServiceImage} alt="Home Maintenance" className="rounded-lg h-44" />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <img src={homeServiceImage1} alt="Home Maintenance" className="rounded-lg h-44" />
              </div>
            </div>
          </div>
        </div>
    <Footer />
    </>
  );
};

export default About;
