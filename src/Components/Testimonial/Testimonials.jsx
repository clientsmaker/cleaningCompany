import React from 'react';
import img1 from '../../assets/testimonial.jpg'
import img2 from '../../assets/testimonial1.jpg'
const Testimonials = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="rounded-lg p-6 shadow-sm sm:p-8" style={{ backgroundColor: "#c6b069" }}>
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src={testimonial.img}
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-yellow-400">
                    {[...Array(5)].map((star, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">{testimonial.name}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{testimonial.text}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    img: "https://media.istockphoto.com/id/1224612530/photo/portrait-of-smiling-young-man-wearing-white-shirt.jpg?s=612x612&w=0&k=20&c=sztKD6cHvMYQp-zNmTCORsaeMqGMfdCB4i9qcvkPWqg=",
    name: "Rufous",
    text: "Golden Cleaning Service has been a lifesaver for me. Their attention to detail and professionalism are unmatched. I trust them completely with my water tank cleaning and pest control needs."
  },
  {
    img: "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw=",
    name: "Natasha",
    text: "I've used several cleaning services in the past, but Golden Cleaning Service stands out. They are reliable, efficient, and always leave my home spotless. I highly recommend their services"
  },
  {
    img: "https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.webp?b=1&s=170667a&w=0&k=20&c=YaXYAUQu3wpM2xiFJgorwMvK5pNnrrdnFeHd1lTVwCs=",
    name: "Sophia",
    text: "Choosing Golden Cleaning Service was one of the best decisions I made. Their team is friendly, their work is impeccable, and they always arrive on time. I wouldn't hesitate to recommend them to anyone"
  }
];

export default Testimonials;
