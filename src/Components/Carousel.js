import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "../App.css";
import { carouselArray } from "../Images";

const Carousel = () => {
  const [width, setWidth] = useState();
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        animate={{ x: [0, -2000, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="carousel-inner"
      >
        {carouselArray.map((image) => {
          return (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={image}
              className="carousel-item"
            >
              <img src={image} alt=""></img>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
export default Carousel;
