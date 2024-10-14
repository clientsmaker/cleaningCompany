import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ser from "../../assets/p2.jpg";

const ServiceCard1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
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
              Pest Control
            </h2>
            <p className="mt-4 text-black font-medium">
              <strong>Comprehensive Pest Management:</strong> Our expert team utilizes the
              latest techniques and environmentally friendly products to target
              and eradicate a wide range of pests, including insects, rodents,
              and more. We tailor our services to meet your specific needs,
              ensuring that your space remains safe and pest-free.
              <br />
              <br />
              <strong>Safe and Effective Solutions:</strong> We prioritize the safety of your
              family, pets, and the environment. Our pest control methods are
              safe, non-toxic, and highly effective, providing long-lasting
              results without compromising on safety.
              <br />
              <br />
              <strong>Preventive Measures:</strong> Prevention is key to maintaining a
              pest-free environment. Our team will work with you to implement
              effective preventive measures, including regular inspections and
              treatments, to keep pests at bay and protect your property from
              future infestations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard1;
