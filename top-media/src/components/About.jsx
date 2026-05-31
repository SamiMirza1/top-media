import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-20 mx-auto max-w-7xl"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-slate-950/80 border border-white/10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.1),_transparent_28%)]" />
        <div className="relative z-10">
          <p className="text-yellow-500 uppercase tracking-[4px] mb-3 text-xs sm:text-sm">
            About Us
          </p>

          <div className="relative mb-5 sm:mb-6">
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400" />
            <span className="absolute -top-1 left-0 block h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
          </div>

          <p className="text-gray-300 leading-7 sm:leading-8 md:leading-9 text-sm sm:text-base md:text-lg">
          Top Media is a modern creative production agency focused on
          helping brands, businesses, and professionals grow through
          high-quality video content.
        </p>

        <p className="text-gray-300 leading-7 sm:leading-8 md:leading-9 text-sm sm:text-base md:text-lg mt-4 sm:mt-5 md:mt-6">
            We specialize in creating engaging talking-head personal
            branding videos and professional content for doctors,
            entrepreneurs, and businesses designed to capture attention
            and build trust.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;