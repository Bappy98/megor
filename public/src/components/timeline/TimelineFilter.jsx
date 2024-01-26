import React, { useState } from "react";

const TimelineFilter = ({ filterItem }) => {
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
      <div className="flex justify-end items-center">
        <div>
          <ul className="hidden lg:flex justify-center items-center gap-4 font-normal font-['URWImperialW01-Regular'] capitalize">
            <li className={`bg-${activeFilter === "all" ? "majorbg text-white" : "gray-200"} text-black px-7 py-1.5 outline-gray-700 border rounded`}>
              <button onClick={() => handleFilterClick("all")}>
                All
              </button>
            </li>
            <li className={`bg-${activeFilter === "born" ? "majorbg text-white" : "gray-200"} shadow-md text-black px-7 py-1.5 outline-gray-700 border rounded`}>
              <button onClick={() => handleFilterClick("born")}>
                Early Life
              </button>
            </li>
            <li className={`bg-${activeFilter === "education" ? "majorbg text-white" : "gray-200"} shadow-md text-black px-7 py-1.5 outline-gray-700 border rounded`}>
              <button onClick={() => handleFilterClick("education")}>
                Education
              </button>
            </li>
            <li className={`bg-${activeFilter === "east" ? "majorbg text-white" : "gray-200"} shadow-md text-black px-7 py-1.5 outline-gray-700 border rounded`}>
              <button onClick={() => handleFilterClick("east")}>
                East Bengal Regiment
              </button>
            </li>
            <li className={`bg-${activeFilter === "political" ? "majorbg text-white" : "gray-200"} shadow-md text-black px-7 py-1.5 outline-gray-700 border rounded`}>
              <button onClick={() => handleFilterClick("political")}>
                Political Career
              </button>
            </li>
            <li className={`bg-${activeFilter === "death" ? "majorbg text-white" : "gray-200"} shadow-md text-black px-7 py-1.5 outline-gray-700 border rounded`}>
              <button onClick={() => handleFilterClick("death")}>
                Death
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Show dropdown on smaller screens */}
      <div className="lg:hidden flex items-center mt-4">
        <div>
          <button
            className="bg-majorbg text-white px-28 py-1.5 outline-gray-700 border rounded"
            onClick={handleToggleDropdown}
          >
            Filter
          </button>
          {showDropdown && (
            <div className="relative right-0 bg-white shadow-md mt-2">
              <ul className="flex flex-col gap-2 p-2 text-2xl">
                <li
                  className={`text-center cursor-pointer shadow-md text-black py-1.5 outline-gray-700 border rounded ${activeFilter === "all" && "text-majorbg"}`}
                  onClick={() => handleFilterClick("all")}
                >
                  All
                </li>
                <li
                  className={`text-center cursor-pointer shadow-md text-black py-1.5 outline-gray-700 border rounded ${activeFilter === "born" && "text-majorbg"}`}
                  onClick={() => handleFilterClick("born")}
                >
                  Early Life
                </li>
                <li
                  className={`text-center cursor-pointer shadow-md text-black py-1.5 outline-gray-700 border rounded ${activeFilter === "education" && "text-majorbg"}`}
                  onClick={() => handleFilterClick("education")}
                >
                  Education
                </li>
                <li
                  className={`text-center cursor-pointer shadow-md text-black py-1.5 outline-gray-700 border rounded ${activeFilter === "east" && "text-majorbg"}`}
                  onClick={() => handleFilterClick("east")}
                >
                  East Bengal Regiment
                </li>
                <li
                  className={`text-center cursor-pointer shadow-md text-black py-1.5 outline-gray-700 border rounded ${activeFilter === "political" && "text-majorbg"}`}
                  onClick={() => handleFilterClick("political")}
                >
                  Political Career
                </li>
                <li
                  className={`text-center cursor-pointer shadow-md text-black py-1.5 outline-gray-700 border rounded ${activeFilter === "death" && "text-majorbg"}`}
                  onClick={() => handleFilterClick("death")}
                >
                  Death
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineFilter;
