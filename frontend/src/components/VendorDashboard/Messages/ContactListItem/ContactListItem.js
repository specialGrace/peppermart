import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ContactListItem.module.css";

const ContactList = ({ item, showChatBoxHandler }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResizeCallBack = useCallback(function handleResize() {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    // Handler to call on window resize
    handleResizeCallBack();
    // Add event listener
    window.addEventListener("resize", handleResizeCallBack);
    // Call handler right away so state gets updated with initial window size
    handleResizeCallBack();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResizeCallBack);
  }, []); // Empty array ensures that effect is only run on mount

  console.log(windowSize, "window");
  const contactHandler = (id) => {
    showChatBoxHandler();
  };

  return (
    <div
      className={styles.contactListItem}
      onClick={windowSize.width < 1024 ? () => contactHandler(item.id) : null}
    >
      <div className={styles.profile}>
        <Image src={item.image} alt="profile" layout="fill" objectFit="cover" />
        <div
          className={styles.status}
          style={{ backgroundColor: item.isOnline ? "green" : "" }}
        ></div>
      </div>
      <div className={styles.contactDetail}>
        <div className={styles.contactDetail__header}>
          <span>{item.name}</span>
          <span className={styles.contactDetail__new}>
            {item.new ? "new" : ""}
          </span>
        </div>
        <div className={styles.contactDetail__body}>
          <span>{item.short_desc}</span>
          <span>{item.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
