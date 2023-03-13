import React from "react";
import Gallery from "react-photo-gallery";
import LazyLoad from "react-lazyload";

const photos = [
  {
    src: "/img1.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/img20.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/IMG_0472.jpg",
    width: 20,
    height: 5,
  },
  {
    src: "/IMG_0468.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/DSC05306.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/0S8A2515.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_MG_5211.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_MG_5167.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_MG_5146.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_MG_3629.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_MG_3559.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_A8A2148.jpg",
    width: 2,
    height: 1,
  },
  //   {
  //     src: "/_A8A2141.jpg",
  //     width: 2,
  //     height: 1,
  //   },
  {
    src: "/_A8A2084.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_A8A2039.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_A8A1992.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_A8A1697.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_A8A1325.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_A8A1021.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "/_A8A0862.jpg",
    width: 2,
    height: 1,
  },
];

const Images = () => {
  return (
    <div>
      <LazyLoad height={200} offset={100} placeholder={<div>Loading...</div>}>
        <Gallery photos={photos} />
      </LazyLoad>
    </div>
  );
};

export default Images;
