"use client";
import { motion } from "motion/react";
export default function Home() {
  return (
    <section>
      <div className='relative'>
        <div className='relative max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 w-full h-full z-20'>
          <div className='flex lg:flex-row flex-col justify-between lg:items-end relative z-1 gap-6 py-8 md:py-20'>
            <h1 className='text-5xl md:text-6xl font-semibold uppercase max-w-3xl'>
              A creative Design production studio
            </h1>
            <div className='flex group items-center gap-1'>
              <button
                type='button'
                tabIndex={0}
                data-slot='button'
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground [a]:hover:bg-primary/80 gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 px-6 py-3.5 h-auto rounded-full cursor-pointer"
              >
                Get Started
              </button>
              <button
                type='button'
                tabIndex={0}
                data-slot='button'
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground [a]:hover:bg-primary/80 gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 p-4 rounded-full h-auto transition-transform duration-300 ease-out group-hover:rotate-312 cursor-pointer"
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={16}
                  height={16}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-arrow-right'
                  aria-hidden='true'
                >
                  <path d='M5 12h14' />
                  <path d='m12 5 7 7-7 7' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='absolute top-0 left-0 w-full h-full grid grid-cols-6 border-x right-0'>
          <div className='border-r' />
          <div className='border-r' />
          <div className='border-r' />
          <div className='border-r' />
          <div className='border-r' />
          <div className="border-r" />
        </div>
      </div>
      <div className='border-t border-border'>
        <div className='relative max-w-7xl mx-auto overflow-hidden lg:aspect-16/6 md:aspect-16/8 aspect-video'>
          <img
            src='https://images.shadcnspace.com/assets/hero-img/hero-13-bg.webp'
            alt='Video banner'
            width={1280}
            height={720}
            className='object-cover transition-opacity duration-500 ease-in-out w-full h-full opacity-100'
          />
          <video
            src='https://images.shadcnspace.com/assets/hero-img/hero-13-video.mp4'
            loop
            playsInline
            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0'
          />
          <button
            type='button'
            tabIndex={0}
            data-slot='button'
            className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none text-primary-foreground [a]:hover:bg-primary/80 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:h-22 lg:w-22 h-15 w-15 rounded-full cursor-pointer bg-white/10 hover:bg-white/10 transition hover:scale-105"
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='white'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-play lg:size-8 size-5 text-white'
              aria-hidden='true'
            >
              <path d='M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z' />
            </svg>
          </button>
          <div className='absolute bottom-10 left-10 lg:max-w-xl text-white md:block hidden transition-all duration-300 opacity-100 translate-y-0'>
            <p className='text-2xl text-white font-normal'>
              We design brands, digital experiences, and products that move
              people and create meaningful connections across every platform.
            </p>
          </div>
        </div>
      </div>
      <div className='lg:py-7 py-5 border-y w-full' />
    </section>
  );
}
