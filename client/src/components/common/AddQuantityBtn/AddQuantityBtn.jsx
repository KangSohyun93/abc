import { Button } from "@/components/ui/button";
import React, { useCallback, useState } from "react";

const AddQuantityBtn = ({ className = "" }) => {
  const [quantity, setQuantity] = useState(1);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1);
    setDisabledBtn(false);
  }, []);

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity((prev) => {
      const newQuantity = prev - 1;
      if (newQuantity <= 1) {
        setDisabledBtn(true);
      }
      return newQuantity;
    });
  }, []);

  return (
    <div className={`add-quantity-btn ${className}`}>
      <Button
        size="icon"
        className="bg-transparent border border-black"
        onClick={handleDecreaseQuantity}
        disabled={disabledBtn}
      >
        <i className="bx bx-minus text-black"></i>
      </Button>
      <span className="text-center">{quantity}</span>
      <Button
        size="icon"
        className="bg-transparent border border-black"
        onClick={handleIncreaseQuantity}
      >
        <i className="bx bx-plus text-black"></i>
      </Button>
    </div>
  );
};

export default AddQuantityBtn;