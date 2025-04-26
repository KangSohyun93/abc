import React from "react";

const Featured = ({ title, imgs }) => {
  return (
    <div className="mb-10 sm:mb-12 lg:mb-20">
      <h2 className="uppercase text-3xl sm:text-2xl md:text-xl lg:text-[1.66667vw] font-bold mb-4 sm:mb-5 lg:mb-[1.66667vw]">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-5 w-full">
        <div>
          <img src={imgs.one} alt="logo" className="w-full h-60 sm:h-80 lg:h-96 object-cover rounded-lg" />
        </div>
        <div className="flex flex-col justify-between gap-4 sm:gap-5 lg:gap-5">
          <div>
            <img src={imgs.two} alt="logo" className="w-full h-28 sm:h-36 lg:h-44 object-cover rounded-lg" />
          </div>
          <div>
            <img src={imgs.three} alt="logo" className="w-full h-28 sm:h-36 lg:h-44 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;