import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="   flex items-center h-16 mt-0 text-white  px-5  bg-black ">
      <img src="/logo.png" alt="" className="h-6  " />
      <div className="ml-5 ">
        <p className="text-gray-400 font-bold text-xs">Hello</p>
        <div className="flex items-center font-bold  ">
          <HiOutlineLocationMarker className="mr-1 " />
          <p className="">Select your address</p>
        </div>
      </div>

      <form className="sm:w-full   md:w-6/12  ml-5 h-12 rounded">
        <div className="flex">
          <select
            className="bg-gray-100 text-black rounded rounded-r-none w-12 text-sm"
            name="cars"
            id="cars"
          >
            <option value="volvo">All</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <input className="  w-full h-11  " type="text" name="" id="" />
          <button className="h-11 rounded rounded-l-none w-11 bg-[#f3a847]">
            <AiOutlineSearch className=" ml-2 text-2xl  text-black " />
          </button>
        </div>
      </form>
      <div className="flex ml-10 items-center">
        <img className="w-6 h-6" src="/germanFlag.png" alt="" />
        <AiFillCaretDown className=" text-xs mt-2 ml-1" />
      </div>
      <div className=" ml-10 ">
        <p className="text-xs">Hello, Sign in</p>
        <p className="flex font-bold">
          Account & Lists
          <AiFillCaretDown className=" text-xs mt-2 ml-1" />
        </p>
      </div>
      <div className=" ml-10 ">
        <p className="text-xs">Return</p>
        <p className="flex font-bold">& Order</p>
      </div>
      <div className=" flex ml-11   ">
        <FiShoppingCart className="text-4xl" />
        <p className="text-xs">
          Shopping-
          <p className="font-bold ">& Order</p>
        </p>
      </div>
    </nav>
  );
};
