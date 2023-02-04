import { useEffect, useState } from "react";
import { useAccount, useConnectors } from "@starknet-react/core";
import { motion } from "framer-motion";

import "../App.css";
import { braavoslogo, argentxlogo } from "../Images";
const Connect = () => {
  const { address, status } = useAccount();
  const { connect, connectors, disconnect, refresh } = useConnectors();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, [refresh]);

  return (
    <>
      {status === "connected" ? (
        <div className="connect-container">
          <button className="connect-button">
            {address.slice(0, 5)}...{address.slice(address.length - 3)}
            <i className="fa-regular fa-circle-xmark " onClick={disconnect}></i>
          </button>
        </div>
      ) : (
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="connect-container"
          onHoverStart={() => setIsOpen(true)}
          onHoverEnd={() => setIsOpen(false)}
        >
          <motion.button
            className="connect-button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Connect Wallet
          </motion.button>
          <motion.div
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                },
              },
            }}
            className="connect-list"
          >
            <button
              onClick={() => {
                window.starknet_braavos
                  ? connect(connectors[1])
                  : console.log("get bravos");
              }}
              className="connect-item"
            >
              <img
                alt="braavos"
                className="connect-logo"
                src={braavoslogo}
              ></img>{" "}
              Braavos
            </button>
            <button
              onClick={() => {
                window.starknet_argentX
                  ? connect(connectors[0])
                  : console.log("get argent");
              }}
              className="connect-item"
            >
              <img
                alt="argentx"
                className="connect-logo"
                src={argentxlogo}
              ></img>
              Argent X
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Connect;
