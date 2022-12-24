import React from "react";

import styles from "../Message/MessageContent.module.css";

const GroupedMsgDate = ({ data }) => {
  return (
    <React.Fragment>
      <div className={styles.dateStamp}>
        <span>{data}</span>
      </div>
    </React.Fragment>
  );
};

export default GroupedMsgDate;
