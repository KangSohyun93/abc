import React from "react";

const BannerProduct = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center mb-20">
      <div className="w-full">
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img
              className="w-full h-auto object-contain rounded-lg"
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