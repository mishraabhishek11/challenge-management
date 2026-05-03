import { motion } from "motion/react";
export default function Badge({ caption }) {
  return (
    <motion.span
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 1 }}
      className="badge"
    >
      {caption}
    </motion.span>
  );
}
