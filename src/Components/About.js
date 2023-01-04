import { motion } from "framer-motion";

import Carousel from "./Carousel";
import "../App.css";

const About = () => {
  return (
    <div name="about" className="about-container">
      <motion.div
        initial={{ y: 100 }}
        transition={{ type: "spring", bounce: 0.4, duration: 3 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="about-content">
          <div className="about-text">
            <p className="about-title">
              650 unique Starkis will be released on Starknet.
            </p>

            <p className="about-story">
              Starki is an NFT project on <span>Starknet</span> . We want to be
              one of the leading communities on <span>Starknet</span> , with a
              strong focus on fun, value and quality. This can be achieved
              through diversified initiatives that all have one common goal:
              Make the community grow, get more valuable and become better at
              what it does all together.
            </p>
          </div>
        </div>
      </motion.div>
      <Carousel />
    </div>
  );
};

export default About;
