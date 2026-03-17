import { motion } from "framer-motion";

const beams = [
  { x: "15%", y: "10%", size: 180, delay: 0, duration: 4 },
  { x: "75%", y: "25%", size: 120, delay: 1.2, duration: 5 },
  { x: "40%", y: "70%", size: 150, delay: 0.6, duration: 3.5 },
  { x: "85%", y: "65%", size: 100, delay: 2, duration: 4.5 },
  { x: "25%", y: "85%", size: 90, delay: 1.8, duration: 3.8 },
  { x: "60%", y: "15%", size: 110, delay: 0.3, duration: 5.2 },
];

const GoldLightBeams = () => {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {beams.map((beam, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: beam.x,
            top: beam.y,
            width: beam.size,
            height: beam.size,
            background: `radial-gradient(circle, hsl(42 78% 55% / 0.25), hsl(42 78% 55% / 0.05) 50%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            opacity: [0.2, 0.7, 0.3, 0.6, 0.2],
            scale: [0.8, 1.1, 0.9, 1.05, 0.8],
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: beam.delay,
          }}
        />
      ))}
    </div>
  );
};

export default GoldLightBeams;
