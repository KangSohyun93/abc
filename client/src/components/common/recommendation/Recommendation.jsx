import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    img: "https://global-static.popmart.com/globalAdmin/1744336725190____pc-hirono-2____.jpg?x-oss-process=image/format,webp",
    name: "Hirono Shelter Series Figures",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1744336722233____pc-hirono-1____.jpg?x-oss-process=image/format,webp",
    name: "Hirono Shelter Series Figures",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1744336728409____pc-hirono-3____.jpg?x-oss-process=image/format,webp",
    name: "Hirono Shelter Series Figures",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1744336733187____pc-hirono-4____.jpg?x-oss-process=image/format,webp",
    name: "Hirono Shelter Series Figures",
  },
];

const Recommendation = () => {
  return (
    <div className="mb-10 sm:mb-12 lg:mb-20">
      <h2 className="uppercase text-3xl sm:text-2xl md:text-xl lg:text-[1.66667vw] font-bold mb-4 sm:mb-5 lg:mb-[1.66667vw]">
        HIRONO Recommendation
      </h2>
      <Carousel>
        <CarouselContent>
          {images.map((data, index) => {
            return (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <img src={data.img} alt="logo" className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover rounded-lg" />
                <span className="text-base sm:text-sm md:text-xl lg:text-sm mt-2 sm:mt-3 line-clamp-1">
                  {data.name}
                </span>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-0 sm:-left-4 lg:-left-6 -translate-y-1/2" />
        <CarouselNext className="right-0 sm:-right-4 lg:-right-6 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default Recommendation;