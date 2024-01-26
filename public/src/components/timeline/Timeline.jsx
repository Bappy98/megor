import React, { useState } from 'react';
import timelineDetails from './timelineDetails.js';
import TimelineFilter from './TimelineFilter.jsx';
import SingleTimeline from './SingleTimeline.jsx';

const Timeline = () => {
  const [items, setItems] = useState(timelineDetails);

  const filterItem = (timelineType) => {
    if (timelineType === 'all') {
      setItems(timelineDetails);
    } else {
      const updatedItems = timelineDetails.filter((photoItem) => {
        return photoItem.type === timelineType;
      });
      setItems(updatedItems);
    }
  };

  return (
    <div className="py-[70px]">
      <div className="w-full h-px bg-zinc-800"></div>
      <div className="py-12 bg-majorbg">
        <h1 className="text-center text-white text-[40px] font-normal font-['URWImperialW01-Regular'] capitalize leading-[50px]">Timeline</h1>
      </div>

      <div className="py-16 ">
        <TimelineFilter filterItem={filterItem} />
      </div>

      {items.map((info, index) => {
  const { sl, title, image, type, desc } = info;
  const formattedDesc = desc.replace(/<br>/g, '</p><p class="mt-3">');

  return (
    <div key={sl}>
      <SingleTimeline title={title} image={image} desc={formattedDesc} sl={sl} index={index} />
    </div>
  );
})}

      {/* Popup */}
    </div>
  );
};

export default Timeline;
