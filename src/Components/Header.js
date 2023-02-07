import { motion } from "framer-motion";
import "../App.css";
import { logo } from "../Images";
import Connect from "./Connect";

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="header"
      >
        <img className="logo" src={logo} alt="logo"></img>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <ul className="nav-links">
            <div className="nav-links-right">
              <a
                href="https://twitter.com/StarkiNFT"
                className="fa-brands fa-twitter nav-socials-logo "
              ></a>
              {/* <a
                href="https://discord.gg"
                className="fa-brands fa-discord nav-socials-logo "
              ></a> */}

              <Connect />
            </div>
          </ul>
        </motion.nav>
      </motion.header>
    </>
  );
};

export default Header;
