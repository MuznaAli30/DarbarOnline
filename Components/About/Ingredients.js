import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import Content from '../HomeStyleOne/Content'
import OurCommitmentOfAbout from '../About/OurCommitmentOfAbout'

export default function Ingredients() {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly mb-44">
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-lg:w-[100%]">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">OUR STORY</div>
          </div>
          <div className="text-white text-5xl font-bold font-sans flex items-center">
          The Ingredients
          </div>
          <div className="text-cyan-50 flex justify-start">
            <p className="w-96 max-lg:w-[100%] text-[#cdbba2] mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              quem commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              et mus penatibus et magnis dis parturient montes, nascetur
              ridiculus.
            </p>
          </div>
          <div>
            <div className="w-80">
              <img src="/Assets/Images/Signature.webp" />
            </div>
            <div className="text-white font-medium text-2xl">
              Maynard Peters , CEO
            </div>
            <button className="font-mono bg-[#DAA760] mt-5 text-black w-44 p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
              RESREVE NOW
            </button>
          </div>
        </div>
        <div className=" bg-white flex -bottom-[168%] absolute justify-end">
        <div className="flex flex-col">
            <div className="flex flex-row ">
            <div className="bg-[#DAA760] h-[8vh] m-8 mr-5  w-1"></div>
          <div className="w-80 font-serif m-8 ml-0  text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          </div>
          <div className="m-8 mt-0">Maynard P .</div>
        </div>
        </div>

        <div>
          <img src="/Assets/Images/Ingredients.webp" className="w-full h-[90vh]"/>
        </div>
      </div>
      <Content/>
      <OurCommitmentOfAbout/>
    </>
  );
}