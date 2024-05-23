import React from 'react'
import logo from '../assets/logofooter1.png'
const Footer = () => {
  return (
    <footer className=" text-white py-16"style={{ backgroundColor: "#c6b069" }}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-white mb-8 lg:mb-0">
          
          <img src={logo} className="h-28 " style={{ width: '250px' }}  alt="Skep Interiors Logo" />

          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-16">
            <div className="col-span-1">
              <h2 className="text-xl font-semibold text-blue-900 mb-4"style={{ fontFamily: 'Cinzel, serif', lineHeight: '1.2' }}> GOLDEN WATER TANK CLEANIG & PEST CONTROL SERVICES</h2>
              <p className="text-gray-200 leading-relaxed">
                Providing top-notch water tank cleaning, pest control, and various home services to ensure your home is always in perfect condition.
              </p>
            </div>

            <div className="col-span-1">
              <p className="font-medium text-white">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-white transition hover:opacity-75">Water Reserviour and Tank Cleaning</a>
                </li>
                <li>
                  <a href="#" className="text-white transition hover:opacity-75">Pest Control</a>
                </li>
                <li>
                  <a href="#" className="text-white transition hover:opacity-75">Home and Office Cleaning</a>
                </li>
                <li>
                  <a href="#" className="text-white transition hover:opacity-75">Disinfection and Sanitization</a>
                </li>
                <li>
                  <a href="#" className="text-white transition hover:opacity-75">AC Repait Service</a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <p className="font-medium text-white">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-white transition hover:opacity-75">P.O.Box:63235, Frij al murar Dubai-U.A.E</a>
                </li>
                <li>
                  <a href="mailto:info@goldenwateremirates.com" className="text-white transition hover:opacity-75">info@goldenwateremirates.com</a>
                </li>
                <li>
                  <a href="mailto:harsh@goldenwateremirates.com" className="text-white transition hover:opacity-75">harsh@goldenwateremirates.com</a>
                </li>
                <li>
                  <a href="mailto:navneet@goldenwateremirates.com" className="text-white transition hover:opacity-75">navneet@goldenwateremirates.com</a>
                </li>
                <li>
                  <a href="http://www.goldenwater-emirates.com" className="text-white transition hover:opacity-75">www.goldenwater-emirates.com</a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <p className="font-medium text-white">Helpline</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="tel:+97142513365" className="text-white transition hover:opacity-75">+971 4 251 3365</a>
                </li>
                {/* <li>
                  <a href="tel:+97142559057" className="text-white transition hover:opacity-75">+971 4 255 9057</a>
                </li> */}
                <li>
                  <a href="tel:+971502310188" className="text-white transition hover:opacity-75">+971 50 231 0188</a>
                </li>
                <li>
                  <a href="tel:+971528145926" className="text-white transition hover:opacity-75">+971 52 814 5926</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-white">&copy; 2024 Golden Water tank cleaning and pest control service. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
