import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

const CartRight = () => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col p-4 sm:p-5 lg:p-[1.66668vw]">
      <div className="border-b-2 border-b-[#CBCBCB] space-y-2 sm:space-y-3 pb-4 sm:pb-5">
        <div className="flex justify-between items-center">
          <span className="text-sm sm:text-xs lg:text-xs text-[#010101]">Subtotal</span>
          <span className="text-base sm:text-sm lg:text-[.78125vw] font-black">
            280.000 <sup>đ</sup> VND
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm sm:text-xs lg:text-xs text-[#010101]">Shipping</span>
          <span className="text-sm sm:text-xs lg:text-[.625vw] font-black">Calculated at next step</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 sm:mt-5 lg:mt-[1.66667vw]">
        <h5 className="text-[#010101] text-lg sm:text-base lg:text-[1.25vw] font-normal leading-tight">
          Total(1)
        </h5>
        <h5 className="text-lg sm:text-base lg:text-[1.5625vw] font-black">
          280.000 <sup>đ</sup> VND
        </h5>
      </div>
      <div className="mt-3 sm:mt-4 lg:mt-[1.35417vw]">
        <Link to={'/payment'}>
          <Button className="uppercase w-full text-sm sm:text-base lg:text-base py-2 sm:py-3" variant="destructive">
            Check out
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartRight;