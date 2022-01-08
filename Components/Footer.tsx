import Link from "next/link";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <button className="bg-[#485769] h-12 w-full text-center text-white font-bold text-xs  ">
        Back to top
      </button>

      <div className="bg-[#232f3e] text-gray-300  h-[40rem] pt-20    ">
        <div className="   container mx-auto flex  justify-evenly ">
          {/* First */}
          <div className="flex  flex-col">
            <p className=" text-white font-bold mb-2">Get to Know Us</p>

            <Link href="#">
              <a className="mb-2">Careers</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Press Releases</a>
            </Link>

            <Link href="#">
              <a className="mb-2">About us</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Blog</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Sustainability</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Amazon Logistikblog</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Imprint</a>
            </Link>
          </div>

          {/* Second */}
          <div className="flex  flex-col">
            <p className=" text-white font-bold mb-2">Make Money with Us</p>

            <Link href="#">
              <a className="mb-2">Sell on Amazon</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Sell on Amazon Business</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Sell on Amazon Handmade</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Associates Programme</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Fulfilment by Amazon</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Seller Fulfilled Prime</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Advertise Your Products</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Independently Publish with Us</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Amazon Pay</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Host an Amazon Hub</a>
            </Link>

            <Link href="#">
              <a className="mb-2">See More Make Money with Us</a>
            </Link>
          </div>

          {/* third */}
          <div className="flex  flex-col">
            <p className=" text-white font-bold mb-2">Amazon Payment Methods</p>

            <Link href="#">
              <a className="mb-2">Shop with points</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Amazon Business Amex Card</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Credit Card</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Gift Cards</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Payment by Invoice</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Direct Debit</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Amazon Currency Converter</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Top Up Your Account</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Top Up Your Account in Store</a>
            </Link>
          </div>

          {/* fourth */}
          <div className="flex  flex-col">
            <p className=" text-white font-bold mb-2">Let Us Help You</p>

            <Link href="#">
              <a className="mb-2">COVID-19 and Amazon</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Track Packages or View Orders</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Delivery Rates & Policies</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Amazon Prime</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Returns & Replacements</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Recycling</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Manage Your Content and Devices</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Amazon Mobile App</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Amazon Assistant</a>
            </Link>

            <Link href="#">
              <a className="mb-2">Customer Service</a>
            </Link>
          </div>
        </div>

        <p className="mt-10 border-t-[0.1rem] w-full border-gray-500"></p>
        {/* w-48 */}
        <div className="flex container  w-96 mx-auto mt-10  items-center">
          <img className="h-6  mr-20 " src="/logo.png" alt="" />

          <div className="flex items-center  mx-auto justify-items-center">
            <button className="flex items-center mr-5 border px-8 h-9 border-gray-400">
              <AiOutlineGlobal className="mr-1" />
              <p>English</p>
            </button>

            <button className="flex items-center   px-8 h-9 border border-gray-400 ">
              <img
                src="/germanFlag.png"
                className="h-4 w-5 border mr-2"
                alt=""
              />
              <p> Germany</p>
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-[#131a22] ">
        <div className="container pt-10 text-xs mx-auto text-gray-300 flex  justify-evenly  ">
          <div>
            <div className="mb-5">
              <p className=" font-bold text-white"> Amazon Advertising</p>

              <Link href="#">
                <a>
                  Find, attract, and <br /> engage customers
                </a>
              </Link>
            </div>

            <div>
              <p className=" font-bold text-white">IMDb</p>

              <Link href="#">
                <a>Movies, TV & Celebrities</a>
              </Link>
            </div>
          </div>

          {/* second */}

          <div>
            <div className="mb-10">
              <p className=" font-bold text-white"> Amazon Music</p>

              <Link href="#">
                <a>Stream millions of songs</a>
              </Link>
            </div>

            <div>
              <p className=" font-bold text-white">Kindle Direct Publishing</p>

              <Link href="#">
                <a>Indie Digital & Print Publishing Made Easy</a>
              </Link>
            </div>
          </div>

          {/* second */}

          <div>
            <div className="mb-10">
              <p className=" font-bold text-white"> AbeBooks</p>

              <Link href="#">
                <a>Books, art & collectables</a>
              </Link>
            </div>

            <div>
              <p className=" font-bold text-white"> Shopbop</p>

              <Link href="#">
                <a>Designer Fashion Brands</a>
              </Link>
            </div>
          </div>

          {/* second */}

          <div>
            <div className="mb-10">
              <p className=" font-bold text-white"> AbeBooks</p>

              <Link href="#">
                <a>Books, art & collectables</a>
              </Link>
            </div>

            <div>
              <p className=" font-bold text-white"> Shopbop</p>

              <Link href="#">
                <a>Designer Fashion Brands</a>
              </Link>
            </div>
          </div>

          {/* second */}

          <div>
            <div className="mb-8">
              <p className=" font-bold text-white"> Audible</p>

              <Link href="#">
                <a>Download Audiobooks</a>
              </Link>
            </div>

            <div>
              <p className=" font-bold text-white"> ZVAB</p>

              <Link href="#">
                <a>
                  Centralized Directory <br />
                  of Antiquarian Books
                </a>
              </Link>
            </div>
          </div>

          {/* second */}

          <div>
            <div className="mb-5">
              <p className=" font-bold text-white"> Book Depository</p>

              <Link href="#">
                <a>
                  Books With Free <br /> Delivery Worldwide
                </a>
              </Link>
            </div>

            <div>
              <p className=" font-bold text-white"> Amazon Business</p>

              <Link href="#">
                <a>
                  Pay by Invoice. PO Numbers. <br /> For Business.
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className=" text-xs py-9 w-6/12 text-gray-300  container space-x-11  justify-items-center items-center  mx-auto flex flex-row ">
          <Link href="#">
            <a>Conditions of Use & Sale</a>
          </Link>

          <Link href="#">
            <a>Imprint</a>
          </Link>

          <Link href="#">
            <a>Cookies Notice</a>
          </Link>

          <Link href="#">
            <a>Interest-Based Ads Notice</a>
          </Link>

          <Link href="#">
            <a> &copy; 1996-2022, Amazon.com, Inc. or its affiliates</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
