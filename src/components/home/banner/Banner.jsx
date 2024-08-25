"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImage1 from "../../../../public/assets/images/banner/1.jpg";
import bannerImage2 from "../../../../public/assets/images/banner/2.jpg";
import bannerImage3 from "../../../../public/assets/images/banner/3.jpg";
import bannerImage4 from "../../../../public/assets/images/banner/4.jpg";
import bannerImage5 from "../../../../public/assets/images/banner/5.jpg";
import bannerImage6 from "../../../../public/assets/images/banner/6.jpg";

const Banner = () => {
  const images = [
    {
      title: "Affordable Price For Car Servicing",
      desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      button1: "Discover More",
      button2: "Latest Project",
      next: "#slide2",
      prv: "#slide6",
      image: bannerImage1,
    },
    {
      title: "Affordable Price For Car Servicing",
      desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      button1: "Discover More",
      button2: "Latest Project",
      next: "#slide3",
      prv: "#slide1",
      image: bannerImage2,
    },
    {
      title: "Affordable Price For Car Servicing",
      desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      button1: "Discover More",
      button2: "Latest Project",
      next: "#slide4",
      prv: "#slide2",
      image: bannerImage3,
    },
    {
      title: "Affordable Price For Car Servicing",
      desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      button1: "Discover More",
      button2: "Latest Project",
      next: "#slide5",
      prv: "#slide3",
      image: bannerImage4,
    },
    {
      title: "Affordable Price For Car Servicing",
      desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      button1: "Discover More",
      button2: "Latest Project",
      next: "#slide6",
      prv: "#slide4",
      image: bannerImage5,
    },
    {
      title: "Affordable Price For Car Servicing",
      desc: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      button1: "Discover More",
      button2: "Latest Project",
      next: "#slide1",
      prv: "#slide5",
      image: bannerImage6,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [images.length, currentIndex]); // Reset interval when currentIndex changes

  const handleStart = (e) => {
    startX.current = e.clientX || e.touches[0].clientX;
  };

  const handleMove = (e) => {
    if (startX.current === null) return;

    const x = e.clientX || e.touches[0].clientX;
    const deltaX = x - startX.current;

    if (deltaX > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      startX.current = null;
    } else if (deltaX < -50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      startX.current = null;
    }
  };

  const handleEnd = () => {
    startX.current = null;
  };

  return (
    <div
      className="relative w-[98%] mx-auto h-[200px] md:h-[550px] overflow-hidden my-6"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: "0",
            left: `${index * 100}%`,
            width: "100%",
            height: "100%",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          className={`flex items-center justify-center  `}
        >
          <Image
            src={image.image}
            alt={`Image ${index}`}
            width={1000}
            height={100}
            className={`w-full h-full rounded-xl object-fill`}
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 rounded-xl">
        {images.map((_, index) => (
          <p
            key={index}
            className={`w-[10px] h-[10px] bg-white rounded-full transition-width duration-500 ease-in-out ${
              currentIndex === index ? "w-[35px]" : "w-[10px]"
            } `}
          ></p>
        ))}
      </div>

      <div style={{ backgroundImage: `url(${images[0].image})` }}></div>
    </div>
  );
};

export default Banner;
