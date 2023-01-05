import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAccount, useConnectors } from "@starknet-react/core";

import "../App.css";

const Connect = () => {
  const { account, address, status } = useAccount();
  const { connect, connectors } = useConnectors();

  return (
    <>
      {status == "disconnected" ? (
        "isWeb3EnableLoading" ? (
          <button
            className="connect-button"
            onClick={() => {
              connect(connectors[0]);
              console.log(status, account);
            }}
          >
            Connect Wallet
          </button>
        ) : (
          <button className="connect-button">
            <motion.i
              animate={{ rotate: [0, 385, -385] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="fa-solid fa-rotate"
            ></motion.i>
            loading?
          </button>
        )
      ) : (
        <button className="connect-button">
          {address.slice(0, 5)}...{address.slice(address.length - 3)}
        </button>
      )}
    </>
  );
};

export default Connect;
