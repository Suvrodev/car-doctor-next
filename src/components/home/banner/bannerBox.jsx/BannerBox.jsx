import Image from "next/image";
import React from "react";

const BannerBox = ({ image }) => {
  return (
    <div>
      <Image
        src={image.image}
        alt={`Image `}
        width={1000}
        height={100}
        className={`w-full h-full rounded-xl object-fill`}
      />
    </div>
  );
};

export default BannerBox;
