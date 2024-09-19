import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import Ingredients from '../About/Ingredients';


export default function page() {
  return (
    <>
      <div className="bg-black items-center justify-center flex relative flex-row ml-0 max-lg:flex-col max-lg:m-2 my-44">
        <div className="flex justify-start right-96 relative opacity-90 max-lg:mb-10 max-xl:w-[80%] max-xl:mx-16">
          <img
            src="/Assets/Images/AboutOurStory1.webp"
            className="  h-[75vh]  max-lg:w-full"
          />
          <img
            className="absolute h-[60vh] w-[40%] bottom-[5%] left-[75%]  max-lg:w-full max-lg:right-[0%]"
            src="/Assets/Images/TheStory22.webp"
          />
        </div>
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-lg:w-[100%]">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">OUR STORY</div>
          </div>
          <div className="text-white text-5xl font-bold font-mono flex items-center">
            The Story
          </div>
          <div className="text-cyan-50 flex justify-start">
            <p className="w-96 max-lg:w-[100%] text-[#cdbba2] mt-5 mb-5">
              Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite.
              Aenean quis commodoo ligula eget dolor. Aeneanan massa. Cum socies
              natoque penatibus etapi magnis dis parturients montes, nascetur
              ridiculus mus cume. Donenect quam felis, ultricies nec,
              pellentesque eu, pretiumus quis, sem In.
            </p>
          </div>
          <div className="flex flex-row items-center mb-5 gap-5">
            <div className="flex flex-col">
              <div className="text-white text-3xl font-sans">25</div>
              <div className="text-[#cdbba2] font-light">Year Experience</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white text-3xl font-sans">15</div>
              <div className="text-[#cdbba2] font-light">Expert Chefs</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white text-3xl font-sans">19</div>
              <div className="text-[#cdbba2] font-light">Happy Customers</div>
            </div>
          </div>
          <div className="text-white text-xl mb-2">SPECIALITIES</div>

          <div className=" text-[#cdbba2] grid grid-cols-2 gap-4  max-lg:flex max-lg:flex-col">
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Fine Dining
            </div>
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Food Catering
            </div>
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Food Delivery
            </div>
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Wedding Ceremony
            </div>
          </div>
        </div>
      </div>
      <Ingredients/>
    </>
  );
}