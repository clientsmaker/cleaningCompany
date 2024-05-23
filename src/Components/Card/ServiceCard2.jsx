import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ser from '../../assets/ser6.jpg';
const ServiceCard2 = () => {
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
          <h2 className="text-3xl text-gray-400 font-bold sm:text-4xl">Water Tank Cleaning</h2>
<p className="mt-4 text-black font-medium">
  
  <strong>Thorough Cleaning Process:</strong> Our team uses advanced cleaning techniques and equipment to thoroughly clean and disinfect your water tanks. We remove all sediments, algae, and other impurities that can compromise the quality of your water.
  <br/><br/>
  <strong>Health and Safety Compliance: </strong>We adhere to strict health and safety standards to ensure that your water tanks are cleaned to the highest quality. Our cleaning solutions are non-toxic and safe for all types of water tanks.
  <br/><br/>
  <strong>Regular Maintenance Plans:</strong> To maintain the cleanliness of your water tanks, we offer regular maintenance plans tailored to your needs. Regular cleaning helps prevent the buildup of harmful bacteria and extends the lifespan of your tanks.
  <br/><br/>
  <strong>Expert Technicians:</strong> Our experienced technicians are trained to handle all types of water tanks, from residential to commercial. They provide efficient and effective cleaning services, ensuring minimal disruption to your daily routine.
  <br/><br/>
 
 
</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCard2