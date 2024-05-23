import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import homecard from "../assets/disintection.jpeg";
import homecard1 from "../assets/tank1.jpg";
import homecard2 from "../assets/swimmingpool.jpg";
import product1 from "../assets/dis.jpg";
import product2 from "../assets/pest1.jpg";
import product3 from "../assets/acmech.jpg";
import product4 from "../assets/homeclean.jpg";
import product5 from "../assets/ser6.jpg";
import product6 from "../assets/ser3.jpg";
import product7 from "../assets/ser4.jpg";
import product8 from "../assets/watertank2.jpeg";
import ProductCard from "../Components/Card/ProductCard";
import SectionCard2 from "../Components/Card/SectionCard2";
import Testimonials from "../Components/Testimonial/Testimonials";
import SectionCard4 from "../Components/Card/SectionCard4";
import Footer from "../Components/Footer";
import WhatsappButton from "../Components/WhatsappButton";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css"; // Add this line to import the CSS file

const Home = () => {
  const products = [
    {
      image: product5,
      description: "Water Tank Cleaning",
      path: "/watertank-cleaning",
    },
    { image: product2, description: "Pest Control", path: "/pest-control" },
    {
      image: product3,
      description: "AC Maintenance",
      path: "/aircondition-check",
    },
    {
      image: product4,
      description: "Home Maintenance",
      path: "/home-maintanance",
    },
    {
      image: product6,
      description: "Office Cleaning",
      path: "/office-maintanance",
    },
    {
      image: product1,
      description: "Disinfection and Sanitization",
      path: "/purity-checking",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [homecard, homecard1, homecard2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="relative h-screen flex items-center justify-center">
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  animation: "zoomEffect 6s ease-in-out infinite",
                }}
              />
            ))}
          </AnimatePresence>

          <div className="bg-black bg-opacity-50 p-8 rounded-md max-w-2xl text-center text-white z-10">
            <h3 className="text-4xl font-bold mb-4">
              "Your one-stop solution for a cleaner, safer home."
            </h3>
            <p className="text-lg">
              From crystal-clear water tanks to effective pest control and
              reliable home maintenance, we ensure your home is always at its
              best.
            </p>
          </div>
        </div>
      </div>
      <WhatsappButton />
      <SectionCard2 />
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-8 text-center">
        OUR SERVICES
      </h1>
      <div className="flex justify-center flex-wrap gap-8 mt-8">
        {products.map((product, index) => (
          <Link to={product.path} key={index}>
            <ProductCard
              image={product.image}
              description={product.description}
            />
          </Link>
        ))}
      </div>
      <h1 className="text-4xl font-bold text-black mb-4 mt-8 text-center">
        OUR VISION
      </h1>
      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-4 custom-shadow-bg-white">
            <img
              src={product7}
              alt="Installation"
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Health and Safety
            </h5>
            <p className="mb-3 font-semibold text-black">
              Your family's health is our top priority. Our thorough cleaning
              process ensures that your water remains free from contaminants,
              providing you with clean and safe water for drinking and everyday
              use.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-4 custom-shadow-bg-white">
            <img
              src={product8}
              alt="Pest Solutions"
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Improved Water Quality
            </h5>
            <p className="mb-3 font-semibold text-black">
              Experience an immediate improvement in water taste and odor. Our
              cleaning methods remove built-up sediments and bacteria, leaving
              you with water that meets the highest hygiene standards.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-4 custom-shadow-bg-white">
            <img
              src={product6}
              alt="Water Tank Cleaning"
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Prolonged Tank Life
            </h5>
            <p className="mb-3 font-semibold text-black">
             Regular tank cleaning not only ensures clean
              water but also extends the lifespan of your water storage system.
              This saves you money on costly replacements and repairs in the
              long run.
            </p>
          </div>
        </div>
      </div>
      <SectionCard4 />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
