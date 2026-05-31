import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <motion.div
      layout
      initial={false}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] py-2 sm:py-3"
          : "bg-slate-950/80 py-3 sm:py-5"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 rounded-md flex-shrink-0"></div>

          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide truncate">
            TOP <span className="text-gray-300">MEDIA</span>
          </h1>
        </div>

        <Menu className="text-white w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
      </div>
    </motion.div>
  );
};

export default Navbar;