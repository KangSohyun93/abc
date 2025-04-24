import CartLeft from "@/components/common/cart-modes/CartLeft";
import CartRight from "@/components/common/cart-modes/CartRight";
import React from "react";

const CartPage = () => {
  return (
    <div className=" flex justify-center items-center mb-20 flex-wrap cart-page-1">
      <div className="lg:max-w-[63.2%] w-[100%] h-full cart-page">
        <h2 className="text-[1.66667vw] text-[#000] font-black uppercase mt-10 mb-5 ">My cart</h2>
        <div className="flex flex-wrap flex-col sm:flex-row gap-5">
            <div className="lg:flex-[0.6] w-auto flex-none"><CartLeft /></div>
            <div className="lg:flex-[0.4] w-auto flex-none"><CartRight /></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
