import React from "react";

const Card1_5 = ({ children }) => {
  return (
    <div className="basis-full h-[180px] sm:basis-1/5 mx-12 md:mx-0 md:mr-3 mb-6 px-2  bg-white rounded-xl drop-shadow-md">
      {children}
    </div>
  );
};

export default Card1_5;



