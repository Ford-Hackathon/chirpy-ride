import * as React from "react";
import Image from "next/image";

interface CarImageProps {
  src: string;
}

// TODO: Fix image imports
const CarImage: React.FC<CarImageProps> = ({ src }) => {
  return (
    <div className="car-image">
      <Image className="car" src={src} alt="Car image" />
    </div>
  );
};

export default CarImage;
