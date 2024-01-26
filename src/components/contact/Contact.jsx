import React from "react";
import { FaPhone } from "react-icons/fa";
import map from "../../assets/image/map.png";

const Contact = () => {
  return (
    <div className="py-[70px]">
      <div className="w-full h-px bg-zinc-800"></div>
    <div className="py-12 bg-majorbg">
      <h1 className="text-center text-white text-[40px] font-normal font-['URWImperialW01-Regular'] capitalize leading-[50px]">Contact</h1>
    </div>



    <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 py-16">





<div className="lg:col-span-8 col-span-12 p-4 flex justify-center border border-gray-400 m-3 items-center">
  <div className="flex gap-4 flex-wrap "> 
    <img src={map} className="lg:w-[350px] w-full mx-auto" alt="" />
    <div className="lg:w-[305px] h-[360px] w-full mx-auto border border-gray-400 bg-zinc-100">
      {/* Content inside the centered div */}
      <div className="flex justify-center items-center py-16">
      <FaPhone/>
      </div>
      <div class="text-center text-zinc-800 text-xl font-normal font-['URWImperialW01-Regular'] leading-normal">01727850240, 01711524584</div>
      <div class="text-center text-zinc-800 text-xl font-normal font-['URWImperialW01-Regular'] leading-normal">004407534761341 (WhatsApp)</div>
    </div>
  </div>
</div>
<div className="lg:col-span-4 col-span-12 border border-gray-900 m-3 p-4">
  <div>
  <div class="text-zinc-900 text-[32px] font-normal font-['URWImperialW01-Regular'] capitalize leading-[140px]">fillup the form</div>
    <div className="py-3 ">
      <input type="text" className="py-1 px-3 w-full bg-white shadow border border-zinc-900" placeholder="Enter your name" />
    </div>
    <div className="py-3">
      <input type="text" className="py-1 px-3 w-full bg-white shadow border border-zinc-900" placeholder="Enter your Email" />
    </div>
    <div className="py-3">
      <input type="text" className="py-1 px-3 w-full bg-white shadow border border-zinc-900" placeholder="Enter your phone" />
    </div>
    <div>
      <textarea name="" id="" className="py-1 px-3 w-full bg-white shadow border border-zinc-900" cols="20" rows="6" placeholder=" Enter your message"> </textarea>
    </div>
  </div>
</div>
</div>






    </div>

   
  );
};

export default Contact;
