import React from "react";
import Image from "next/image";

import styles from "./MessageContent.module.css";

const ProductInfo = ({ product_conversations }) => {
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.imageContainer}>
        <Image
          src={product_conversations[0].image}
          alt="profile"
          width={30}
          height={30}
        />
      </div>
      <div
        className={styles.content}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <span style={{ color: "var(--dark60)", fontSize: "12.99px" }}>
            {product_conversations[0].title}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
          }}
        >
          <span style={{ color: "var(--dark80)", fontSize: "12.99px" }}>
            {product_conversations[0].price}
          </span>
          <span style={{ color: "var(--skyblue100)", fontSize: "10.2px" }}>
            {product_conversations[0].noInStock} in stock
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
