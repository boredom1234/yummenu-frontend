import React from "react";
import hero from "../assets/hero.jpg";
import pancakeImage from "../assets/pancake.jpg";


const Hero = () => {
  return (
    <div>
      <img src={pancakeImage} className="w-full max-h-[450px] object-cover" />
    </div>
  );
};

export default Hero;
