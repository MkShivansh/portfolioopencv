"use client";

import { motion } from "motion/react";

const nodes = [
  { x: "15%", y: "20%", size: 5 },
  { x: "42%", y: "10%", size: 4 },
  { x: "72%", y: "24%", size: 6 },
  { x: "25%", y: "48%", size: 4 },
  { x: "55%", y: "42%", size: 7 },
  { x: "82%", y: "52%", size: 4 },
  { x: "38%", y: "75%", size: 5 },
  { x: "68%", y: "78%", size: 4 },
];

const connections = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 4],
  [3, 6],
  [4, 6],
  [4, 7],
  [5, 7],
  [6, 7],
];

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      className="absolute right-0 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 lg:block"
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      {/* Network */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 520"
        fill="none"
      >
        {connections.map(([from, to], index) => {
          const start = nodes[from];
          const end = nodes[to];

          const getPosition = (value: string) =>
            Number.parseFloat(value.replace("%", "")) * 5.2;

          return (
            <motion.line
              key={index}
              x1={getPosition(start.x)}
              y1={getPosition(start.y)}
              x2={getPosition(end.x)}
              y2={getPosition(end.y)}
              stroke="white"
              strokeOpacity="0.12"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8 + index * 0.08,
              }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: [0.35, 1, 0.35],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2.5 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
      ))}

      {/* Center label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <div className="text-[10px] uppercase tracking-[0.35em] text-zinc-600">
          SYSTEM
        </div>

        <div className="mt-2 text-sm font-medium tracking-widest text-zinc-400">
          AI × SOFTWARE
        </div>
      </motion.div>
    </motion.div>
  );
}