import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import section from "../../assets/boy1.png";
import section from "../../assets/abtsec.jpg";

const SectionCard2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref}>
      <div className="mx-auto max-w-screen-2xl py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={inView ? { x: 0 } : { x: "-100vw" }}
              transition={{ type: "spring", stiffness: 120, duration: 15 }}
              className="relative h-64 sm:h-80 lg:h-full"
            >
              <img
                alt=""
                src={section}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </motion.div>
          </div>

          <div className="relative flex items-center ">
            <motion.div
              initial={{ x: "100vw" }}
              animate={inView ? { x: 0 } : { x: "100vw" }}
              transition={{ type: "spring", stiffness: 120, duration: 0 }}
              className="p-8 sm:p-16 lg:p-24"
            >
              <p className="text-black font-medium">
                Hey, <br />
                Welcome to Golden Cleaning Service, a premier home maintenance
                and cleaning company proudly serving our community. We
                specialize in providing top-tier services that ensure your
                living and working spaces are immaculate, safe, and
                comfortable..
              </p>
              <p className="text-black font-medium">
                At Golden Cleaning Service, we understand the importance of a
                clean and healthy environment. That’s why we offer a
                comprehensive range of services designed to meet your specific
                needs and exceed your expectations. Whether you require thorough
                water tank cleaning, effective pest control, or a variety of
                home maintenance solutions, we have the expertise and dedication
                to deliver exceptional results
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCard2;
