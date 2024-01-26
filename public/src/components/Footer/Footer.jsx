import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
 <div>
       <div className="py-16  bg-contact">
      <div className="flex justify-center items-center flex-wrap gap-32">
        <div>
          <p class="text-zinc-900 text-2xl font-normal font-['URWImperialW01-Regular'] leading-[58px]">
            Major Abdul Ghani Foundation
          </p>
          <p class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">
            01727850240, 01711524584
          </p>
          <p class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">
            004407534761341 (WhatsApp)
          </p>
          <p class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">
            20 Seacole Close, Blackblurl, Lancashire,
            <br />
            BB1 2RA, UK
          </p>
        </div>

        <div>
          <div className="w-[285px] h-[210px] relative">
            <div className="left-0 top-0 absolute text-zinc-900 text-2xl font-normal font-['URWImperialW01-Regular'] leading-[34px]">
              Important Links
            </div>
            <Link
              to="/"
              className="left-0 top-[54px] absolute text-zinc-800 text-base font-normal font-['Inter'] leading-normal"
            >
              Home
            </Link>
            <Link
              to="/timeline"
              className="left-0 top-[90px] absolute text-zinc-800 text-base font-normal font-['Inter'] leading-normal"
            >
              Timeline
            </Link>
            <Link
              to="/speeches"
              className="left-0 top-[126px] absolute text-zinc-800 text-base font-normal font-['Inter'] leading-normal"
            >
              Speeches
            </Link>

            <Link
              to="/recognition"
              className="left-0 top-[162px] absolute text-zinc-800 text-base font-normal font-['Inter'] leading-normal"
            >
              Recognition
            </Link>
            <Link
              to="/photo-archives"
              className="left-0 top-[198px] absolute text-zinc-800 text-base font-normal font-['Inter'] leading-normal"
            >
              Photo Archives
            </Link>
          </div>
        </div>

        <div>
          <div class="w-[330px] h-[222px] relative">
            <div class="left-0 top-[54px] absolute text-zinc-800 text-base font-normal font-['Inter'] leading-normal">
              Email*
            </div>
            <div class="w-[330px] h-14 left-0 top-[90px] absolute">
              <div class="left-[20px] top-[22px] absolute text-zinc-500 text-[15px] font-normal font-['Inter'] leading-normal">
                Enter you mail
              </div>
              <input
                class="w-[330px] h-14 left-0 top-0 absolute border border-zinc-900"
                type="text"
              />
            </div>
            <div class="w-[140px] h-14 px-[43px] py-[22px] left-0 top-[166px] absolute bg-zinc-900 justify-center items-center gap-2.5 inline-flex">
              <button class="text-white text-base font-medium font-['Inter'] leading-normal">
                Submit
              </button>
            </div>
            <div class="left-0 top-0 absolute text-zinc-900 text-2xl font-normal font-['URWImperialW01-Regular'] leading-[34px]">
              Send Mail
            </div>
          </div>
        </div>
      </div>
    </div>
            <div class="py-4 text-zinc-800 text-center text-[15px] font-medium font-['Inter'] capitalize leading-normal">copyright major ghani foundation</div>

 </div>
  );
};

export default Footer;
