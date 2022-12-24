import React from "react";
import styles from "./CardBox.module.css";

const CardBox = ({ children }) => {
  return (
    <div className="max-w-2/5 min-h-[150px] drop-shadow-md bg-white rounded-xl p-6 my-3">
      {children}
    </div>
  );
};

export default CardBox;
