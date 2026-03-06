"use client"
import { motion } from "motion/react";
export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-between md:flex-row md:items-center overflow-hidden px-8 relative text-clip w-full z-30'>
        <motion.div initial={{ translateX: -50, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            ease: [0, 0.1, 0.3, 0.9],
            duration: 5,
          }}
          className='relative z-20 font-[anton] text-xl md:text-6xl uppercase leading-tight'>
          A Gathering of Nations For 144 <br />
          Hours Non-Stop Praise & Worship
        </motion.div>
      </div>
    </>
  );
}
