import React from "react";
import { Link } from "react-router-dom";

const SingleLegachy = ({ title, image, desc, index, linkto }) => {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={`lg:flex justify-center  items-center xl:px-72 gap-8 px-3 lg:px-44 py-7`}
    >
      <div className={`lg:w-[45%] w-full ${isOdd ? "lg:order-2" : ""}`}>
        <img src={image} className="w-full rounded-lg h-[500px] " alt="" />
      </div>
      <div className={`lg:w-[45%] w-full ${isOdd ? "lg:order-1" : ""}`}>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 font-['URWImperialW01-Regular']">
            {title}
          </h2>
          <p
            className="text-gray-700 font-['URWImperialW01-Regular']"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
          <div className="py-4  ">
            <Link
              to={linkto}
              className="p-2 bg-majorbg text-white rounded mt-4 font-['URWImperialW01-Regular']"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLegachy;
