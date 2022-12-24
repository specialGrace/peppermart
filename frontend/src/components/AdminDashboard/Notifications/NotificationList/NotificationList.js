import React from "react";
import NotificationListItem from "../NotificationListItem/NotificationListItem";

const NotificationList = ({ notifications }) => {
  return (
    <div>
      {notifications && notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationListItem
            key={notification.id}
            notification={notification}
          />
        ))
      ) : (
        <h4>No notification yet</h4>
      )}
    </div>
  );
};

export default NotificationList;
