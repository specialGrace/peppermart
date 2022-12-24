import React from "react";
import profile_1 from "../../../../assets/images/Rectangle 3 (1).png";
import profile_2 from "../../../../assets/images/Rectangle 3.png";
import ContactListItem from "../ContactListItem/ContactListItem";

import styles from "./ContactList.module.css";

const contacts = [
  {
    id: "1",
    name: "john doe",
    image: profile_1,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: true,
    time: "6.45pm",
    new: true,
  },
  {
    id: "2",
    name: "mary Ann",
    image: profile_2,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: false,
    time: "8.45pm",
    new: true,
  },
  {
    id: "3",
    name: "curt spark",
    image: profile_1,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: true,
    time: "9.45pm",
    new: false,
  },
  {
    id: "4",
    name: "william joe",
    image: profile_2,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: false,
    time: "11.45pm",
    new: false,
  },
  {
    id: "5",
    name: "albert marcurley",
    image: profile_1,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: true,
    time: "12.45pm",
    new: false,
  },
  {
    id: "6",
    name: "henry foe",
    image: profile_2,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: false,
    time: "3.45pm",
    new: false,
  },
  {
    id: "7",
    name: "jamie pennant",
    image: profile_1,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: true,
    time: "10.45pm",
    new: false,
  },
  {
    id: "8",
    name: "allan wright",
    image: profile_2,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: false,
    time: "1.45pm",
    new: false,
  },
  {
    id: "9",
    name: "billy smith",
    image: profile_1,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: true,
    time: "4.45pm",
    new: false,
  },
  {
    id: "10",
    name: "lego stone",
    image: profile_2,
    short_desc: "Hi, i want make enquiries about yo...",
    isOnline: false,
    time: "2.45pm",
    new: false,
  },
];

const ContactList = ({ showChatBoxHandler }) => {
  return (
    <div className={styles.contactList}>
      {contacts ? (
        contacts.map((item) => (
          <ContactListItem
            key={item.id}
            item={item}
            showChatBoxHandler={showChatBoxHandler}
          />
        ))
      ) : (
        <h6>No contact yet</h6>
      )}
    </div>
  );
};

export default ContactList;
