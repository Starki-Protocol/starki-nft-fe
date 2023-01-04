import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import "../App.css";

const Notification = ({ type, id }) => {
  const [show, setShow] = useState(true);
  const [nonce, setNonce] = useState(id);
  if (id != nonce) {
    setShow(true);
    setNonce(id);
  }
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 30000);
    return () => {
      clearTimeout(timeId);
    };
  }, [nonce]);
  {
  }
  const renderNotification = () => {
    if (type.message)
      return (
        <>
          <motion.div
            className="notification"
            initial={{ x: 0 }}
            animate={{ x: [300, -300] }}
            transition={{ duration: 3 }}
          >
            <i
              onClick={() => setShow(false)}
              className="fa-regular fa-circle-xmark notification-close"
            ></i>
            <h2>Error:</h2>
            <p>{type.message}</p>
          </motion.div>
        </>
      );
    if (type.hash)
      return (
        <>
          <motion.div
            className="notification"
            initial={{ x: 0 }}
            animate={{ x: [300, -300] }}
            transition={{ duration: 4 }}
          >
            <i
              onClick={() => setShow(false)}
              className="fa-regular fa-circle-xmark notification-close"
            ></i>
            <h2>Transaction Successful! </h2>

            <a href={`https://goerli.etherscan.io/tx/${type.hash}`}>
              Click here to view on etherscan.
            </a>
          </motion.div>
        </>
      );
    else
      return (
        <>
          <motion.div
            className="notification"
            initial={{ x: 0 }}
            animate={{ x: [300, -300] }}
            transition={{ duration: 4 }}
          >
            <i
              onClick={() => setShow(false)}
              className="fa-regular fa-circle-xmark notification-close"
            ></i>
            <h2>Error: </h2>
            <p>{`${type.slice(0, 30)}`}</p>
          </motion.div>
        </>
      );
  };
  return <>{show && renderNotification()}</>;
};

export default Notification;
