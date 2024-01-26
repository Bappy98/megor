// Photo.jsx

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import EventFilter from "./EventFilter.jsx";
import EventDetails from "./EventDtails.jsx";

const EvenHome = () => {
  const [items, setItems] = useState(EventDetails);
  const [selectedItem, setSelectedItem] = useState(null);

  const filterItem = (photoType) => {
    if (photoType === "all") {
      setItems(EventDetails);
    } else {
      const updateItem = EventDetails.filter((photoItem) => {
        return photoItem.type === photoType;
      });
      setItems(updateItem);
    }
  };

  const openItem = (item) => {
    if (item.type === "video") {
      
      window.open(item.link, "_blank");
    } else {
      setSelectedItem(item);
    }
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="py-[70px]">
      <div className="w-full h-px bg-zinc-800"></div>
      <div className="py-12 bg-majorbg">
        <h1 className="text-center text-white text-[40px] font-normal font-['URWImperialW01-Regular'] capitalize leading-[50px]">
          Event & Media
        </h1>
      </div>

      <div className="py-16">
        <EventFilter filterItem={filterItem} />
      </div>

      <div className="flex justify-center items-center mx-20 py-16">
        <div className="flex flex-wrap justify-center items-center gap-16">
          {items.map((info) => {
            const { sl,  image } = info;
            return (
              <div key={sl} onClick={() => openItem(info)}>
                <img src={image} className="w-[12rem] h-[12rem]" alt="" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Popup */}
      {selectedItem && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>
          <div className="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[550px] h-[550px] w-[350px] lg:h-[550px] bg-white rounded-lg overflow-hidden">
            <div className="relative ">
              <AiOutlineClose
                className="absolute  w-6 h-6  top-1 right-1 text-zinc-900 rounded-full  bg-white  cursor-pointer border border-black  "
                onClick={closePopup}
              />
              <div className="flex justify-center p-3 pt-7">
                <img
                  src={selectedItem.image}
                  alt=""
                  className="w-full h-[400px]"
                />
              </div>
              <h2 className="text-lg text-center font-semibold p-4 h-[24]">
                {selectedItem.title}
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EvenHome;
