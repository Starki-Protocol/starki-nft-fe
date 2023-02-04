import { motion } from "framer-motion";
import { useState } from "react";

import "../App.css";

const Notification = ({ data }) => {
  const [show, setShow] = useState(true);

  const renderNotification = () => {
    if (data === undefined) return;

    return (
      <>
        <motion.div
          className="notification"
          initial={{ x: 0 }}
          animate={{ x: [-300] }}
          transition={{ duration: 3 }}
        >
          <i
            onClick={() => setShow(false)}
            className="fa-regular fa-circle-xmark notification-close"
          ></i>
          <h2>Transaction Status:</h2>
          <p>{data.status}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://starkscan.co/tx/${data.transaction_hash}`}
          >
            View on StarkScan
          </a>
        </motion.div>
      </>
    );
  };

  return <>{show && renderNotification()}</>;
};

export default Notification;
