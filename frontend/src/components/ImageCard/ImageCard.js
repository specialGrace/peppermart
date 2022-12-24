import React from "react";
import styles from "./ImageCard.module.css";
import Image from "next/image";

const ImageCard = ({ image, title, subTitle, short_desc, misc }) => {
  return (
    <div className={styles.container}>
      <div className="imageContainer">
        <Image src={image} alt="profile" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <div>
          <span>{title}</span>
          <span>{subTitle}</span>
        </div>
        <div>
          <span>{short_desc}</span>
          <span>{misc}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
