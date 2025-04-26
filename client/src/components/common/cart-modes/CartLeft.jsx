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
        <Checkbox id="terms" className="w-3.5 h-3.5 border-2 border-gray-600 focus:ring-0" />
        <label
          htmlFor="terms"
          className="text-[0.875rem] lg:text-[0.8333vw] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Select all
        </label>
      </div>
      <div className="flex items-start">
        <Checkbox
          className="mr-2 lg:mr-3 w-3.5 h-3.5 border-2 border-gray-600 focus:ring-0 mt-0.5"
        />
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 w-full">
          <img
            className="w-full max-w-[80px] h-[80px] lg:max-w-[100px] lg:h-[100px] object-cover rounded-lg"
            src="https://prod-eurasian-res.popmart.com/default/20250415_182606_284393____9_____1200x1200.jpg?x-oss-process=image/format,webp"
            alt="Twinkle Twinkle Be a Little Star Series Figures"
          />
          <div className="flex flex-col cart-left-detail w-full">
            <h5 className="line-clamp-2 font-medium text-[0.875rem] lg:text-[0.8333vw]">
              Twinkle Twinkle Be a Little Star Series Figures
            </h5>
            <span className="text-[#666] font-normal text-[0.75rem] lg:text-[0.7292vw] mt-1">
              Single Box
            </span>
            <span className="mt-1 font-semibold text-[0.9375rem] lg:text-[0.875rem] mb-2">
              280.000 <sup>đ</sup>
            </span>
            <div className="flex justify-between items-center">
              <AddQuantityBtn className="mt-0" />
              <span
                className="uppercase text-[0.75rem] lg:text-[0.6771vw] font-medium leading-tight underline cursor-pointer hover:text-red-600"
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