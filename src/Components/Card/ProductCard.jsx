import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProductCard = ({ image, description }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [image]);

  const cardStyle3 = {
    background:
      "linear-gradient(to right, hsl(210, 60%, 95%), hsl(0, 60%, 95%), hsl(60, 100%, 95%))",
  };

  return (
    <Card>
      <CardHeader>
        <img
          src={image}
          alt="Product Image"
          className={`h-64 w-full object-cover transition duration-300 ease-in-out transform hover:scale-105 ${
            imageLoaded ? "block" : "hidden"
          }`}
          style={cardStyle3}
          onLoad={() => setImageLoaded(true)}
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="font-medium text-center">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
