import { motion } from "framer-motion";

export default function Loader({
  text = "Initializing Engine...",
  accentColor = "from-cyan-400 to-blue-500",
  scale = 1,
}) {
  // Child elements staggered slide animation array variants
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const particleCoordinates = [
    { top: "-10%", left: "50%", delay: 0 },
    { bottom: "-10%", left: "50%", delay: 0.4 },
    { left: "-10%", top: "50%", delay: 0.8 },
    { right: "-10%", top: "50%", delay: 1.2 },
  ];

  return (
    /* FIXED FULL SCREEN BACKDROP OVERLAY */
    <div className="fixed inset-0 w-screen h-screen bg-slate-950/70 backdrop-blur-xl flex items-center justify-center z-[9999] select-none">
      {/* Interactive Core Animation Canvas Box */}
      <div
        className="flex flex-col items-center justify-center p-10 rounded-3xl bg-white/5 border border-white/10 shadow-2xl max-w-sm mx-auto"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Outer Staggered Pulse Wave Ring 1 */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-linear-to-tr ${accentColor} opacity-20`}
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Outer Staggered Pulse Wave Ring 2 */}
          <motion.div
            className={`absolute inset-2 rounded-full bg-linear-to-bl ${accentColor} opacity-10`}
            animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* High Speed Orbital Core Ring */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-transparent border-t-white/80 border-b-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Inverse Slower Orbital Ring */}
          <motion.div
            className="absolute inset-6 rounded-full border border-transparent border-l-white/60 border-r-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Glowing Core Orb */}
          <motion.div
            className={`w-8 h-8 rounded-full bg-linear-to-r ${accentColor} shadow-[0_0_20px_rgba(34,211,238,0.5)]`}
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Orbiting Quantum Particles */}
          {particleCoordinates.map((pos, idx) => (
            <motion.span
              key={idx}
              className={`absolute w-2 h-2 rounded-full bg-linear-to-r ${accentColor}`}
              style={{ ...pos }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                opacity: [0.3, 1, 0.3],
                y: [0, idx % 2 === 0 ? -6 : 6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: pos.delay,
              }}
            />
          ))}
        </div>

        {/* Dynamic Animated Text Tracking Status */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-1"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-sm font-semibold tracking-widest text-white/90 uppercase bg-clip-text">
            {text}
          </span>

          {/* Micro-Progress Loading Line Indicator */}
          <div className="w-24 h-0.5 bg-white/10 rounded-full overflow-hidden mt-2">
            <motion.div
              className={`h-full bg-linear-to-r ${accentColor}`}
              animate={{ x: [-96, 96] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ width: "100%" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
