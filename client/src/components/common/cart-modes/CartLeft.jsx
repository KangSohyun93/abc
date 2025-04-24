import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import AddQuantityBtn from "../AddQuantityBtn/AddQuantityBtn";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { removeItemFromCart } from "@/redux/reducers/CartReducer";
import { useState } from "react";
import { useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const CartLeft = () => {
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveItem = useCallback(() => {
    dispatch(removeItemFromCart());
    setMsg(true);
  }, [dispatch]);


  

  return (
    <div>
      <div className="flex items-center space-x-2 mb-5">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="lg:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-6xl"
        >
          Select all
        </label>
      </div>
      <div className="flex">
        <Checkbox className={"mr-4"} />
        <div className="flex  justify-between flex-wrap lg:flex-row flex-col cart-left">
          <img
            className="lg:max-w-[45%] lg:max-h-[45%] w-auto h-auto mr-3"
            src="https://prod-eurasian-res.popmart.com/default/20250415_182606_284393____9_____1200x1200.jpg?x-oss-process=image/format,webp"
            alt="logo"
          />
          <div className="flex flex-col cart-left-detail">
            <h5 className="line-clamp-2 w-auto max-h-[4.375vw] lg:text-[.9375vw] font-medium ">
              Twinkle Twinkle Be a Little Star Series Figures
            </h5>
            <span className="text-[#666] font-normal lg:text-[.9375vw] mt-[.3125vw] text-6xl">
              Single Box
            </span>
            <span className="mt-[1.5625vw] font-medium leading-[1.25vw] text-[#000] mb-16 lg:text-base text-6xl">
              280.000 <sup>đ</sup>
            </span>
            <div className="flex justify-between items-center">
              <AddQuantityBtn className={"mt-0"} />
              <span
                className="uppercase lg:text-[.78125vw] leading-[.9375vw] underline cursor-pointer text-4xl"
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
