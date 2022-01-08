import React from "react";
import { Cart } from "./Cart";

export const Heroe = () => {
  return (
    <section className="">
      <img src="/bg01.jpg" alt="" />
      <Cart
        titleFistCart="Exclusive benefits with Amazon Prime"
        imgFirstCart="/amazon-prime.jpg"
        footerTitleFistCart="Amazon Prime
        Start your 30 days Prime free trial now"
        titleSecondCart="Try Before You Buy"
        imgSecondCart="/showNow.jpg"
        footerTitleSecondCart="Shop now"
        titleThirdCart="Save on quality returned products"
        imgThirdCart="/show-amazon-wareHouse.jpg"
        footerTitleThirdCart="Shop on Amazon Warehouse"
      />
      {/* <Cart /> */}
    </section>
  );
};
