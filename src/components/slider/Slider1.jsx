import React from "react";
import img1 from "../../assets/image/17.jpg";
import { FaFacebook, FaWikipediaW, FaYoutube } from "react-icons/fa";


const Slider1 = () => {
  return (
    <div className="bg-majorbg pt-16 py-8p px-1 ">
      <div className="grid grid-cols-12 lg:grid-cols-12 flex-col-reverse gap-8 mx-auto w-full ">
        <div className="lg:col-span-8 col-span-12 text-white lg:pl-16  w-full text-justify">
          <span className="text-white px-1 lg:text-3xl text-lg font-normal mx-auto font-['URWImperialW01-Regular'] leading-relaxed">
            Founder of East Bengle Regiment
          </span>

          <div className="text-justify text-white text-[14px] px-1 font-normal font-['URWImperialW01-Regular'] py-2">
            "You will form part of the first unit and I hope will show to the world that Bangali Muslims are as good soldiers as any."
          </div>

         <div className="lg:block hidden">
         <div className=" text-white text-[12px] flex justify-end font-normal font-['Inter'] leading-relaxed">
            General Sir Frank Messervy, KSSI, KBE, CB, DSO, the first
            <br />
            Commander in Chief of Pakistan Army
            <br />
            17th August 1947
          </div>
         </div>

          <div className="py-4  lg:block hidden">
            <span className="text-white text-[20px] font-normal font-['URWImperialW01-Regular'] leading-loose">
              "On the 15th of February 1948, the East Bengal Regiment was raised at Kurmitola, Dhaka under the prudent leadership of late Major Mohammad Abdul Gani. Until the Great Liberation War of 1971, there were 8 battalions of the East Bengal Regiment with their remarkable achievements."
              <br />
            </span>
            <span className="flex  justify-end text-white text-base font-normal font-['Inter'] underline leading-loose">
              <a href="https://www.army.mil.bd/History">"https://www.army.mil.bd/History</a>
            </span>
          </div>
          <div className="py-4 lg:block hidden">
            <span className="text-white text-[15px] font-normal font-['URWImperialW01-Regular'] leading-loose">
            ১৫ই ফেব্রুয়ারী জাতির ইতিহাসে একটি স্মরণীয় দিন। ১৯৪৮ সালে এই দিনে বাংলা মায়ের
সন্তানদের নিয়ে "ইট বে গেম রেজিমেন্ট" নামে একটি নিয়মিত পদাতিক বাহিনী গঠিত হয়। শত
বাধা বিপত্তির মুখেও "ইট বে গেম রেজিমেন্ট" বীর শৈনিকরা বীরত্ব ও দক্ষতার পরিচয় দিয়ে গৌরব
অর্জণ করেছেন দ্বিগুন প্রতিকূল অবস্থার মধ্যেও বাংলীর মাথা চির উন্নত রেখেছেন!
পাক হানাদার বাহিনীর বিরুদ্ধে বাংলার স্বাধীনতা সংগ্রামে নির্ভীকভাবে আপনারা জনতার সাথে কীধ
কীধ মিলিয়ে লড়াই করেছেন।            <br />
            </span>
            <span className="text-white text-base font-normal font-['Inter'] mx-auto flex justify-end leading-loose">
              Bangobandhu Sheikh Mujibur Rahman
            </span>
          </div>

          <div>
            
     {/* <div className="flex gap-3 items-center">
     <span class="text-white text-base font-medium font-['Inter'] uppercase leading-relaxed">Follow -</span>
     <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={22} style={{ marginRight: 10 }} />
      </a>
      <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">
        <FaWikipediaW size={22} style={{ marginRight: 10 }} />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={22} />
      </a>
     </div> */}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12 text-white order-first w-full mx-auto lg:order-2 " >
          <img src={img1} className="lg:h-[600px] lg:w-full w-[330px] h-[300px] mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider1;
