import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const PhotoFilter = ({ filterItem }) => {
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
        <li className={`bg-${activeFilter === "major" ? "majorbg text-white" : "gray-200"} shadow-md text-black  px-7 py-1.5 outline-gray-700 border rounded`}>
          <button onClick={() => handleFilterClick("major")}>
            Major
          </button>
        </li>
        <li className={`bg-${activeFilter === "anchor" ? "majorbg text-white" : "gray-200"} shadow-md text-black  px-7 py-1.5 outline-gray-700 border rounded`}>
          <button onClick={() => handleFilterClick("anchor")}>
            Anchor
          </button>
        </li>
      </ul>
      </div>
     </div>

      {/* Show dropdown on smaller screens */}
      <div className="lg:hidden flex items-center mt-4">
       <div>
       <button
          className="bg-majorbg text-white px-7 py-1.5 outline-gray-700 border rounded"
          onClick={handleToggleDropdown}
        >
          Filter
        </button>
        {showDropdown && (
          <div className="relative  right-0 bg-white shadow-md mt-2">
            <ul className="flex flex-col gap-2 p-2 text-2xl">
              <li className={`text-center cursor-pointer shadow-md text-black  py-1.5 outline-gray-700 border rounded ${activeFilter === "all" && "text-majorbg"}`} onClick={() => handleFilterClick("all")}>All</li>
              <li className={`text-center cursor-pointer shadow-md text-black py-1.5 outline-gray-700 border rounded ${activeFilter === "major" && "text-majorbg"}`} onClick={() => handleFilterClick("major")}>Major</li>
              <li className={`text-center cursor-pointer shadow-md text-black   py-1.5 outline-gray-700 border rounded ${activeFilter === "anchor" && "text-majorbg"}`} onClick={() => handleFilterClick("anchor")}>Anchor</li>
            </ul>
          </div>
        )}
       </div>
      </div>
    </div>
  );
};

export default PhotoFilter;
