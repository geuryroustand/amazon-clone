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
        secondCartCalled={false}
      />

      <Cart
        titleFistCart="Trainers from popular brands"
        imgFirstCart="/trainers.jpg"
        footerTitleFistCart="See more"
        titleSecondCart="Coffee & Espresso Machines"
        imgSecondCart="/caffe.jpg"
        footerTitleSecondCart="Discover now"
        titleThirdCart="Top Deal"
        imgThirdCart="/TopDeal.jpg"
        footerTitleThirdCart="Shop more deals"
        secondCartCalled={true}
      />
    </section>
  );
};
