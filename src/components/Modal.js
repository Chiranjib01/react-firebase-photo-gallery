import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg, btnDelete }) => {
  const handleClick = (e) => {
    if (!e.target.classList.contains("img")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <div>
        <motion.img
          className="img"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          src={selectedImg}
          alt="enlarged pic"
        />
        <button className="btn" onClick={btnDelete}>
          delete
        </button>
      </div>
    </motion.div>
  );
};

export default Modal;
