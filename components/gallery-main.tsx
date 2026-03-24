"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

interface GalleryMainProps {
  className?: string;
}

const GalleryMain = ({ className }: GalleryMainProps) => {
  const column1Images = [
    { src: "/gallery/gallery-001.jpg", alt: "Gallery Image 1", height: "23rem" },
    { src: "/gallery/gallery-002.jpg", alt: "Gallery Image 2", height: "28rem" },
    { src: "/gallery/gallery-003.jpg", alt: "Gallery Image 3", height: "12rem" },
    { src: "/gallery/gallery-004.jpg", alt: "Gallery Image 4", height: "18rem" },
    { src: "/gallery/gallery-019.jpg", alt: "Gallery Image 19", height: "15rem" },
  ];

  const column2Images = [
    { src: "/gallery/akosua.jpg", alt: "Gallery Image 5", height: "13rem" },
    { src: "/gallery/gallery-006.jpg", alt: "Gallery Image 6", height: "32rem" },
    { src: "/gallery/gallery-007.jpg", alt: "Gallery Image 7", height: "18rem" },
    { src: "/gallery/gallery-008.jpg", alt: "Gallery Image 8", height: "20rem" },
  ];

  const column3Images = [
    { src: "/gallery/gallery-009.jpg", alt: "Gallery Image 9", height: "32rem" },
    { src: "/gallery/gallery-010.jpg", alt: "Gallery Image 10", height: "22rem" },
    { src: "/gallery/gallery-011.jpg", alt: "Gallery Image 11", height: "15rem" },
    { src: "/gallery/gallery-012.jpg", alt: "Gallery Image 12", height: "25rem" },
    { src: "/gallery/gallery-013.jpg", alt: "Gallery Image 13", height: "18rem" },
  ];

  const column4Images = [
    { src: "/gallery/gallery-014.jpg", alt: "Gallery Image 14", height: "13rem" },
    { src: "/gallery/gallery-015.jpg", alt: "Gallery Image 15", height: "22.5rem" },
    { src: "/gallery/gallery-016.jpg", alt: "Gallery Image 16", height: "22rem" },
    { src: "/gallery/gallery-017.jpg", alt: "Gallery Image 17", height: "28rem" },
    { src: "/gallery/gallery-018.jpg", alt: "Gallery Image 18", height: "12rem" },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="relative container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {column1Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}
              >
                <img className="h-full w-full rounded-2xl object-cover object-top" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {column2Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}
              >
                <img className="h-full w-full rounded-2xl object-cover object-top" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {column3Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}
              >
                <img className="h-full w-full rounded-2xl object-cover object-top" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            {column4Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}
              >
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { GalleryMain };
