import "../App.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Clipper = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  function useFollowPointer(ref) {
    const [point, setPoint] = useState({ x: 0, y: 0 });

    useEffect(() => {
      if (!ref.current) return;

      const handlePointerMove = ({ clientX, clientY }) => {
        const element = ref.current;

        const x = clientX - element.clientWidth * 0.465;
        const y = clientY - element.clientHeight * 1;
        setPoint({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);

      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return point;
  }

  return (
    <motion.div
      animate={{ x }}
      transition={{
        type: "spring",
        damping: 9,
        stiffness: 100,
        restDelta: 0.001,
      }}
      viewport={{ once: true }}
      className="clipper-container"
      ref={ref}
    >
      <div className="clipper-left"></div>
      <div className="top-bot-container">
        <div className="clipper-top"></div>
        <div className="clipper-bottom"></div>
      </div>
      <div className="clipper-right"></div>
    </motion.div>
  );
};
export default Clipper;
