import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

const CartRight = () => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col p-3 lg:p-4">
      <div className="border-b-2 border-b-[#CBCBCB] space-y-2 pb-3">
        <div className="flex justify-between items-center">
          <span className="text-[0.75rem] lg:text-[0.7292vw] text-[#010101] font-medium">
            Subtotal
          </span>
          <span className="text-[0.875rem] lg:text-[0.8333vw] font-semibold">
            280.000 <sup>đ</sup> VND
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[0.75rem] lg:text-[0.7292vw] text-[#010101] font-medium">
            Shipping
          </span>
          <span className="text-[0.625rem] lg:text-[0.5208vw] font-medium">
            Calculated at next step
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h5 className="text-[#010101] text-[0.9375rem] lg:text-[1.0417vw] font-semibold">
          Total(1)
        </h5>
        <h5 className="text-[1rem] lg:text-[1.25vw] font-bold">
          280.000 <sup>đ</sup> VND
        </h5>
      </div>
      <div className="mt-3">
        <Link to={'/payment'}>
          <Button className="uppercase w-full text-[0.75rem] lg:text-[0.8333vw] py-2" variant="destructive">
            Check out
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartRight;