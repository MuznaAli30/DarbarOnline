import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import OurCommitment from "../ReserveOne/OurCommitment";
import Image from "next/image";
import FormOnePic from "../../public/Assets/Images/FormOne.webp";

export default function FormOne() {
  return (
    <>
      <div className="flex items-center justify-center flex-row gap-56 mt-16 max-lg:flex-col max-lg:w-[90%] max-sm:overflow-x-hidden max-sm:w-[90%]">
        <div className="flex flex-col items-center justify-start max-sm:items-center max-sm:justify-center">
          <div className="text-[#DAA760] mr-40 max-sm:mr-0 max-sm:w-full flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-sm:items-center max-sm:justify-center">
            <div className="flex flex-row items-center justify-start max-sm:items-center max-sm:justify-center max-sm:w-[90%] ">
              <IoRemoveOutline className="text-7xl font-extrabold " />
              <div className="text-xl">YOUR DETAILS</div>
            </div>
            <div className="text-white text-5xl font-bold font-mono flex items-center max-lg:justify-center max-lg:w-[90%] max-lg:text-2xl">
              Reserve A Table
            </div>
          </div>

          {/* all input fields with button */}
          <div className="mt-5 max-sm:w-[90%]">
            {/* first 2 input fields in row */}
            <div className="flex flex-row max-lg:flex-col items-center justify-center gap-5 max-sm:w-full">
              <div className="flex flex-col max-sm:w-[90%] w-full">
                <label className="text-white text-lg mb-3">
                  NAME <span className="text-[#DAA760]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="p-5 bg-[#1A1C1D] text-white hover:border hover:border-[#DAA760] h-16 w-[95%]"
                />
              </div>
              <div className="flex flex-col max-sm:w-[90%] w-full">
                <label className="text-white text-lg mb-3">
                  EMAIL ADDRESS <span className="text-[#DAA760]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="mail@mail.com"
                  className="p-5 bg-[#1A1C1D] text-white hover:border hover:border-[#DAA760] h-16 w-[95%]"
                />
              </div>
            </div>

            {/* 3rd input field */}
            <div className="flex flex-col mt-5">
              <label className="text-white text-lg mb-3">
                MOBILE NUMBER <span className="text-[#DAA760]">*</span>
              </label>
              <input
                type="tel"
                placeholder="(00) 8812345678"
                className="p-5 bg-[#1A1C1D] text-white hover:border hover:border-[#DAA760] h-16"
              />
            </div>

            {/* 4th and 5th input fields in row */}
            <div className="flex flex-row gap-5 items-center justify-center mt-5 max-lg:flex-col ">
              <div className="flex flex-col w-full">
                <label className="text-white text-lg mb-3">
                  DATE <span className="text-[#DAA760]">*</span>
                </label>
                <input
                  type="date"
                  className="p-5  bg-[#1A1C1D] text-white hover:border hover:border-[#DAA760] h-16"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-white text-lg mb-3">
                  TIME <span className="text-[#DAA760]">*</span>
                </label>
                <input
                  type="time"
                  className="p-5 bg-[#1A1C1D] text-white hover:border hover:border-[#DAA760] h-16"
                />
              </div>
            </div>

            {/* 6th input field */}
            <div className="flex flex-col mt-5">
              <label className="text-white font-mono text-lg mb-3">
                NUMBER OF PERSON <span className="text-[#DAA760]">*</span>
              </label>
              <select
                className="p-6 cursor-pointer bg-[#1A1C1D] text-white hover:border hover:border-[#DAA760] h-16"
                defaultValue=""
              >
                <option className="p-9" value="1">
                  1 Person
                </option>
                <option className="p-9" value="2">
                  2 Person
                </option>
                <option className="p-9" value="3">
                  3 Person
                </option>
                <option className="p-9" value="4">
                  4 Person
                </option>
              </select>
            </div>

            {/* submit button */}
            <div className="flex items-center justify-start">
              <button className="font-mono h-16 w-[45%] max-sm:w-full bg-[#DAA760] mt-5 text-black p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
                MAKE A RESERVATION
              </button>
            </div>
          </div>
        </div>
        <div className="max-sm:w-[90%]">
          <Image src={FormOnePic} alt="Form Visual" />
        </div>
      </div>
      <OurCommitment />
    </>
  );
}
