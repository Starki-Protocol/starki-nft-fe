import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  useStarknetExecute,
  useAccount,
  useTransactionReceipt,
  useNetwork,
  useStarknetCall,
  useContract,
} from "@starknet-react/core";
import config from "../Constants/config.json";
import Clipper from "./Clipper";
import Notification from "./Notification";
import { mintsquarelogo } from "../Images";
import "../App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx_09Dje-MXpTXpShFGRpovCF5OFD0Jc4",
  authDomain: "starki-50f6b.firebaseapp.com",
  databaseURL: "https://starki-50f6b-default-rtdb.firebaseio.com",
  projectId: "starki-50f6b",
  storageBucket: "starki-50f6b.appspot.com",
  messagingSenderId: "667750689029",
  appId: "1:667750689029:web:74f83a0c3b56430a982f6c",
  measurementId: "G-7BK203SL13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Mint = () => {
  const { contractAddress, abi } = config;
  const [notification, setNotification] = useState();
  const [wlStatus, setWlStatus] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [proof, setProof] = useState([]);
  const [hash, setHash] = useState(undefined);
  const { address, status } = useAccount();
  const { chain } = useNetwork();

  const firebase = (address) => {
    const db = getDatabase();
    const reference = ref(db, `/${address}`);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      if (data) setProof(data);
    });
  };

  useEffect(() => {
    firebase(address);
  }, [address]);

  const { contract } = useContract({
    address: contractAddress,
    abi: abi,
  });

  const { data: _wlStatus } = useStarknetCall({
    contract,
    method: "isWhitelistMintActive",
    args: [""],
    options: {
      watch: false,
    },
  });

  if (_wlStatus !== undefined && _wlStatus[0].toNumber() !== wlStatus)
    setWlStatus(_wlStatus[0].toNumber());

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

  const calls = [
    {
      contractAddress:
        "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
      entrypoint: "approve",
      calldata: [contractAddress, 8000000000000000, 0],
    },
    {
      contractAddress: contractAddress,
      entrypoint: "publicMint",
      calldata: [],
    },
  ];

  const { execute, loading } = useStarknetExecute({ calls });

  const { data } = useTransactionReceipt({ hash, watch: true });

  //NOTIFICATONS

  useEffect(() => {
    handleNotification(data);
  }, [data]);

  const handleNotification = (tx) => {
    setNotification(<Notification data={tx} />);
  };

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
