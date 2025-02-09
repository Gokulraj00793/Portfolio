import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" bg-black hero flex flex-col items-center justify-center py-24 min-h-screen  text-[100px]"
    >
      <div className="font-bold  text-white text-[30px] lg:text-[100px]  sm:text-[50px] text-center">
        GOKULRAJ M
      </div>
      <div className="text-[9px] lg:text-[20px] sm-[15px] text-white bg-black">
        SOFTWARE ENGINEER | FRONT END & WEB DEVELOPER
      </div>
    </div>
  );
};

export default Hero;
