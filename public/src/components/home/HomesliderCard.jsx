import React, { useEffect, useState } from "react";

import Slider2 from "../slider/Slider2";
import Slider1 from "../slider/Slider1";
import Slider3 from "../slider/Slider3";


const sliders = [Slider2,Slider1,  Slider3];

const HomesliderCard = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentState((prevState) => (prevState + 1) % sliders.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const SliderComponent = sliders[currentState];

  return (
    <div className="bg-majorbg py-4">
      <div className="py-16 relative   mx-auto ">
        {/* Your existing code for social icon, home text, and home image */}
        <SliderComponent />
      </div>
      <div className="flex justify-center items-center py-4">
        {sliders.map((_, index) => (
          <samp
            key={index}
            className={`h-4 w-4 p-2 rounded-full mx-2 cursor-pointer ${
              index === currentState ? "bg-gray-100" : "bg-gray-700"
            }`}
            onClick={() => setCurrentState(index)}
          ></samp>
        ))}
      </div>
    </div>
  );
};

export default HomesliderCard;