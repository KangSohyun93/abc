import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CartItem from "../cart-item/CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSkeleton } from "@/redux/reducers/LoadingReducer";
import { Skeleton } from "@/components/ui/skeleton";
import { fakeProducts } from "@/data/WebData";

export const arrivalImages = [
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250416_114800_150812____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250416_101451_021330____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250416_112327_064731____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250416_100303_276638____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250415_155736_903426____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
];

const NewArrivals = ({ title, layout = false, className = "" }) => {
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSkeleton());
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className={`lg:mb-20 mb-10 w-full ${className}`}>
      <div className="flex justify-between items-center mb-6 w-full px-4 sm:px-6 lg:px-8">
        <h5 className="uppercase text-[#E60021] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[1.66667vw]">
          {title}
        </h5>
        <button>
          <Link
            className="flex items-center justify-center border-b-2 border-b-[#262626] h-4 cursor-pointer pb-2"
            to={"/collection/New Arrival"}
          >
            <span className="text-sm sm:text-base lg:text-xs">More</span>
            <ChevronRight className="w-3 sm:w-4 lg:w-3" />
          </Link>
        </button>
      </div>
      <Carousel className={"w-full Carousel1 px-4 sm:px-6 lg:px-8"}>
        <CarouselContent>
          {(isLoading ? Array.from({ length: 4 }) : fakeProducts).map(
            (data, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
                >
                  {isLoading ? (
                    <Skeleton className="h-64 w-full rounded-lg bg-[#E0E0E0]" />
                  ) : layout ? (
                    <Link to={`/product/${data.id}`}>
                      <div className="bg-white hover:border-2 rounded-lg overflow-hidden">
                        <div className="w-full aspect-square card-item">
                          <img
                            alt={data.name || "Popmart product"}
                            src={data.thumbnail}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col text-xs font-bold my-4 px-2">
                          <span>{data.date}</span>
                          <span>{data.name}</span>
                        </div>
                        <div className="flex justify-between items-center px-2 pb-2">
                          <span className="text-[#E60021]">
                            {data.price} <sup>₫</sup>
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-full w-8 h-8 sm:w-7 sm:h-7 lg:w-[2.08333vw] lg:h-[2.08333vw]"
                          >
                            <i className="bx bx-bell"></i>
                          </Button>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link to={`/product/${data.id}`}>
                      <CartItem
                        img={data.thumbnail}
                        name={data.name}
                        price={data.price}
                      />
                    </Link>
                  )}
                </CarouselItem>
              );
            }
          )}
        </CarouselContent>
        <CarouselPrevious className="left-0 -translate-y-1/2 sm:-left-4 lg:-left-6" />
        <CarouselNext className="right-0 -translate-y-1/2 sm:-right-4 lg:-right-6" />
      </Carousel>
    </div>
  );
};

export default NewArrivals;