import { motion } from "framer-motion";
import { useState } from "react";
import { useStarknetCall, useContract } from "@starknet-react/core";
import config from "../Constants/config.json";
import Clipper from "./Clipper";
import { mintsquarelogo } from "../Images";
import "../App.css";

const Mint = () => {
  const { contractAddress, abi } = config;
  const [totalSupply, setTotalSupply] = useState(0);

  const { contract } = useContract({
    address: contractAddress,
    abi: abi,
  });

  //
  const {
    data: _totalSupply,
    loading: _totalSupplyLoading,
    error: _totalSupplyError,
    refresh: _totalSupplyRefresh,
  } = useStarknetCall({
    contract,
    method: "totalSupply",
    args: [""],
    options: {
      watch: false,
    },
  });
  if (_totalSupply !== undefined && _totalSupply[0].toNumber() !== totalSupply)
    setTotalSupply(_totalSupply[0].toNumber());

  return (
    <div className="mint-bg">
      {notification}
      <div className="mint-container">
        <div className="mint-content">
          <h1 className="mint-hey">Hey !</h1>
          <h1 className="mint-starki"> This is Starki</h1>
          <h1 className="mint-starkmaxi">and I'm a Stark Maxi!</h1>

          {contractAddress ? (
            <>
              <>
                <div className="mint-title">
                  {`${totalSupply} Starkis have found their owners!`}
                </div>
                <motion.a
                  initial={{ y: 0, x: 0 }}
                  whileHover={{ y: -10, x: -10 }}
                  transition={{ duration: 0.2 }}
                  href="https://mintsquare.io/collection/starknet/0x01c7607659020c0f128fe677a1d7be9c3b9f66cedfe50296aca146b003875ee5"
                  className="regular-button mint-button"
                >
                  Get a Starki on Mintsquare
                  <img className="mintsquare-logo" src={mintsquarelogo}></img>
                </motion.a>
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
