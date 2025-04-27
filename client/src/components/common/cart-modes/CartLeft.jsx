import { Checkbox } from "@/components/ui/checkbox";
import React, { useCallback } from "react";
import AddQuantityBtn from "../AddQuantityBtn/AddQuantityBtn";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "@/redux/reducers/CartReducer";
// import { Trash2 } from 'lucide-react';

const CartLeft = () => {
  const dispatch = useDispatch();
  const productIdToRemove = "some-product-id";

  const handleRemoveItem = useCallback(() => {
    dispatch(removeItemFromCart(productIdToRemove));
  }, [dispatch, productIdToRemove]);

  // Hàm render item
  const renderCartItem = () => (
    <div className="flex items-start py-5 border-b border-gray-200 last:border-b-0">
      <Checkbox
        // THAY ĐỔI: Đổi màu text khi check và màu focus ring thành màu xám
        className="mr-3 md:mr-4 mt-1 w-4 h-4 border-2 border-gray-300 focus:ring-offset-0 focus:ring-1 focus:ring-gray-500 text-gray-600" // Đổi từ red sang gray
      />
      <div className="flex flex-row gap-3 sm:gap-4 w-full">
        <img
          className="w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] object-cover rounded-md flex-shrink-0"
          src="https://prod-eurasian-res.popmart.com/default/20250415_182606_284393____9_____1200x1200.jpg?x-oss-process=image/format,webp"
          alt="Twinkle Twinkle Be a Little Star Series Figures"
        />
        <div className="flex flex-col cart-left-detail w-full">
          <h5 className="line-clamp-2 font-medium text-sm md:text-base text-gray-800 mb-0.5">
            Twinkle Twinkle Be a Little Star Series Figures
          </h5>
          <span className="text-gray-500 font-normal text-xs md:text-sm">
            Single Box
          </span>
          <span className="mt-1 font-semibold text-base md:text-lg text-gray-900 mb-1.5">
            280.000 <sup>đ</sup>
          </span>
          <div className="flex justify-between items-center mt-auto pt-1">
            <AddQuantityBtn className="mt-0" />
            <button
              onClick={handleRemoveItem}
              className="uppercase text-xs text-gray-500 hover:text-red-600 font-medium tracking-wider transition-colors duration-200"
              aria-label="Remove item"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-0 md:bg-transparent md:shadow-none">
      {/* ---- Select all section ---- */}
      <div className="flex items-center space-x-3 mb-4 px-0 md:px-4">
        <Checkbox
          id="select-all"
           // THAY ĐỔI: Đổi màu text khi check và màu focus ring thành màu xám
          className="w-4 h-4 border-2 border-gray-300 focus:ring-offset-0 focus:ring-1 focus:ring-gray-500 text-gray-600" // Đổi từ red sang gray
        />
        <label
          htmlFor="select-all"
          className="text-sm md:text-base font-medium text-gray-700 cursor-pointer"
        >
          Select all (1 item) {/* Cập nhật số lượng động */}
        </label>
      </div>
      {/* ---- Hết Select all section ---- */}

      <div className="md:border-t md:border-gray-200 md:px-4">
         {renderCartItem()}
         {/* Render các items khác nếu có */}
      </div>
    </div>
  );
};

export default CartLeft;