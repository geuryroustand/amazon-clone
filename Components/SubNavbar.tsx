import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const SubNavbar = () => {
  return (
    <div className="bg-[#232f3e] w-full h-10 flex items-center gap-4 text-white">
      <div className="flex ml-4  cursor-pointer  hover:border  ">
        <AiOutlineMenu className="text-2xl font-bold pr-1" />

        <p className="font-bold">All</p>
      </div>

      <Link href="#">
        <a>Grocery</a>
      </Link>

      <Link href="#">
        <a>Best Sellers</a>
      </Link>

      <Link href="#">
        <a>Amazon Basics</a>
      </Link>

      <Link href="#">
        <a>Today´s Deal</a>
      </Link>

      <Link href="#">
        <a>New Releases</a>
      </Link>

      <Link href="#">
        <a>Customer Service</a>
      </Link>

      <Link href="#">
        <a>Prime</a>
      </Link>

      <Link href="#">
        <a>Gift Ideas</a>
      </Link>
      <Link href="#">
        <a>Books</a>
      </Link>
      <Link href="#">
        <a> PC & Video Games </a>
      </Link>
      <Link href="#">
        <a> Home & Kitchen </a>
      </Link>

      <Link href="#">
        <a> Electronics & Photo </a>
      </Link>
      <Link href="#">
        <a> Fashion </a>
      </Link>

      <img className="h-10 cursor-pointer" src="/flashSell.jpg" alt="" />
    </div>
  );
};
