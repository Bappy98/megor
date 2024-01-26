import React from 'react'
import homebig from '../../assets/image/30.jpg'

const Birth = () => {
  return (
    <div className="py-[70px]">
         <div class="w-full h-px bg-zinc-800"></div>
     <div className='py-12 bg-majorbg'>
    


     <h1 class="text-center text-white text-[40px] font-normal font-['URWImperialW01-Regular'] capitalize leading-[50px]">Birth of a Warrior</h1>

    </div>   


    <div className='mx-4 flex justify-center  p-4 items-center mt-4 pb-16'>
       <div>
      <div className='flex justify-center items-center'>
      <img src={homebig} alt="" className='w-[1200px] h-[600px]' />
      </div>
       <div className='md:mx-16 2xl:mx-72 xl-44  mx-4 text-justify'>
       <p class=" pt-5 text-neutral-600 text-base font-normal font-['Inter'] leading-relaxed">It was Sunday, 1st December 1919, early morning when A Ghani, founder of the East Bengal Regiment in the village of Nagaish, under Brmanpara Upazila in Comilla district, saw the first ray of light and wailed loudly to announce his arrival.</p>
        <p class="pt-5 text-neutral-600 text-base font-normal font-['Inter'] leading-relaxed">He was strong and survived the harsh conditions of that period, painfully losing his loving mother when he was two and a half years old. It broke the heart of his father, who initially did not agree with the idea of remarriage. However, seeing Ghani growing up without the care of a mother, he, with the pressure of his relatives, remarried.</p>
        <p class=" pt-5 text-neutral-600 text-base font-normal font-['Inter'] leading-relaxed">Although he was his father’s only son and loved one, he was more attached to his uncle’s family just close by. Most of his uncles were of his age, and they filled his life. They were well-established landlords with considerable chunks of landed property. There are many anecdotes of his childhood, but I would rather leave it here to do justice to the limited space.</p>
        <p class=" pt-5 text-neutral-600 text-base font-normal font-['Inter'] leading-relaxed">The picture of the bungalow was not there when he was born. It was erected in 1946 after WW2 when he returned home with the arrears of his salary and bought it for approximately Rs 3000 from a police officer in Assam while returning home. It still stands the weathering of time after surviving many storms.</p>

       </div>
       </div>
    </div>
    
    
       </div>
  )
}

export default Birth
