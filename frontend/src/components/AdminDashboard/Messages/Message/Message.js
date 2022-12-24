import React, { useEffect, useRef } from "react";
import MessageHeader from "../MessageHeader/MessageHeader";
import MessageFooter from "../MessageFooter/MessageFooter";
import phone from "../../../../assets/images/phone.png";
import dayjs from "dayjs";
import _ from "lodash";
import { uuidv4 } from "../../../../utils/uuid";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import MessageContent from "./MessageContent";

import styles from "./Message.module.css";

// extend dayjs plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const date = new Date();

const utc_Date = dayjs.utc(date, "z").tz("Africa/Lagos").format("h:mm A");
// add 1hr to the timezone to account for the actual time 1hr reduction on saving to mongodb with new Date
const utcDateString = dayjs
  .utc(date, "z")
  .add(1, "hour")
  .tz("Africa/Lagos")
  .format();
const DateString = dayjs.utc(date, "z").tz("Africa/Lagos").format();

const product_conversations = [
  {
    _id: 1,
    roomID: uuidv4(),
    image: phone,
    title: "iphone13",
    price: "N120000",
    noInStock: 12,
    messages: [
      {
        _id: "1",
        roomID: uuidv4(),
        senderEmail: "dan@example.com",
        time: utc_Date,
        chatMsg: "Hello, I want to make enquiries about your product",
        type: "text",
        sender: true,
        createdAt: utcDateString,
      },
      {
        roomID: uuidv4(),
        senderEmail: "admin@example.com",
        time: utc_Date,
        chatMsg: "Hello Janet, thank you for reaching out",
        type: "text",
        sender: false,
        createdAt: utcDateString,
      },
      {
        roomID: uuidv4(),
        senderEmail: "admin@example.com",
        time: utc_Date,
        chatMsg: "What do you need to know?",
        type: "text",
        sender: false,
        createdAt: utcDateString,
      },
      {
        roomID: uuidv4(),
        senderEmail: "dan@example.com",
        time: utc_Date,
        chatMsg:
          "I want to know if the price is negotiable, i need about 2 Units",
        type: "text",
        sender: true,
        createdAt: utcDateString,
      },
    ],
  },
];

const Message = () => {
  const messagesEndRef = useRef(null);

  //   scrollTop setup using useRefHook
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [product_conversations]);

  let groupedResults = _.groupBy(product_conversations[0].messages, (message) =>
    dayjs(message["createdAt"]).startOf("isoWeek").format("MMM D YYYY")
  );
  const keys = Object.keys(groupedResults);

  return (
    <div className={styles.container}>
      <MessageHeader />
      <hr style={{ marginTop: "20px" }} />
      <div className={styles.messageBody}>
        <MessageContent
          keys={keys}
          groupedResults={groupedResults}
          product_conversations={product_conversations}
        />
        <div ref={messagesEndRef} />
      </div>
      <MessageFooter />
    </div>
  );
};

export default Message;
