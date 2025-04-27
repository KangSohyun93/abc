import NewArrivals, { arrivalImages } from "@/components/common/arrivals/NewArrivals";
import BannerProduct from "@/components/common/ProductDetailModes/BannerProduct";
import CustomBreadcum from "@/components/common/ProductDetailModes/CustomBreadcum";
import ProductInformation from "@/components/common/ProductDetailModes/ProductInformation";
import SlideDetail from "@/components/common/ProductDetailModes/SlideDetail";
import Spinner from "@/components/ui/spinner";
import { fakeProducts } from "@/data/WebData";
import { setSkeleton } from "@/redux/reducers/LoadingReducer";
import React, { useEffect } from "react"; // Removed useState
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const { id } = useParams();
  const product = fakeProducts.find((item) => item.id === Number(id));

  // Removed scale state and effect for calculating scale

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSkeleton());
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  // Handle case where product is not found
  if (!product && !isLoading) {
     return <div className="flex items-center justify-center h-full min-h-[40rem]">Product not found!</div>;
  }

  return (
    <div className="w-full">
      {/* Removed the outer div with transform: scale */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4"> {/* Added max-width and padding */}
        {isLoading ? (
          <div className="flex items-center justify-center h-full min-h-[40rem]">
            <Spinner />
          </div>
        ) : (
          <div className="w-full">
            <CustomBreadcum name={product.name} />
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-5 md:mb-8 lg:mb-10"> {/* Increased bottom margin */}
              {/* Slide Detail - Adjust width for large screens */}
              {/* Example: 60% width on lg screens */}
              <div className="w-full lg:w-3/5"> {/* Changed from lg:w-[95%] */}
                <SlideDetail images={product.images} />
              </div>

              {/* Product Information - Adjust width for large screens */}
              {/* Example: 40% width on lg screens */}
              <div className="w-full lg:w-2/5"> {/* Changed from lg:w-[5%] */}
                {/* Pass product data to ProductInformation if needed */}
                <ProductInformation product={product} />
              </div>
            </div>

            {/* Banner Product - Full width */}
            <div className="w-full mb-5 md:mb-8 lg:mb-10"> {/* Increased bottom margin */}
              <BannerProduct images={product.details} />
            </div>

            {/* New Arrivals - Full width */}
            <div className="w-full">
              <NewArrivals
                title={"you may also like"}
                images={arrivalImages}
                // Removed redundant w-full and mx-auto as parent handles width
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;