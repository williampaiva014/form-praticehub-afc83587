import { motion } from "framer-motion";

const orbs = [
  { color: "hsl(42 78% 55% / 0.12)", size: 400, x: "10%", y: "20%", duration: 8 },
  { color: "hsl(42 85% 65% / 0.08)", size: 350, x: "75%", y: "60%", duration: 10 },
  { color: "hsl(42 70% 42% / 0.10)", size: 300, x: "50%", y: "80%", duration: 12 },
  { color: "hsl(35 80% 50% / 0.06)", size: 250, x: "85%", y: "15%", duration: 9 },
];

const GlowOrbs = () => {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.15, 0.9, 1],
            opacity: [0.6, 1, 0.7, 0.6],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GlowOrbs;
