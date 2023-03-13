import React from "react";

const VideosSection = () => {
  return (
    <div className="flex">
      <div className="w-full md:w-1/3 p-2">
        <video
          src="https://example.com/video1.mp4"
          className="w-full h-auto"
          controls
        />
      </div>
      <div className="w-full md:w-1/3 p-2">
        <video
          src="https://example.com/video2.mp4"
          className="w-full h-auto"
          controls
        />
      </div>
      <div className="w-full md:w-1/3 p-2">
        <video
          src="https://example.com/video3.mp4"
          className="w-full h-auto"
          controls
        />
      </div>
    </div>
  );
};

export default VideosSection;
