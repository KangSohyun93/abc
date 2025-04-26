import React from "react";

const CartItem = ({ img, name, price, outofstock = false }) => {
  return (
    <div className="col-span-1">
      <div className="cart-item group bg-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-[#CCCCCC]">
        <div className="aspect-square overflow-hidden">
          <img
            src={img}
            alt="logo"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-2 sm:p-3 lg:p-4">
          <span className="brand uppercase text-[#EAB329] tracking-wide">
            pop mart
          </span>
          <div className="name mt-1 font-medium text-gray-800 line-clamp-1">
            {name}
          </div>
          <div className="mt-2 flex justify-between items-center">
            <span className="price text-[#D20075] font-semibold">
              {price}
              <sup>đ</sup>
            </span>
            <i className="arrow bx bx-right-arrow-alt text-gray-400 group-hover:text-black transition" />
          </div>
          {outofstock && (
            <div className="mt-2 text-xs text-red-500 font-semibold">
              Hết hàng
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;