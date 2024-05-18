import React from 'react'
import Navbar from '../Components/Navbar'
import homecard from '../assets/disintection.jpeg'
import product1 from '../assets/aftercleanng.avif'
import product2 from '../assets/pest1.jpg'
import product3 from '../assets/pest2.jpg'
import product4 from '../assets/ser1.jpg'
import product5 from '../assets/ser2.jpg'
import product6 from '../assets/ser3.jpg'
import product7 from '../assets/ser4.jpg'
import product8 from '../assets/watertank2.jpeg'
import ProductCard from '../Components/Card/ProductCard'
import SectionCard2 from '../Components/Card/SectionCard2'
import Testimonials from '../Components/Testimonial/Testimonials'
const Home = () => {


  const products = [
    { image: product1, description: "Toaster" },
    { image: product2, description: "Comercial Refrigerator" },
    { image: product3, description: "Oven" },
    { image: product4, description: "Dish Washer" },
    { image: product5, description: "Commercial Cooking" },
    { image: product6, description: "Commercial Beverage" },
    // { image: product7, description: "Ice Cream Machine" },  
    // { image: product8, description: "Dish Washer" },
  ];
  return (
    <>
    <div>
      <Navbar />
      <section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${homecard})` }}
>

  <div
    className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 "
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
</div>
<SectionCard2 />
<h1 className="text-4xl font-bold text-gray-800 mb-4 mt-8 text-center">
        OUR SERVICES
      </h1>
      <div className="flex justify-center flex-wrap gap-8 mt-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            // description={product.description}
          />
        ))}
      </div>
      <h1 className="text-4xl font-sans text-gray-800 mb-4 mt-8 text-center">
        OUR VISION
      </h1>
      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-8 custom-shadow-bg-white">
          <img
            src={product7}
            alt="Product 18"
            className="w-16 h-16 rounded-full object-cover mb-3"
          />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            INSTALLATION
          </h5>

          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            QS Gas Safe commercial catering engineers ensure that your kitchen
            is installed and commissioned safely and effectively. Your dedicated
            QS project manager will be on hand to oversee installation and
            ensure that everything runs smoothly and to your satisfaction
          </p>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-8 custom-shadow-bg-white">
          <img
            src={product8}
            alt="Product 18"
            className="w-16 h-16 rounded-full object-cover mb-3"
          />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            PEST SOLUTIONS
          </h5>

          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            QS is specialists in the design, supply and installation of
            commercial kitchens to clients ranging from small café’s, care
            homes, large restaurants, production kitchens, Industrial Kitchen,
            Central Kitchens, Hotel kitchens & Corporate kitchens.
          </p>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-8 custom-shadow-bg-white">
          <img
            src={product6}
            alt="Product 18"
            className="w-16 h-16 rounded-full object-cover mb-3"
          />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            WATER TANK CLEANING
          </h5>

          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            QS is specialists in the design, supply and installation of
            commercial kitchens to clients ranging from small café’s, care
            homes, large restaurants, production kitchens, Industrial Kitchen,
            Central Kitchens, Hotel kitchens & Corporate kitchens.
          </p>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-bg-white-01 dark:border-gray-700 m-8 custom-shadow-bg-white">
          <img
            src={product5}
            alt="Product 18"
            className="w-16 h-16 rounded-full object-cover mb-3"
          />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            QUALITY
          </h5>

          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            QS specializes in ensuring the quality and reliability of every
            aspect of commercial kitchen design, supply, and installation. Our
            expertise extends to a diverse clientele, including small cafes,
            care homes, expansive restaurants, production kitchens, industrial
            facilities, central kitchens, hotel establishments, and corporate
            facilities.
          </p>
        </div>
      </div>
      <Testimonials />
      </>
  )
}

export default Home