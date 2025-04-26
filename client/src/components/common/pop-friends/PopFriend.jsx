import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = [
  "https://prod-out-res.popmart.com/cms/RANA_612caed7f1.jpg?updated_at=2023-03-07T09:18:57.220Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
];

const PopFriend = () => {
  return (
    <div className="mb-10 sm:mb-12 lg:mb-20">
      <div>
        <h2 className="uppercase text-3xl sm:text-2xl md:text-xl lg:text-[1.66667vw] font-bold mb-4 sm:mb-5 lg:mb-[1.66667vw]">
          top buyers
        </h2>
      </div>
      <Carousel opts={{ align: "start", slidesToScroll: 4, loop: true }}>
        <CarouselContent>
          {data.map((e, index) => {
            return (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <img src={e} alt="logo" className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover rounded-lg" />
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

export default PopFriend;