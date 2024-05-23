import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from '../../assets/ser3.jpg';

const ServiceCard3 = () => {
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
           <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">Office Cleaning</h2>
<p className="mt-4 text-black font-medium">
  <strong>Comprehensive Cleaning Solutions:</strong> We offer a wide range of office cleaning services, including dusting, vacuuming, sanitizing surfaces, and cleaning restrooms. Our team ensures that every corner of your office is thoroughly cleaned and disinfected.
  <br/><br/>
  <strong>Eco-Friendly Practices:</strong> We prioritize the health and safety of your employees and the environment. Our cleaning products are eco-friendly and non-toxic, ensuring a safe workspace without compromising on cleanliness.
  <br/><br/>
  <strong>Experienced and Trained Staff:</strong> Our cleaning professionals are highly trained and experienced in providing top-notch office cleaning services. They are equipped with the latest cleaning tools and techniques to deliver exceptional results.
 </p>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCard3