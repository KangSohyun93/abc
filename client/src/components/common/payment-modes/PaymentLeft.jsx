import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import AddAddressDialog from "../address-diaglog/AddressDialog";

const PaymentLeft = ({ addOnProduct }) => {
  // Nếu không có dữ liệu, hiển thị sản phẩm mặc định
  const product = addOnProduct || {
    id: "labubu-lemon-tea",
    name: "LABUBU Lemon Tea Figure",
    price: 700000,
    image: "https://prod-eurasian-res.popmart.com/default/20250416_173858_765015____7_____1200x1200.jpg?x-oss-process=image/format,webp",
  };

  return (
    <form className="payment-left space-y-6">
      {/* Address Book */}
      <div className="address-section">
        <h5 className="section-title">Address Book:</h5>
        <p className="section-description">
          You don’t have any saved addresses. To save time, please add your shipping address.
        </p>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-full border border-black text-black font-bold rounded-none hover:bg-[#f5f5f5]"
            >
              Add a new address
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl mb-5">My Address</SheetTitle>
              <SheetDescription>
                <div className="flex justify-center items-center flex-col">
                  <Button
                    size="icon"
                    variant="default"
                    className="bg-[#F7F7F7] hover:bg-[#F7F7F7] rounded-2xl mb-10"
                  >
                    <i className="bx bx-map text-2xl text-[#010101]"></i>
                  </Button>
                  <p className="mb-20">
                    You currently don’t have any saved delivery addresses. Add an address here to pre-fill for quicker checkout.
                  </p>
                </div>
                <AddAddressDialog />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Coupon */}
      <div className="coupon-section">
        <h5 className="section-title">Coupon:</h5>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Enter coupon code"
            className="w-full rounded-tr-none rounded-br-none border border-[#ccc] focus:outline-none focus:ring-0"
          />
          <Button
            type="submit"
            className="bg-black text-white font-bold uppercase rounded-none hover:bg-[#333]"
          >
            Apply
          </Button>
        </div>
      </div>

      {/* Add-on Purchase */}
      <div className="add-on-section">
        <h5 className="section-title">Add-on Purchase:</h5>
        <span className="section-description">
          Orders over 280,000 đ are eligible for add-on purchase
        </span>
        <div className="flex gap-4 mt-2">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
          <div className="flex flex-col">
            <span className="product-name">{product.name}</span>
            <span className="product-price">
              {product.price.toLocaleString()} <sup>₫</sup>
            </span>
            <Link
              to={`/product/${product.id}`}
              className="product-details cursor-pointer underline"
            >
              View details
            </Link>
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="billing-section">
        <h5 className="section-title">Billing Address:</h5>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-full border border-black text-black font-bold rounded-none hover:bg-[#f5f5f5]"
            >
              Add a billing address
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl mb-5">My Address</SheetTitle>
              <SheetDescription>
                <div className="flex justify-center items-center flex-col">
                  <Button
                    size="icon"
                    variant="default"
                    className="bg-[#F7F7F7] hover:bg-[#F7F7F7] rounded-2xl mb-10"
                  >
                    <i className="bx bx-map text-2xl text-[#010101]"></i>
                  </Button>
                  <p className="mb-20">
                    You currently don’t have any saved delivery addresses. Add an address here to pre-fill for quicker checkout.
                  </p>
                </div>
                <AddAddressDialog />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <Button variant="destructive" className="uppercase w-full">
        Proceed to Pay
      </Button>
    </form>
  );
};

export default PaymentLeft;