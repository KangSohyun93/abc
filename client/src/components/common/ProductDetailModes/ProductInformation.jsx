import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/reducers/CartReducer";
import AddQuantityBtn from "../AddQuantityBtn/AddQuantityBtn";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const dataAccordion = [
  {
    title: "Details",
    data: ["Brand: POP MART", "Size: Height about 13cm", "Material: PVC/ABS"],
    outlinedText: ["View Product Details", "What's a blind box"],
  },
  {
    title: "SHIPPING & AFTER - SALES SERVICE",
    data: [
      `1. Shipping:
Standard Shipping (15-30 working days)
Expedited Shipping (3-7 working days)
...`,
    ],
    outlinedText: ["Read More"],
  },
];

const ProductInformation = () => {
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();

  const handleAddItemToCart = useCallback(() => {
    dispatch(addItemToCart());
    setMsg(true);
  }, [dispatch]);

  useEffect(() => {
    if (msg) {
      const timeout = setTimeout(() => {
        setMsg(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [msg]);

  return (
    <div className="bg-white w-full p-4 sm:p-6 md:p-8">
      {msg && (
        <Alert className="mb-4 absolute right-4 w-[200px] h-[50px] bg-[#333333] flex items-center -translate-y-10 transition-all duration-500 ease-in-out">
          <AlertDescription className="flex items-center justify-between text-sm">
            <span className="mr-4">Added to cart</span>
            <Link to="/cart">
              <Button variant="destructive" className="h-6 w-12 text-xs">
                View
              </Button>
            </Link>
          </AlertDescription>
        </Alert>
      )}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl sm:text-2xl text-[#000] font-bold">
          Peach Riot Witchy Punk Figures
        </h3>
        <i className="bx bx-heart text-xl"></i>
      </div>
      <span className="mt-2 text-lg sm:text-xl text-[#d2001e]">
        1.520.000 <sup>đ</sup>
      </span>
      <div className="my-4">
        <span className="text-base font-normal">Quantity</span>
        <AddQuantityBtn className="mt-2 w-auto h-auto" />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-5 pb-5 border-b-2 border-b-[#DDDDDD]">
        <Button
          className="uppercase w-full sm:w-[180px] h-10 text-white font-bold text-sm bg-black hover:bg-gray-800"
          onClick={handleAddItemToCart}
        >
          Add to Cart
        </Button>
        <Link to="/payment" className="w-full sm:w-auto">
          <Button
            className="uppercase w-full sm:w-[180px] h-10 text-white font-bold text-sm bg-[#d2001e] hover:bg-red-700"
          >
            Buy Now
          </Button>
        </Link>
      </div>
      {dataAccordion.map((item, index) => (
        <div key={index} className="border-b-2 border-b-[#fffdd0]">
          <Accordion type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-base">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                {item.data.map((line, i) => (
                  <span key={i} className="text-sm font-normal block mb-2">
                    {line}
                  </span>
                ))}
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  {item.outlinedText.map((text, i) => (
                    <span key={i} className="text-sm font-normal underline">
                      {text}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default ProductInformation;