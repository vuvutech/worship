"use client";
import { motion } from "motion/react";
export default function Home() {
  return (
    <>
      <section className='py-32 w-full'>
        <div className='container space-y-10 lg:space-y-20'>
          <div className='w-full grid-cols-6 gap-10 space-y-5 lg:grid lg:space-y-0'>
            <h1 className='col-span-2 text-5xl font-semibold tracking-tight lg:text-7xl'>
              About Us
            </h1>
            <div />
          </div>
          <div>
            <img
              alt='about us iamge'
              className='mt-4 h-132 w-full object-cover'
              src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png'
            />
          </div>
          <div className='grid grid-cols-1 gap-4 space-y-12 lg:grid-cols-6 lg:space-y-0'>

            <div className='order-2 col-span-2 lg:order-none lg:pr-16 lg:pl-10'>
              <p className='text-foreground/40'>
                We aim to bring diverse minds together, turning ideas into
                experiences that matter.
              </p>

            </div>
            <div className='order-1 col-span-4 lg:order-none lg:mt-0 lg:pl-6'>
              <h2 className='text-2xl font-medium tracking-tight lg:text-3xl'>
                We are a team of creators, thinkers, and builders who believe in
                crafting experiences that truly connect. Our story is built on
                passion, innovation, and the drive to bring meaningful ideas to
                life.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
