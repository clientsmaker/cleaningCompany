import React from "react";
import ContactCard from "../Components/Card/ContactCard";
import backgroundImage from "../assets/carpetclean.jpg";
import Navbar from "../Components/Navbar";
import WhatsappButton from "../Components/WhatsappButton";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <div className="">
     <Navbar />
        <div
          className="min-h-screen flex flex-col  items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
          <div className="p-3 text-white flex flex-col md:flex-row items-center md:items-start">
            {/* <img
              src={letsCookLogo}
              alt="Let's Cook Logo"
              className="mb-4 max-w-xs md:mr-6 md:mb-0"
            /> */}
           <h1 className="text-center text-gray-100 justify-center text-5xl pt-28 font-extrabold">
            Contact Page
          </h1>
          </div>
          <div className="flex justify-center items-center mb-8">
            <ContactCard />
            <WhatsappButton />
          </div>
        </div>
       
      </div>
      <Footer />
    </>
  );
};

export default Contact;
