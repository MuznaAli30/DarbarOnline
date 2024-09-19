"use client";
import React, { useState, useEffect } from "react";
import Header from '../../Components/HeaderFooter/Header'
import { FaPhone } from "react-icons/fa6";
import TheStory from '../../Components/HomeStyleTwo/TheStory'
import SpecialMenu from '../../Components/HomeStyleTwo/SpecialMenu'


export default function Page() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const images = [
    "/Assets/Images/hero1.webp",
    "/Assets/Images/hero2.webp",
    "/Assets/Images/hero3.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFadeIn(true);
      }, 450); // Duration of the fade-out effect
    }, 3500); // Total duration including fade effect

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[94vh]">
      Image as background
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          className="object-cover w-full h-[96vh]"
          src={images[currentImage]}
          alt={`hero${currentImage + 1}`}
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
      </div>
      <div className="relative z-[30] bg-black ">
        <Header />
      </div>
      <div className="absolute inset-0 flex items-center justify-evenly max-lg:flex-col max-lg:mt-10 ">
        <div className="">
          <div className="text-8xl font-semibold text-[#eddcdc] mb-10 font-sans max-lg:m-5">
            We Only Serve A <br />
            Delicious Dishes
          </div>
          <div className="text-[#cdbba2] text-xl w-[60%]">
            The only thing we’re serious about is food. We will wait for your
            seat in our restaurant and satisfy your self with quality food.
          </div>
          
            <div className="flex flex-row  items-center ">
              <button className="bg-[#DAA760] max-lg:m-5  mt-5 text-black w-56 p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
                MAKE A RESRVATION
              </button>
              <FaPhone className="text-[#DAA760] items-center m-5 mt-8 text-xl"/>
            <div className="text-[#cdbba2] text-xl mt-5">(+62) 81 224 557 900</div>

          </div>
        </div>
      </div>
      <TheStory/>
      {/* <SpecialMenu/> */}
    </div>
  );
}