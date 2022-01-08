import Link from "next/link";
import React from "react";

interface PropsInfo {
  titleFistCart: string;
  imgFirstCart: string;
  footerTitleFistCart: string;

  titleSecondCart: string;
  imgSecondCart: string;
  footerTitleSecondCart: string;

  titleThirdCart: string;
  imgThirdCart: string;
  footerTitleThirdCart: string;

  secondCartCalled: boolean;
}

export const Cart = ({
  titleFistCart,
  imgFirstCart,
  footerTitleFistCart,
  titleSecondCart,
  imgSecondCart,
  footerTitleSecondCart,

  titleThirdCart,
  imgThirdCart,
  footerTitleThirdCart,

  secondCartCalled,
}: PropsInfo) => {
  return (
    <div className=" ml-5 mb-4 flex gap-5 relative bottom-80 mr-5 ">
      <div className=" w-96 p-5 bg-white ">
        <p className="font-bold text-xl p-3">{titleFistCart}</p>

        <img src={imgFirstCart} className=" cursor-pointer " alt="" />
        <Link href="#">
          <a className=" p-5 text-xs font-bold text-[#007185]">
            {footerTitleFistCart}
          </a>
        </Link>
      </div>

      <div className=" w-96 p-5 bg-white ">
        <p className="font-bold text-xl p-3 ">{titleSecondCart}</p>

        <img
          src={imgSecondCart}
          className=" h-72 mb-4 cursor-pointer  "
          alt=""
        />
        <Link href="#">
          <a className=" p-5  text-xs font-bold text-[#007185]">
            {footerTitleSecondCart}
          </a>
        </Link>
      </div>

      {/* Third */}

      <div className=" w-96 p-5 bg-white ">
        <p className="font-bold text-xl p-3 ">{titleThirdCart}</p>

        <img
          src={imgThirdCart}
          className=" h-64 mb-4 cursor-pointer  "
          alt=""
        />
        <Link href="#">
          <a className=" p-5  text-xs font-bold text-[#007185]">
            {footerTitleThirdCart}
          </a>
        </Link>
      </div>

      {/* fourth */}

      <div className=" w-96 p-5 bg-white ">
        <p className="font-bold text-xl p-3 ">Shop in your currency</p>

        <img
          src="/ShopCurrency.jpg"
          className=" h-64 mb-4 cursor-pointer  "
          alt=""
        />
        <Link href="#">
          <a className=" p-5  text-xs font-bold text-[#007185]">Learn more</a>
        </Link>
      </div>

      {!secondCartCalled && (
        <div className=" w-96   h-36 p-5 bg-white ">
          <p className="font-bold text-xl p-3">
            experienceSign in for your best experience
          </p>

          <button className="   text-center text-xs bg-[#f7ca00] w-full rounded h-7">
            Sign in securely
          </button>
          <img src="/gifts.jpg" className=" pt-10 mt-1 w-80  h-72  " alt="" />
        </div>
      )}
    </div>
  );
};
