import * as React from "react";
import Image from "next/image";
import CarImageSrc from "./../public/car.webp";


interface CarImageProps {
  src: string;
}

// TODO: Fix image imports
const CarImage: React.FC<CarImageProps> = ({ src }) => {
  return (
    <div className="car-image">
      <Image className="car" src={CarImageSrc} alt="Car image" width="30px"/>
    </div>
  );
};

export default CarImage;
