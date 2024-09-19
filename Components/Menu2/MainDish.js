import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import Reserve1 from "../HomeStyleOne/Reserve1";
import Footer from "../HeaderFooter/Footer";

export default function MainDish() {
  return (
    <>
      <div className="flex flex-row items-center justify-around  my-32">
        <div>
          <img src="/Assets/Images/Menu2MainDish1.webp" />
        </div>
        <div className="flex top-[365%] left-[20%] absolute ">
          <img src="/Assets/Images/Menu2MainDish2.webp" />
        </div>
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-lg:w-[100%]">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">SAVORY</div>
          </div>
          <div className="text-white text-5xl font-bold font-sans flex items-center">
            Mani Dish
          </div>
          <div className="text-white flex flex-row justify-evenly mt-10 text-2xl">
            <div>Citrus Cured Salmon​ With Honey </div>
            <div className="text-[#DAA760]">
              ..............................................
            </div>
            <div> $25</div>
          </div>
          <div className="text-[#DAA760]">Salmon / Citrus / Honey / Spice.</div>
          <div className="text-white  flex flex-row justify-evenly mt-10 text-2xl">
            <div>Pork Tenderloin Marinated In Yogurt</div>
            <div className="text-[#DAA760]">
              .........................................
            </div>
            <div>$25</div>
          </div>
          <div className="text-[#DAA760]">Pork / Tenderloin / Yogurt</div>
          <div className="flex text-white  flex-row justify-between  mt-10 text-2xl">
            <div>Grilled Pork With Preserved Lemons</div>
            <div className="text-[#DAA760]">...........................</div>
            <div>$27</div>
          </div>
          <div className="text-[#DAA760]">Pork / Lemon / Onions</div>
          <div className="flex text-white  flex-row justify-between mt-10 text-2xl">
            <div>Roasted Prawns with Coriander</div>
            <div className="text-[#DAA760]">
              ...............................................
            </div>
            <div>$18</div>
          </div>
          <div className="text-[#DAA760]">Prawn / Coriander / Spices</div>{" "}
          <div className="flex text-white flex-row justify-between mt-10 text-2xl">
            <div>Prawn Sausage Cassaoulet</div>
            <div className="text-[#DAA760]">
              ..................................
            </div>
            <div>$25</div>
          </div>
          <div className="text-[#DAA760]">Prawn / Sausage / Tomato</div>{" "}
          <div className="flex text-white  flex-row justify-between mt-10 text-2xl">
            <div>Shrimp Scampy</div>
            <div className="text-[#DAA760]">
              ........................................................
            </div>
            <div>$12</div>
          </div>
          <div className="text-[#DAA760]">Shrimp / Cheese / Tomato</div>{" "}
        </div>
      </div>
      <Reserve1/>
      <Footer/>
    </>
  );
}
