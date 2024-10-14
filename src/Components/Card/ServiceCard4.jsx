import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ser from "../../assets/ser4.jpg";

const ServiceCard4 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
            ref={ref}
          >
            {inView && (
              <motion.img
                alt=""
                src={ser}
                className="absolute inset-0 h-full w-full object-contain transition duration-300 ease-in-out transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              />
            )}
          </div>

          <motion.div
            className="lg:py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">
              Home Maintenance Services
            </h2>
            <p className="mt-4 text-black font-medium">
              <strong>Swimming Pool Cleaning:</strong> Keep your pool clean and
              inviting with our professional swimming pool cleaning services. We
              handle everything from skimming and vacuuming to chemical
              balancing, ensuring your pool is always ready for a swim.
              <br />
              <br />
              <strong>Electrical and Plumbing Work:</strong> Our experienced
              technicians are here to help with all your electrical and plumbing
              needs. Whether it's installing new fixtures, fixing leaks, or
              troubleshooting electrical issues, we've got you covered.
              <br />
              <br />
              <strong>Pipeline Disinfection:</strong>Ensure your water supply
              remains safe and clean with our pipeline disinfection services. We
              specialize in comprehensive disinfection treatments to eliminate
              harmful bacteria and contaminants in your plumbing system. Our
              expert team conducts thorough inspections, effective cleaning, and
              sanitization of pipelines to guarantee the health and safety of
              your water supply. Trust us to keep your water systems in top
              condition and protect your home or business from potential risks
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard4;
