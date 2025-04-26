import React from "react";

const BannerProduct = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center banner-product px-4 sm:px-6 lg:px-8">
      <div className="mb-20 w-full max-w-6xl">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full min-h-[200px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px]"
          >
            <img
              className="w-full h-full object-contain rounded-lg"
              src={img}
              alt={`Banner ${index + 1}`}
              onError={(e) => {
                e.target.style.display = "none";
                console.error(`Failed to load image: ${img}`);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerProduct;