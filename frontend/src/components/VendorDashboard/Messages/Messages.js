import React, { useState } from "react";
import Search from "./Search/Search";
import ContactList from "./ContactList/ContactList";
import styles from "./Messages.module.css";
import Message from "./Message/Message";
import Modal from "../../Modal/Modal";

const Messages = () => {
  const [showChatBox, setShowChatbox] = useState(false);
  const showChatBoxHandler = () => {
    setShowChatbox((prev) => !prev);
  };
  return (
    <>
      {showChatBox && (
        <Modal bgColor="var(--light)" showChatBoxHandler={showChatBoxHandler}>
          <div
            style={{
              border: "2px solid var(--dark60)",
              padding: "5px",
              margin: "20px",
            }}
          >
            <Message />
          </div>
        </Modal>
      )}
      <div className={styles.messages}>
        <div className={styles.messages__left}>
          <div className={styles.conversations}>
            <p>Conversations with Customers</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.container}>
              {/* contacts header */}
              <div className={styles.contact__header}>
                <p>Contacts</p>
                <span>3</span>
              </div>
              {/* search */}
              <div className={styles.search}>
                <Search />
              </div>
              {/* contacts */}
              <div className={styles.contactList}>
                <ContactList showChatBoxHandler={showChatBoxHandler} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.messages__right}>
          <div className={styles.newMessage}>
            <button>New message</button>
          </div>
          <div className={styles.message}>
            <Message />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
