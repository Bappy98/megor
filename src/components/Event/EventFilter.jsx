import React, { useState } from 'react';


const EventFilter = ({ filterItem }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    filterItem(filterType);
    setShowDropdown(false); // Close the dropdown after selecting a filter
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex items-center justify-center">
      {/* Show buttons on larger screens */}
     <div className='flex justify-end item'>
     <div className=''>
      <ul className="hidden lg:flex justify-center items-center gap-4 font-normal font-['URWImperialW01-Regular'] capitalize">
        <li className={`bg-${activeFilter === "all" ? "majorbg text-white" : "gray-200"} text-black px-7 py-1.5 outline-gray-700 border rounded`}>
          <button onClick={() => handleFilterClick("all")}>
            All
          </button>
        </li>
        <li className={`bg-${activeFilter === "photo" ? "majorbg text-white" : "gray-200"} shadow-md text-black  px-7 py-1.5 outline-gray-700 border rounded`}>
          <button onClick={() => handleFilterClick("photo")}>
           Photos
          </button>
        </li>
        <li className={`bg-${activeFilter === "video" ? "majorbg text-white" : "gray-200"} shadow-md text-black  px-7 py-1.5 outline-gray-700 border rounded`}>
          <button onClick={() => handleFilterClick("video")}>
          Video
          </button>
        </li>
      </ul>
      </div>
     </div>

      {/* Show dropdown on smaller screens */}
      <div className="lg:hidden flex items-center mt-4">
       <div>
       <button
          className="bg-majorbg text-white px-8 py-1.5 outline-gray-700 border rounded"
          onClick={handleToggleDropdown}
        >
          Filter
        </button>
        {showDropdown && (
          <div className="relative  right-0 bg-white  mt-2">
            <ul className="flex flex-col gap-2 p-2 text-2xl">
              <li className={`text-center cursor-pointer px-2  shadow-md text-black  py-1.5 outline-gray-700 border rounded-lg ${activeFilter === "all" && "text-majorbg"}`} onClick={() => handleFilterClick("all")}>All</li>
              <li className={`text-center cursor-pointer shadow-md px-2 text-black py-1.5 outline-gray-700 border rounded-lg ${activeFilter === "photo" && "text-majorbg"}`} onClick={() => handleFilterClick("photo")}>Photos</li>
              <li className={`text-center cursor-pointer shadow-md px-2 rounded-lg text-black   py-1.5 outline-gray-700 border  ${activeFilter === "video" && "text-majorbg"}`} onClick={() => handleFilterClick("video")}>Video</li>
            </ul>
          </div>
        )}
       </div>
      </div>
    </div>
  );
};

export default EventFilter;
