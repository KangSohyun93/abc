import NewArrivals, { arrivalImages } from "@/components/common/arrivals/NewArrivals";
import BannerProduct from "@/components/common/ProductDetailModes/BannerProduct";
import CustomBreadcum from "@/components/common/ProductDetailModes/CustomBreadcum";
import ProductInformation from "@/components/common/ProductDetailModes/ProductInformation";
import SlideDetail from "@/components/common/ProductDetailModes/SlideDetail";
import Spinner from "@/components/ui/spinner";
import { fakeProducts } from "@/data/WebData";
import { setSkeleton } from "@/redux/reducers/LoadingReducer";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const { id } = useParams();
  const product = fakeProducts.find((item) => item.id === Number(id));

  // Calculate scale based on viewport width
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const maxWidth = 1200; // Reference width for full scale
      const currentWidth = window.innerWidth;
      const newScale = Math.min(currentWidth / maxWidth, 1); // Scale down if screen is smaller than 1200px
      setScale(newScale > 0.6 ? newScale : 0.6); // Minimum scale of 0.6 for readability
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSkeleton());
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="w-full flex justify-center mx-4 lg:mx-8">
      <div
        className="flex justify-center"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: "1200px", // Fixed width to maintain layout proportions
          marginBottom: `${80 * scale}px`, // Dynamic margin-bottom to reduce gap when scaled
        }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center h-full min-h-[30rem]">
            <Spinner />
          </div>
        ) : (
          <div className="w-full">
            <CustomBreadcum name={product.name} />
            <div className="flex gap-10 mb-10">
              <div className="w-[60%]">
                <SlideDetail images={product.images} />
              </div>
              <div className="w-[40%] flex justify-center items-center">
                <ProductInformation />
              </div>
            </div>
            <BannerProduct images={product.details} />
            <NewArrivals
              title={"you may also like"}
              images={arrivalImages}
              className="w-full mt-0 mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;