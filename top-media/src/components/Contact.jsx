import { Phone, MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      className="px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-20 mx-auto max-w-7xl"
    >
      <div className="relative overflow-hidden rounded-[40px] bg-slate-950/80 border border-white/10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.1),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_24%)]" />
        <div className="relative z-10">
          <p className="text-yellow-500 uppercase tracking-[4px] mb-3 text-xs sm:text-sm">
            Contact Us
          </p>

          <div className="relative mb-6 sm:mb-8">
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400" />
            <span className="absolute -top-1 left-0 block h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
          </div>

          <div className="space-y-3 sm:space-y-4 md:grid md:grid-cols-2 md:gap-4">
        <div className="bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Phone className="text-yellow-500 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-sm sm:text-base">WhatsApp</p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <p className="text-yellow-500 text-xs sm:text-sm">0751 2279867</p>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <MessageCircle className="text-yellow-500 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-sm sm:text-base">Viber</p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <p className="text-yellow-500 text-xs sm:text-sm">0751 2279867</p>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          </div>
        </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;