import React, { useState } from 'react';
import LegachyDetails from './LegachyDetails.jsx';

import LegachyFilter from './LegachyFilter.jsx';
import SingleLegachy from './SingleLegachy.jsx';

const Legachy = () => {
  const [items, setItems] = useState(LegachyDetails);

  const filterItem = (timelineType) => {
    if (timelineType === 'all') {
      setItems(LegachyDetails);
    } else {
      const updatedItems = LegachyDetails.filter((photoItem) => {
        return photoItem.type === timelineType;
      });
      setItems(updatedItems);
    }
  };

  return (
    <div className="py-[70px]">
 <div className="w-full h-px bg-zinc-800"></div>
      <div className="py-12 bg-majorbg">
        <h1 className="text-center text-white text-[40px] font-normal font-['URWImperialW01-Regular'] capitalize leading-[50px]">The Legacies</h1>
      </div>

      <div className="py-16 ">
        <LegachyFilter filterItem={filterItem} />
      </div>

      {items.map((info, index) => {
  const { sl, title, image, type, desc,linkto } = info;
  const formattedDesc = desc.replace(/<br>/g, '</p><p class="mt-3">');

  return (
    <div key={sl}>
      <SingleLegachy title={title} linkto={linkto} image={image} desc={formattedDesc} sl={sl} index={index} />
    </div>
  );
})}

      {/* Popup */}
    </div>
  );
};

export default Legachy;
