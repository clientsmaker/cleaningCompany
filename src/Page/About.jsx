// import React from "react";

import backgroundImage from "../assets/abt.jpg";
import Navbar from "../Components/Navbar";
import React from "react";
import { Button } from "@material-tailwind/react"; // assuming you are using Material Tailwind for UI components

// import backgroundImage from "../assets/cooking-class.jpg"; // replace with a more relevant image

const About = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <div
          className="h-96 bg-cover bg-center "
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h3 className="text-3xl font-bold mb-4">
             About Us
            </h3>
            <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <Button variant="contained" color="blue">
              Explore Our Courses
            </Button> */}
          </div>
        </div>
        <div className="bg-gray-100 p-8 text-gray-800">
          <p className="text-lg md:text-xl lg:text-2xl mb-4">Our Mission</p>
          <p className="mb-4">
            At GOLDEN CLEANING SERVICE, Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas, tempora voluptates suscipit vero quis commodi debitis ducimus ad numquam
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo delectus pariatur dicta quo ratione laborum fuga consequatur aut. Hic voluptatibus eaque, asperiores repellat laborum dicta adipisci quo labore, ex mollitia voluptate aliquid delectus distinctio ea doloremque, vitae praesentium deserunt veritatis! Provident tempora, maiores reprehenderit dolorem deleniti ducimus autem veniam quae voluptatem corrupti at, dicta voluptatibus ab velit esse alias, illum sint dignissimos ipsum nulla aspernatur. Nostrum fugiat repellendus quo pariatur, quisquam aliquam officiis obcaecati! Dignissimos, alias ex nihil, inventore iste eveniet dolore perferendis distinctio magni culpa, corrupti suscipit. Quae voluptate atque magni id tenetur corporis iusto temporibus exercitationem eos libero quas in quaerat quidem assumenda quibusdam rerum dicta recusandae, a voluptas? Odit eum et eaque, maxime quo aspernatur id libero aliquid recusandae earum praesentium quas illo. Pariatur, possimus ab quibusdam ullam, non dolorem ipsam quam praesentium et iure provident adipisci rem corporis. Mollitia voluptas quisquam rem dolore, laboriosam quaerat nisi nam, quod itaque dolores quis tempore exercitationem repudiandae saepe expedita necessitatibus totam? Qui reiciendis iste possimus culpa praesentium autem ad quo earum laudantium optio! Voluptatem saepe minus adipisci consequatur, nobis qui, quia dolore ipsum voluptatum natus, soluta consectetur repellendus blanditiis porro! Labore, cum omnis quos iusto magni aliquid quam tenetur.
          </p>
          {/* ... (continue with the rest of the content, using headings and breaking down text into sections) ... */}
        </div>
      </div>
    </>
  );
};

export default About;
