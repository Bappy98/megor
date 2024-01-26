import React from 'react';

const SingleTimeline = ({ title, image, desc, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className={`lg:flex justify-center items-center gap-8 py-7`}>
      <div className={`lg:w-[45%] w-full ${isOdd ? 'lg:order-2' : ''}`}>
        <img src={image} className="w-full rounded-lg" alt="" />
      </div>
      <div className={`lg:w-[45%] w-full ${isOdd ? 'lg:order-1' : ''}`}>
        <div className="p-4 bg-white rounded-lg shadow-md">
        <div class="text-zinc-900 lg:text-[34px] text-2xl font-normal font-['URWImperialW01-Regular'] underline capitalize leading-[140px]">{title}</div>

          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      </div>
    </div>
  );
}

export default SingleTimeline;
