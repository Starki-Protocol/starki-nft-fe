import { logo } from "../Images";
import "../App.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer">
      {window.screen.availWidth < 820 ? null : (
        <img className="footer-logo" src={logo} alt="logo"></img>
      )}
      <div className="footer-right-container">
        <p className="footer-title">Join our discord!</p>
        <p className="footer-description">
          Join us to get the latest news and updates and meet up with the fellow
          maxis! Also you can follow us on twitter and follow our latest
          announcements!
        </p>
        <div className="footer-socials">
          <motion.a
            whileHover={{ scale: 2 }}
            transition={{ duration: 0.5 }}
            href="https://twitter.com/StarkiNFT"
            className="fa-brands fa-twitter footer-socials-logo"
          ></motion.a>
          {/* <motion.a
            whileHover={{ scale: 2 }}
            transition={{ duration: 0.5 }}
            href="https://discord.gg/"
            className="fa-brands fa-discord footer-socials-logo"
          ></motion.a> */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
