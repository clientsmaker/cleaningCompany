import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from '../../assets/ser4.jpg';

const ServiceCard4 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5 
      });
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full" ref={ref}>
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
              <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">Home Maintenance Services</h2>
    <p className="mt-4 text-black font-medium">
        <strong>Swimming Pool Cleaning:</strong> Keep your pool clean and inviting with our professional swimming pool cleaning services. We handle everything from skimming and vacuuming to chemical balancing, ensuring your pool is always ready for a swim.
        <br/><br/>
        <strong>Electrical and Plumbing Work:</strong> Our experienced technicians are here to help with all your electrical and plumbing needs. Whether it's installing new fixtures, fixing leaks, or troubleshooting electrical issues, we've got you covered.
        <br/><br/>
        <strong>AC Maintenance:</strong> Ensure your home stays cool and comfortable with our AC maintenance services. We offer regular maintenance checks, cleaning of filters and ducts, and repairs to keep your AC running efficiently.
    </p>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCard4