import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import config from "../Constants/config.json";
import "../App.css";
import Clipper from "./Clipper";
import Notification from "./Notification";

const Mint = () => {
  const [notification, setNotification] = useState();
  const [notificationId, setNotificationId] = useState(0);

  const { contractAddress, abi } = config;

  //NOTIFICATONS

  // const handleSuccess = async (tx) => {
  //   try {
  //     await tx.wait(1);
  //     handleNotification(tx);
  //     console.log(tx);
  //   } catch (error) {
  //     console.log(error);
  //     handleNotification(error);
  //   }
  // };

  // const handleNotification = (type) => {
  //   setNotification(<Notification id={notificationId} type={type} />);
  //   console.log(notificationId);
  //   setNotificationId(notificationId + 1);
  // };

  return (
    <div className="mint-bg">
      {notification}
      <div className="mint-container">
        <div className="mint-content">
          <h1 className="mint-max">Hey !</h1>
          <h1 className="mint-maxi"> This is Starki</h1>
          <h1 className="mint-arbimaxi">and I'm a Stark Maxi!</h1>

          {contractAddress ? (
            <>
              <>
                <div className="mint-title">Coming Soon.. </div>
                <motion.button
                  initial={{ y: 0, x: 0 }}
                  whileHover={{ y: -10, x: -10 }}
                  transition={{ duration: 0.1 }}
                  className="regular-button mint-button"
                >
                  Soon
                </motion.button>
              </>
            </>
          ) : (
            <div>No CONTRACT address detected</div>
          )}
        </div>
      </div>
      {window.screen.availWidth < 821 ? null : <Clipper />}
    </div>
  );
};

export default Mint;
