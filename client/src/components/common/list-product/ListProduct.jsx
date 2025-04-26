import React, { useState } from "react";
import CartItem from "../cart-item/CartItem";
import { Link } from "react-router-dom";
import { fakeProducts } from "@/data/WebData";
import { Button } from "@/components/ui/button";

const ListProduct = () => {
  const [displayCount, setDisplayCount] = useState(8); // Ban đầu hiển thị 8 sản phẩm
  const productsPerLoad = 8; // Số sản phẩm tải thêm mỗi lần

  const displayedProducts = fakeProducts.slice(0, displayCount);
  const hasMoreProducts = displayCount < fakeProducts.length;

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + productsPerLoad);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
        {displayedProducts.map((product, index) => (
          <Link key={index} to={`/product/${product.id}`}>
            <CartItem
              img={product.thumbnail}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
      </div>
      {hasMoreProducts && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="uppercase text-xs sm:text-sm lg:text-sm px-4 py-2"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListProduct;