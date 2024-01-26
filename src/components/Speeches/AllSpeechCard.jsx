import React from 'react';
import { Link } from 'react-router-dom';

const AllSpeechCard = ({ sl, title, desc, onClick }) => {
  return (
    
      <Link to={`/speeches/${sl}`} onClick={onClick} className="relative flex md:max-w-[24rem] max-w-full  lg:max-w-[22rem] flex-col overflow-hidden   bg-clip-border border border-zinc-900 shadow p-4">
        <h2 className="lg:h-[180px] py-2 text-black text-2xl font-normal font-['URWImperialW01-Regular'] underline capitalize leading-[30px]">{title}</h2>
        <p class=" lg:h-[180px] py-2 text-black text-base font-normal font-['Inter'] leading-normal">{desc}</p>
        <div className='flex justify-center py-4 bottom-2'>
        <div class="w-[149px] h-11 px-[33px] py-4 rounded-[100px] border border-black justify-center items-center gap-2.5 inline-flex">
  <button class="text-black text-base font-medium font-['Inter'] leading-relaxed">Read More</button>
</div>
        </div>
    
      </Link>

      


  
  );
};

export default AllSpeechCard;
