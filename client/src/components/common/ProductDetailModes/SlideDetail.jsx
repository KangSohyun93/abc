import React, { useState } from "react";

const SlideDetail = ({ images }) => {
  const [img, setImg] = useState(images[0]);

  const handleClick = (index) => {
    setImg(images[index]);
  };

  return (
    <div className="flex gap-2.5">
      <div className="flex flex-col items-center w-[80px] gap-2">
        {images.map((img, index) => (
          <img
            src={img}
            key={index}
            className="w-full h-auto cursor-pointer border-2 border-gray-300"
            onClick={() => handleClick(index)}
            alt={`Thumbnail ${index + 1}`}
          />
        ))}
      </div>
      <div className="flex-1">
        <img
          src={img}
          alt="Main product"
          className="w-full h-auto bg-[#F6F6F6]"
        />
      </div>
    </div>
  );
};

export default SlideDetail;