import ListProduct from "@/components/common/list-product/ListProduct";
import CustomBreadcum from "@/components/common/ProductDetailModes/CustomBreadcum";
import SideCollection from "@/components/common/side-collection/SideCollection";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { heading } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Consider using a more specific max-width if needed, e.g., max-w-screen-xl */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4"> {/* Adjusted max-width and added padding */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <CustomBreadcum name={heading} />
        </div>
        <div className="flex flex-col items-center"> {/* Removed items-center here unless the heading needs centering */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
            {heading}
          </h2>
          {/* Reduced lg:gap */}
          <div className="w-full flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-8"> {/* Changed lg:gap-24 to lg:gap-8 */}
            {/* Filter Button for Mobile/Tablet */}
            <div className="lg:hidden w-full mb-4"> {/* Added margin-bottom */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-between text-sm"
              >
                <span className="font-medium">Filters</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Filter Content */}
              <div className={`mt-2 ${isFilterOpen ? 'block' : 'hidden'}`}>
                {/* Keep max-h for scrollability if content is long */}
                <div className="max-h-[200px] overflow-y-auto bg-white rounded-md shadow-sm border border-gray-200"> {/* Added border */}
                  {/* Added flex centering to the padding div */}
                  <div className="p-3 flex flex-col items-center"> {/* Centers the SideCollection block */}
                    {/* Ensure SideCollection itself handles internal layout */}
                    <SideCollection />
                  </div>
                </div>
              </div>
            </div>

            {/* Side Collection - Hidden on mobile/tablet, Adjust width ratio if needed */}
             {/* Example: 25% width, you can adjust w-1/4, w-1/3 etc. */}
            <div className="hidden lg:block lg:w-1/4"> {/* Adjusted width to 25% */}
              <SideCollection />
            </div>

            {/* List Product - Adjust width ratio accordingly */}
             {/* Example: 75% width */}
            <div className="w-full lg:w-3/4"> {/* Adjusted width to 75% */}
              <ListProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;