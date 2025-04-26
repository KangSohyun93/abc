import React from "react";

const data = ["About POP MART", "POP News"];

const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-10 mb-10 sm:mb-12 lg:mb-20">
      {data.map((e, index) => {
        return (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-[24.16667vw] p-4 sm:p-5 lg:px-[1.5625vw] lg:py-[2.60417vw] bg-[#f5f5f5] flex justify-between items-center rounded-lg sm:rounded-xl lg:rounded-2xl"
          >
            <h2 className="uppercase text-lg sm:text-base lg:text-[1.66667vw] font-bold text-[#D20075]">
              {e}
            </h2>
            <i className="bx bx-right-arrow-alt text-xl sm:text-2xl lg:text-3xl"></i>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;