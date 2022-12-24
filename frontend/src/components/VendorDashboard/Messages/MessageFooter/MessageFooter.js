import React from "react";
import { FaPlus, FaRegSmile } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

import styles from "./MessageFooter.module.css";

const MessageFooter = () => {
  return (
    <div className={styles.messageFooter}>
      <FaPlus className={styles.addMessage} />
      <input type="text" placeholder="Your message" className={styles.input} />
      <FaRegSmile className={styles.emoji} />
      <div className={styles.sendMessage}>
        <span>send</span>
        <RiSendPlaneFill />
      </div>
    </div>
  );
};

export default MessageFooter;
