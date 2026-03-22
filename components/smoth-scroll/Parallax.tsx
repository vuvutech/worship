"use client";
import Column from "./Column";
import { images } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const raf = () => {
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main>
      <div className='h-[20dvh] w-full flex items-center justify-center'>
        <div className='flex items-center gap-4 mb-8 hidden'>
          <h2 className='text-3xl md:text-5xl font-bebas tracking-wider uppercase'>
           Past Events/Archives
          </h2>
          <div className='h-[2px] bg-border flex-grow mt-2' />
        </div>
      </div>
      <div
        ref={gallery}
        className='h-[175dvh] bg-background relative flex gap-[2vw] p-[2vw] overflow-hidden'
      >
        <Column
          images={["images/144.jpg", "images/jerry2.jpg", "images/egypt.jpg"]}
          y={y}
        />
        <Column
          images={["images/egypt.jpg", "images/mettle.jpg", "images/simiane2.jpg"]}
          y={y2}
        />
        <Column
          images={["images/144.jpg", "images/jerry2.jpg", "images/simiane2.jpg"]}
          y={y3}
        />
        <Column
          images={["images/144.jpg", "images/uche.jpg", "images/egypt.jpg"]}
          y={y4}
        />
      </div>
      {/* <div className='h-screen'></div> */}
    </main>
  );
}
