import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, setId, setName }) => {
  const { docs } = useFirestore("images");
  const set = (url, id, name) => {
    setSelectedImg(url);
    setId(id);
    setName(name);
  };
  return (
    <div className="image-grid">
      {docs.map((doc) => (
        <motion.div
          layout
          whileHover={{ opacity: 1, cursor: "pointer" }}
          className="img-wrap"
          key={doc.id}
          onClick={() => set(doc.url, doc.id, doc.name)}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={doc.url}
            alt="uploaded pic"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
