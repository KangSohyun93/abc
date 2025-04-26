import CartLeft from "@/components/common/cart-modes/CartLeft";
import CartRight from "@/components/common/cart-modes/CartRight";
import React from "react";

const CartPage = () => {
  return (
    <div className="flex justify-center items-start mb-10 flex-wrap cart-page-1">
      <div className="lg:max-w-[63.2%] w-full h-full cart-page">
        <h2 className="text-[1.5rem] lg:text-[1.66667vw] text-[#000] font-black uppercase mt-8 mb-4">
          My cart
        </h2>
        <div className="flex flex-wrap flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="lg:flex-[0.6] w-full flex-none">
            <CartLeft />
          </div>
          <div className="lg:flex-[0.4] w-full flex-none">
            <CartRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;