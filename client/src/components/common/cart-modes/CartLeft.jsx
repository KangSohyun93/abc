import { Checkbox } from "@/components/ui/checkbox";
import React, { useCallback, useState, useEffect } from "react";
import AddQuantityBtn from "../AddQuantityBtn/AddQuantityBtn";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "@/redux/reducers/CartReducer";

const CartLeft = () => {
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveItem = useCallback(() => {
    dispatch(removeItemFromCart());
    setMsg(true);
  }, [dispatch]);

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-base sm:text-sm lg:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Select all
        </label>
      </div>
      <div className="flex">
        <Checkbox className="mr-3 sm:mr-4" />
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 w-full">
          <img
            className="w-full max-w-[120px] h-[120px] sm:max-w-[140px] sm:h-[140px] lg:max-w-[45%] lg:max-h-[45%] object-cover rounded-lg"
            src="https://prod-eurasian-res.popmart.com/default/20250415_182606_284393____9_____1200x1200.jpg?x-oss-process=image/format,webp"
            alt="logo"
          />
          <div className="flex flex-col cart-left-detail w-full">
            <h5 className="line-clamp-2 font-medium text-base sm:text-sm lg:text-[.9375vw]">
              Twinkle Twinkle Be a Little Star Series Figures
            </h5>
            <span className="text-[#666] font-normal text-sm sm:text-xs lg:text-[.9375vw] mt-1">
              Single Box
            </span>
            <span className="mt-3 font-medium text-lg sm:text-base lg:text-base mb-4">
              280.000 <sup>đ</sup>
            </span>
            <div className="flex justify-between items-center">
              <AddQuantityBtn className="mt-0" />
              <span
                className="uppercase text-sm sm:text-xs lg:text-[.78125vw] leading-tight underline cursor-pointer"
                onClick={handleRemoveItem}
              >
                remove
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLeft;