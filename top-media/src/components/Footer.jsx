import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center py-8 sm:py-10 md:py-12 mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Top Media</h2>

      <p className="text-gray-400 mt-2 text-sm sm:text-base">
        Created by <span className="text-yellow-500">Your Name</span>
      </p>
    </motion.div>
  );
};

export default Footer;