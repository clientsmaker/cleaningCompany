import React from "react";
import Navbar from "../Components/Navbar";
import homecard from "../assets/disintection.jpeg";
import product1 from "../assets/aftercleanng.avif";
import product2 from "../assets/pest1.jpg";
import product3 from "../assets/acmech.jpg";
import product4 from "../assets/homeclean.jpg";
import product5 from "../assets/ser2.jpg";
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
const Home = () => {
  const products = [
    { image: product5, description: "Water Tank Cleaning",path: "/watertank-cleaning" },
    { image: product2, description: "Pest Control",path: "/pest-control" },
    { image: product1, description: "Purity Checking",path: "/purity-checking" },
    { image: product3, description: "AC Maintanance" ,path: "/aircondition-check" },
    { image: product4, description: "Home Maintenance",path:"/home-maintanance"},
    { image: product6, description: "Office Cleaning",path: "/office-maintanance"},
    // { image: product7, description: "Ice Cream Machine" },
    // { image: product8, description: "Dish Washer" },
  ];
  return (
    <>
      <div>
        <Navbar />
        <section
          className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homecard})` }}
        >
          <div className="absolute inset-0  sm:bg-transparent "></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Clean Spaces,
                <strong className="block font-extrabold text-rose-700">
                  Happy Faces.
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                Experience the ultimate in home cleanliness and comfort with
                Golden Cleaning Service. From water tank cleaning to pest
                control, we ensure your home shines.
              </p>

            </div>
          </div>
        </section>
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
              HOME MAINTENANCE
            </h5>
            <p className="mb-3 font-semibold text-black">
              From deep cleaning to routine upkeep, we offer a variety of home
              maintenance services tailored to your specific needs. Our goal is
              to keep your home in pristine condition, giving you more time to
              enjoy it
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-4 custom-shadow-bg-white">
            <img
              src={product8}
              alt="Pest Solutions"
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              PEST SOLUTIONS
            </h5>
            <p className="mb-3 font-semibold text-black">
              Protect your home from unwanted pests with our effective pest
              control services. Our experienced technicians use safe and
              efficient methods to eliminate pests and prevent future
              infestations.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-4 custom-shadow-bg-white">
            <img
              src={product6}
              alt="Water Tank Cleaning"
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              WATER TANK CLEANING
            </h5>
            <p className="mb-3 font-semibold text-black">
              Ensure the purity and safety of your water supply with our
              thorough water tank cleaning services. We use advanced equipment
              and eco-friendly solutions to clean and sanitize your water tanks.
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
