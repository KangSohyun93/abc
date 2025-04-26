import PaymentLeft from "@/components/common/payment-modes/PaymentLeft";
import PaymentRight from "@/components/common/payment-modes/PaymentRight";
import React from "react";

const PaymentPage = () => {
  // Dữ liệu sản phẩm (có thể lấy từ Redux, API, hoặc state)
  const addOnProduct = {
    id: "labubu-lemon-tea",
    name: "LABUBU Lemon Tea Figure",
    price: 700000,
    image: "https://prod-eurasian-res.popmart.com/default/20250416_173858_765015____7_____1200x1200.jpg?x-oss-process=image/format,webp",
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-left">
          <PaymentLeft addOnProduct={addOnProduct} />
        </div>
        <div className="payment-right-wrapper">
          <PaymentRight />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;