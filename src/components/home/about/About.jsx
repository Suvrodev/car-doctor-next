import React from "react";

import manImage from "../../../../public/assets/images/about_us/person.jpg";
import parsImage from "../../../../public/assets/images/about_us/parts.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-[500px] w-[80%] mx-auto flex flex-col md:flex-row gap-10 my-20 ">
      <div className="w-[50%] relative">
        <Image
          src={manImage}
          alt=""
          height={650}
          width={450}
          className="h-[80%] object-cover"
        />
        <Image
          src={parsImage}
          alt=""
          height={500}
          width={350}
          className="absolute h-[280px] bottom-0 right-0 border-8 border-[#FF3811]"
        />
      </div>
      <div className="w-[50%] relative">
        <p className="pText text-[20px] font-bold">About Us</p>
        <h1 className="text-[35px] font-bold my-4">
          We are qualified & of experience in this field
        </h1>
        <p className="leading-8">
          {`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.`}
        </p>
        <p className="leading-8 my-10">
          {` the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.`}
        </p>
        <button className="btn pColor hover:pColor text-white absolute bottom-0">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
