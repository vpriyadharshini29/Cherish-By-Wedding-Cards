import React from "react";
import heroImg from "../assets/images/hero.png";

const Hero1 = () => {
  return (
    <section
      className="w-full h-[100vh] sm:h-[120vh] md:h-[150vh] lg:h-[100vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        {/* Optional hero text or button */}
        {/* 
        <div className="text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Welcome to Our Store
          </h1>
          <p className="text-white mt-4 text-base md:text-lg">
            Explore our wedding cards collection
          </p>
        </div> 
        */}
      </div>
    </section>
  );
};

export default Hero1;
