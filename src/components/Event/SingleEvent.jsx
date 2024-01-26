
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import img1 from '../../img/1.jpg';


import img6 from '../../img/119.jpeg';
import img7 from '../../img/120.jpeg';
import img8 from '../../img/121.jpeg';
import video1 from '../../img/vedio1.mp4';

const info = [
 
  {
    type: "image",
    name: img1,
    sl: 2,
    desc: " adipisicing elit. Dolores molestias reprehenderit, vitae quia, inventore nihil deserunt magni veritatis...",
  },
 
 

 

  {
    type: "image",
    name: img6,
    sl: 2,
    desc: " adipisicing elit. Dolores molestias reprehenderit, vitae quia, inventore nihil deserunt magni veritatis...",
  },
  {
    type: "image",
    name: img7,
    sl: 2,
    desc: " adipisicing elit. Dolores molestias reprehenderit, vitae quia, inventore nihil deserunt magni veritatis...",
  },
  {
    type: "image",
    name: img8,
    sl: 2,
    desc: " adipisicing elit. Dolores molestias reprehenderit, vitae quia, inventore nihil deserunt magni veritatis...",
  },
  {
    type: "video",
    name: video1,
    sl: 3,
    desc: "Lorem, ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit... lorme Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, doloremque!",
  },
 
];

function SingleEvent() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [model, setModel] = useState(false);
  const [temp, setTemp] = useState({});

  const getModel = (i) => {
    const selectedItem = info[i];
    setTemp(selectedItem);

    if (selectedItem.type === "image") {
      setModel(true);
    }
  };

  const toggleModal = () => {
    setModel(false);
  };

  return (
    <div className="">
    <div className="book-top">
    <div className='recog-top recog-top-text '>
            <h1 className='py-8 text-center  text-3xl font-semibold'>Event</h1>
        </div>
    </div>
    <div className="flex flex-wrap justify-center gap-16 py-8 mt-8">
      {info.map((inf, i) => (
        <div className="shadow-xl" key={inf.sl}>
          {inf.type === "image" ? (
            <img
              className="w-[290px] h-[300px] object-cover cursor-pointer"
              src={inf.name.default || inf.name}  // Adjusted to handle ES modules
              onClick={() => getModel(i)}
              data-aos="flip-right" data-aos-duration="1000" data-aos-delay="500"
              alt={inf.sl}
            />
          ) : (
            <div>
              <video
                className="w-full h-full object-cover cursor-pointer"
                controls
              >
                <source src={inf.name} className="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-6"></p>
            </div>
          )}
        </div>
      ))}
    </div>

    {model && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-8 z-50">
        <div
          onClick={toggleModal}
          className="absolute w-full h-full bg-opacity-90 bg-black"
        ></div>

        <div className="bg-gray-100 p-8 h-full relative mx-auto rounded-[10px]">
          <div className="">
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={toggleModal}
              >
                <span className="text-lg font-semibold">X</span>
              </button>
            </div>
            {model && <div className="text-lg mt-8"></div>}
            <div className="flex justify-center items-center">
              {model && temp.type === "image" && (
                <img
                  src={temp.name.default || temp.name}  // Adjusted to handle ES modules
                  alt=""
                  className="mt-4 w-full h-[380px]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )}
    <button
      className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Back to Top
    </button>
  </div>
  );
}

export default SingleEvent;
