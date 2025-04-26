import PaymentLeft from "@/components/common/payment-modes/PaymentLeft";
import PaymentRight from "@/components/common/payment-modes/PaymentRight";
import React from "react";

const PaymentPage = () => {
  return (
    <div className="flex justify-center items-start mb-20 px-4">
      <div className="w-full max-w-[63.2%] mt-20 flex gap-10 flex-col lg:flex-row">
        <div className="flex-1">
          <PaymentLeft />
        </div>
        <div className="lg:w-[30%]">
          <PaymentRight />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;