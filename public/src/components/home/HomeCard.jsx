import React from 'react'
import homeimg from '../../assets/image/home.png'
import arcitect from '../../assets/image/articitect.png'
import political from '../../assets/image/political.png'
import { Link } from 'react-router-dom'
const HomeCard = () => {

    const info =[
        {
            title: "Birth of a Warrior",
            name: homeimg,
            sl: 1,
            linkto:"birth",
            desc: " It was Sunday 1st December 1919, early morning that a Ghani, founder of the East Bengal Regiment in the village of Nagaish. ",
          },
          {
            title: "The Founder of the East Bengal Regiment ",
            name: arcitect,
            
            linkto:"east",
            sl: 2,
            desc: "When the dark shadows of World War 2 were looming over the Indian Subcontinent Major Ghani was serving in the.",
          },
          {
            title: "Architect of Nation Building ",
            name: political,
            linkto:"political",
            sl: 3,
          
            desc: " Major A Ghani was a multi-dimensional leader and a statesman who did not give in to pressure as he was above party.",
          },
         
    ]
  return (
    <>
    <div className="flex flex-wrap justify-center gap-8 py-8 mt-8">
    {
        info.map((info)=>(
            <div key={info.sl}
  class="relative flex md:max-w-[28rem] max-w-[22rem] rounded-md flex-col overflow-hidden  bg-white bg-clip-border border border-black shadow">
  <div class="relative m-0 overflow-hidden  bg-transparent rounded-none shadow-none bg-clip-border p-2">
    <img
      src={info.name} alt='' />
  </div>
  <div class="p-6 ">
    <h4 class="text-zinc-900 min-h-[110px] lg:text-[40px] tex font-normal font-['URWImperialW01-Regular']  capitalize leading-[46px]   block  text-2xl antialiased   tracking-normal text-blue-gray-900">
      {info.title}
    </h4>
    <p class="block mt-3 font-sans text-xl antialiased font-normal text-justify leading-relaxed text-gray-700">
     {info.desc}
    </p>
  </div>
  <div class=" p-6">
   <div className={info.sl===2 ?'w-[149px] h-11 px-[33px] hover:text-black hover:bg-white  bg-zinc-900 py-4 rounded-[100px] border border-zinc-900 justify-center items-center text-white gap-2.5 inline-flex':'w-[149px] h-11 px-[33px] text-black hover:bg-black hover:text-white py-4 rounded-[100px] border border-zinc-900 justify-center items-center gap-2.5 inline-flex'}>
   <Link to={info.linkto} >
  Read More
</Link>
   </div>
  </div>
</div> 
            
        ))
    }
      </div>
    </>
  )
}

export default HomeCard
