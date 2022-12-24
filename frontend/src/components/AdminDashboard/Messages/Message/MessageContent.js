import React from "react";
import _ from "lodash";
import { MessageContainer } from "./MessageContainer";
import GroupedMsgDate from "../GroupedMsgDate/GroupedMsgDate";
import ProductInfo from "./ProductInfo";

import styles from "./MessageContent.module.css";

const MessageContent = ({ keys, groupedResults, product_conversations }) => {
  return (
    <div>
      {keys.length > 0 ? (
        keys.map((data, index) => {
          //group messages dates
          const grpMsg = <GroupedMsgDate key={index} data={data} />;

          //product info
          const prdtInfo = (
            <ProductInfo product_conversations={product_conversations} />
          );

          //product messages
          const msgs = groupedResults[data].map(
            ({ _id, chatMsg, sender, type, time }) => {
              const senderProp = sender ? "#BAC3E8" : "#FFEAD1";
              return (
                <MessageContainer key={_id} sender={sender}>
                  <div className={styles.messages}>
                    {type === "text" && (
                      <div className={styles.messagesInner}>
                        <div
                          className={styles.messagesText}
                          style={{
                            background: `${senderProp}`,
                            borderRadius: sender
                              ? "13.6974px 13.6974px 13.6974px 0px"
                              : "13.6974px 13.6974px 0px 13.6974px",
                          }}
                        >
                          {chatMsg}{" "}
                        </div>
                        <span
                          className={styles.timestamp}
                          style={{
                            alignSelf: sender ? "flex-start" : "flex-end",
                          }}
                        >
                          {time}
                        </span>
                      </div>
                    )}
                  </div>
                </MessageContainer>
              );
            }
          );

          return [grpMsg, prdtInfo, msgs];
        })
      ) : (
        <p>No message</p>
      )}
    </div>
  );
};

export default MessageContent;
