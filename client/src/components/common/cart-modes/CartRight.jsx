import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

const CartRight = () => {
  return (
    // Điều chỉnh padding responsive
    <div className="bg-[#F5F5F5] flex flex-col p-3 md:p-4 rounded-md"> {/* Thêm rounded-md nếu muốn */}
      <div className="border-b-2 border-b-[#CBCBCB] space-y-2 pb-3">
        <div className="flex justify-between items-center">
          <span className="text-sm md:text-base text-[#010101] font-medium"> {/* Responsive text size */}
            Subtotal
          </span>
          {/* Responsive text size */}
          <span className="text-base md:text-lg font-semibold">
            280.000 <sup>đ</sup> {/* Bỏ VND nếu đơn vị tiền tệ đã rõ ràng */}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm md:text-base text-[#010101] font-medium"> {/* Responsive text size */}
            Shipping
          </span>
          {/* Responsive text size */}
          <span className="text-xs md:text-sm font-medium text-right"> {/* Thêm text-right */}
            Calculated at next step
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
         {/* Responsive text size */}
        <h5 className="text-[#010101] text-base md:text-lg font-semibold">
          Total(1) {/* Cần cập nhật số lượng động */}
        </h5>
         {/* Responsive text size */}
        <h5 className="text-lg md:text-xl font-bold">
          280.000 <sup>đ</sup> {/* Bỏ VND */}
        </h5>
      </div>
      <div className="mt-4 md:mt-6"> {/* Tăng margin top responsive */}
        <Link to={'/payment'}>
          {/* Responsive text size cho button */}
          <Button className="uppercase w-full text-sm md:text-base py-2.5 md:py-3" variant="destructive"> {/* Tăng nhẹ padding Y */}
            Check out
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartRight;