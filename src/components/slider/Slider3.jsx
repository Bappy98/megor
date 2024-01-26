import React from "react";
import img1 from './../../assets/image/political.png'
import { FaFacebook, FaWikipediaW, FaYoutube, FaStar } from "react-icons/fa";

const Slider3 = () => {
  return (
    <div className="bg-majorbg pt-16 py-8">
      <div className="grid grid-cols-12 lg:grid-cols-12 gap-8 mx-auto w-full p-4 items-center">
        <div className="lg:col-span-7 col-span-12 text-white lg:pl-16 pl-4 w-full text-center lg:text-left">
          <div className=" flex justify-center items-center">
          <div className="relative">
            <span className="text-white 2xl:text-7xl xl:text-7xl lg:text-6xl text-4xl font-normal font-['URWImperialW01-Regular'] capitalize "> Architect of Nation</span>

            <div className="flex items-center  gap-4 mt-6">
              <span className="text-white 2xl:text-7xl xl:text-7xl lg:text-6xl text-4xl font-normal font-['URWImperialW01-Regular'] capitalize ">Building </span>
              <div className="lg:mt-8 mt-6">
                <button className="flex items-center justify-center text-white border border-gray-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full font-medium  text-sm px-5 py-2.5 text-center hover:text-black me-2 mb-2 dark:hover:text-black dark:hover:bg-white dark:focus:ring-white">
                  <FaStar className="mx-1" size={15} />
                  <FaStar className="mx-1" size={15} />
                  <FaStar className="mx-1" size={15} />
                </button>
              </div>
            </div>
          </div>
          </div>

         {/* <div className="lg:block hidden">
         <div className="flex gap-3 items-center  top-[10rem] relative">
            <span className="text-white text-base font-medium font-['Inter'] uppercase leading-relaxed">Follow -</span>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} style={{ marginRight: 10 }} />
            </a>
            <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">
              <FaWikipediaW size={20} style={{ marginRight: 10 }} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} />
            </a>
          </div>
         </div> */}
        </div>
        <div className="lg:col-span-5 col-span-12 text-white order-first w-full mx-auto lg:order-2">
          <img src={img1} className="lg:h-[600px] lg:w-full w-[340px] h-[300px] mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider3;
