import { Button } from "@/components/ui/button";
import React, { useRef } from "react";

const SeriesFigures = () => {
  const videoRef = useRef();
  const btnVideoRef = useRef();

  const playVideo = () => {
    videoRef.current.play();
    btnVideoRef.current.classList.add("hidden");
  };

  return (
    <div className="series-figures">
      <h2 className="uppercase font-bold">Hirono Echo Series Figures</h2>
      <video
        ref={videoRef}
        controls
        poster="https://global-static.popmart.com/globalAdmin/1744278382440____pc____.jpg"
      >
        <source
          src="https://global-static.popmart.com/globalAdmin/1744278372912____4月11日____.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="play-button rounded-[50%] flex justify-center items-center cursor-pointer">
        <img
          ref={btnVideoRef}
          src="https://cdn-global.popmart.com/global-mobile/images/icons/video-play-icon.png"
          alt=""
          onClick={playVideo}
        />
      </div>
      <div className="flex justify-center items-center mt-[1.25vh]">
        <Button variant="destructive" className="shop-now-btn uppercase">
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default SeriesFigures;