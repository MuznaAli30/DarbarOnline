import React from "react";
import { IoRemoveOutline } from "react-icons/io5";

export default function page() {
  return (
    <>
      <div className="bg-black flex justify-around items-center flex-col">
        <div className="flex relative top-10 flex-col max-lg:top-0 max-lg:m-5 ">
          <div className="flex text-[#DAA760] flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl ">MENUS</div>
          </div>
          <div className="text-white text-5xl font-bold font-sans mb-7 flex items-center justify-start">
            Our Menus
          </div>
          <div className="text-[#cdbba2] w-[50%] max-lg:w-[90%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <div className="mb-40 max-lg:mb-0 flex flex-row mt-16 justify-around items-center gap-10 opacity-85 max-lg:flex-col">
            <div>
              <img
                src="/Assets/Images/OurMenus1.webp"
                className="hover:scale-110 cursor-pointer duration-500 hover:opacity-65"
              />
              <div className="flex flex-col m-10 items-center justify-around text-center">
                <div className="text-[#DAA760] text-xl font-semibold hover:text-[#f7f0e6] hover:scale-125 duration-500 cursor-pointer">
                  APPETIZER
                </div>
                <div className="text-[#f7f0e6]">Snacks / Salads / Soups</div>
              </div>
            </div>
            <div>
              <img
                src="/Assets/Images/OurMenus2.webp"
                className="hover:scale-110 cursor-pointer duration-500 hover:opacity-65"
              />
              <div className="flex flex-col m-10 items-center justify-around text-center">
                <div className="text-[#DAA760] text-xl font-semibold hover:text-[#f7f0e6] hover:scale-125 duration-500 cursor-pointer">
                MAIN DISH
                </div>
                <div className="text-[#f7f0e6]">Steaks / Grills / Pasta</div>
              </div>
            </div>
            <div>
              <img
                src="/Assets/Images/OurMenus3.webp"
                className="hover:scale-110 cursor-pointer duration-500 hover:opacity-65"
              />
              <div className="flex flex-col m-10 items-center justify-around text-center">
                <div className="text-[#DAA760] text-xl font-semibold hover:text-[#f7f0e6] hover:scale-125 duration-500 cursor-pointer">
                  DESSERT
                </div>
                <div className="text-[#f7f0e6]">Ice Cream / Cake / Pudding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}