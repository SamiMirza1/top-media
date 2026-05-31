import {
  User,
  Star,
  Stethoscope,
  Store,
  Clapperboard,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Talking-Head Videos",
    icon: <User />,
  },
  {
    title: "Personal Branding Content",
    icon: <Star />,
  },
  {
    title: "Doctor & Clinic Videos",
    icon: <Stethoscope />,
  },
  {
    title: "Showroom Production",
    icon: <Store />,
  },
  {
    title: "Cinematic Speed-Ramp Edits",
    icon: <Clapperboard />,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-20 mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-[40px] bg-slate-950/80 border border-white/10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(234,179,8,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.08),_transparent_26%)]" />
        <div className="relative z-10">
          <p className="text-yellow-500 uppercase tracking-[4px] mb-3 text-xs sm:text-sm">
            Our Services
          </p>

          <div className="relative mb-6 sm:mb-8">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400" />
            <span className="absolute -top-1 left-0 block h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
          </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-3 sm:space-y-4 md:grid md:grid-cols-2 md:gap-4"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-slate-900/95 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center justify-between duration-300 shadow-black/20"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="text-yellow-500 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                {service.icon}
              </div>

              <p className="text-sm sm:text-base md:text-lg truncate">{service.title}</p>
            </div>

            <ChevronRight className="text-gray-400 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        ))}
      </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;