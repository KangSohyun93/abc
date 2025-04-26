import ListProduct from "@/components/common/list-product/ListProduct";
import CustomBreadcum from "@/components/common/ProductDetailModes/CustomBreadcum";
import SideCollection from "@/components/common/side-collection/SideCollection";
import React from "react";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { heading } = useParams();
  return (
    <div>
      <div className="flex ml-15">
        <CustomBreadcum name={heading} />
      </div>
      <div className="flex justify-center items-center flex-col flex-wrap lg:w-auto w-full collection-page">
        <h2 className="uppercase text-[1.5rem] sm:text-[2rem] font-bold mt-[1.45833vw] mb-[2.5vw]">
          {heading}
        </h2>
        <div className="w-full lg:w-[94%] max-w-7xl lg:flex justify-between block collection-1 px-4 sm:px-5 lg:px-6">
          <SideCollection />
          <div className="flex-1">
            <ListProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;