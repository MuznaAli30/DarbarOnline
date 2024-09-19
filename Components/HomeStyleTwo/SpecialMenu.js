import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaAsterisk } from "react-icons/fa";

import Content from "./Content";
import OurMenu from '../HomeStyleOne/OurMenu'
import BestQualityFood from '../HomeStyleOne/BestQualityFood'

export default function SpecialMenu() {
  return (
    <>
    <div>
      <div className="bg-fixed-pic4 h-[100vh] opacity-95 w-full max-lg:w-[110%]">
        <div className="flex items-center justify-center m-auto h-full">
          {" "}
          <div className=" flex  items-center justify-center flex-col max-lg:flex-col max-lg:m-auto max-sm:w-[90%]">
      <div className="text-white flex flex-col items-center justify-center bg-white">
      <div className="m-5 flex mb-5 flex-row items-center justify-around">
        <div className="text-[#DAA760] text-xl font-serif text-center">
          <IoRemoveOutline className="text-7xl font-extrabold" />
        </div>
        <div className=" text-[#DAA760] text-xl font-serif text-center">
          THIS WEEK
        </div>
        <div className="text-[#DAA760] text-xl font-serif text-center">
          <IoRemoveOutline className="text-7xl font-extrabold" />
        </div>
      </div>
      <div className="text-5xl text-black font-bold ">Special menus</div>
      

      {/* menus */}
      <div className="flex flex-row gap-20 items-center justify-center m-10">
      {/* first menu colunm */}
      <div className="flex flex-col items-start text-black">
        <div className="flex flex-row justify-evenly mt-10 text-xl">

          
          <div className="mr-56">Pork Tenderloin Marinated In Yogurt</div>
          <div>$25</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3 "></div>
        <div className="text-gray-400">Pork / Tenderloin / Yogurt</div>


        <div className="flex flex-row justify-between w-full mt-10 text-xl">
          <div>Grilled Pork With Preserved Lemons</div>
          <div>
          $27</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Pork / Lemon / Onions</div>


        <div className="flex flex-row justify-between w-full mt-10 text-xl">
          <div>Roasted Prawns with Coriander
          </div>
          <div>
          $18</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Prawn / Coriander / Spices</div>{" "}


        <div className="flex flex-row justify-between w-full mt-10 text-xl">
          <div>Prawn Sausage Cassaoulet</div>
          <div>$25</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Prawn / Sausage / Tomato</div>{" "}


        <div className="flex flex-row justify-between w-full mt-10 text-xl">
          <div>
          Citrus Cured Salmon​ With Honey</div>
          <div>$20</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Salmon / Citrus / Honey / Spice.</div>
      </div>

      {/* second menu column */}
      <div className="flex flex-col items-start text-black">


        <div className="flex flex-row justify-evenly mt-10 text-xl">
          <div className="mr-56">Pork Tenderloin Marinated In Yogurt</div>
          <div>$25</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3 "></div>
        <div className="text-gray-400">Pork / Tenderloin / Yogurt</div>


        <div className="flex flex-row justify-between w-full mt-10 text-xl">
          <div>Grilled Pork With Preserved Lemons</div>
          <div>
          $27</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Pork / Lemon / Onions</div>


        <div className="flex flex-row justify-between w-full mt-10 text-xl">
          <div>Roasted Prawns with Coriander
          </div>
          <div>
          $18</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Prawn / Coriander / Spices</div>{" "}


        <div className="flex flex-row justify-between w-full mt-10 text-xl">
          <div>Prawn Sausage Cassaoulet</div>
          <div>$25</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Prawn / Sausage / Tomato</div>{" "}
        
        <div className="flex flex-row justify-between w-full mt-10 text-xl">
          <div>
          Citrus Cured Salmon​ With Honey</div>
          <div>$20</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Salmon / Citrus / Honey / Spice.</div>
      </div>
    </div>
    </div>
    </div>
      </div>
      </div>
    </div>
    <Content/>
    </>
  );
}