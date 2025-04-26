import React from "react";

const PaymentRight = () => {
  return (
    <div className="payment-right">
      <div className="summary">
        <div className="summary-item">
          <span className="summary-label">Subtotal</span>
          <span className="summary-value">280,000 đ VND</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Shipping</span>
          <span className="summary-value">0 đ</span>
        </div>
      </div>
      <div className="total">
        <h5 className="total-label">Total (1)</h5>
        <h5 className="total-value">280,000 đ VND</h5>
      </div>
      <div className="order-items">
        <div className="order-header">
          <span className="order-title uppercase">Your Order</span>
          <p className="order-count uppercase">7 Items</p>
        </div>
        <div className="item">
          <img
            className="item-image"
            src="https://prod-eurasian-res.popmart.com/default/20250416_173858_765015____7_____1200x1200.jpg?x-oss-process=image/format,webp"
            alt="Twinkle Twinkle Be a Little Star Series - Plush Pendant Blind Box"
          />
          <div className="item-info">
            <h5 className="item-name line-clamp-2">
              Twinkle Twinkle Be a Little Star Series - Plush Pendant Blind Box
            </h5>
            <span className="item-variant">Single Box</span>
            <div className="item-details">
              <span className="item-price">380,000 đ</span>
              <span className="item-quantity">Qty: 7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRight;