import React from "react";
import { ImArrowLeft } from "react-icons/im";
import styles from "./Modal.module.css";

const Modal = ({ children, bgColor, showChatBoxHandler }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <div className={styles.back}>
        <ImArrowLeft
          className={styles.arrowIcon}
          onClick={showChatBoxHandler}
        />
      </div>
      {children}
    </div>
  );
};

export default Modal;
