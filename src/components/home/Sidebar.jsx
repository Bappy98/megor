// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
   <div>
          
            {isOpen &&           <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>
}

     <div className={`fixed top-0 right-0 h-screen w-1/2  bg-white text-black z-10 p-6 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <button
        className="absolute top-4 right-4 text-lg cursor-pointer focus:outline-none"
        onClick={onClose}
      >
        &#x2716; {/* Unicode character for a cross mark */}
      </button>

      <div className="flex justify-start items-center py-8">

        <span className="bg-gray-700  text-white font-['URWImperialW01-Regular'] capitalize shadow-sm p-3">
            Major<br></br> A Ghani
        </span>

      </div>
      <ul className="flex flex-col gap-4 font-['URWImperialW01-Regular'] capitalize divide-y">
      <li>
              <Link to="/" onClick={onClose}>Home</Link>
            </li>
            <li>
              <Link to="/legachy"  onClick={onClose}>Legacies</Link>
            </li>
            <li>
              <Link to="/slider"  onClick={onClose}>Military Career</Link>
            </li>
            <li>
              <Link to="/anchor"  onClick={onClose}>Anchor</Link>
            </li>
            <li>
              <Link to="/timeline"  onClick={onClose}>Timeline</Link>
            </li>
            <li>
              <Link to="/allspeeach"  onClick={onClose}>Various Speeches</Link>
            </li>
            <li>
              <Link to="/photo"  onClick={onClose}>Photo</Link>
            </li>
            <li>
              <Link to="/event"  onClick={onClose}>Event</Link>
            </li>
           
        <li>
          <Link to="/contact" onClick={onClose}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
   </div>
  );
};

export default Sidebar;
