"use client";
import { Hero231 } from "@/components/hero231";
import { motion } from "motion/react";
export default function Home() {
  return (
    <>
      <div className='px-4'>
        <Hero231 />
      </div>

      <div className='block-preview-wrapper'>
        <section className="bg-[url('https://images.shadcnspace.com/assets/feature/feature-04.webp')] bg-cover bg-center bg-no-repeat">
          <div className='flex items-end sm:items-center justify-center lg:justify-start'>
            <div className='max-w-7xl px-4 lg:px-8 xl:px-16 lg:py-20 sm:py-16 py-8 mx-auto w-full'>
              <div style={{ opacity: 1, transform: "none" }}>
                <div
                  data-slot='card'
                  data-size='default'
                  className='ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-xl text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col w-full h-full max-w-md p-5 sm:p-10 border-none shadow-none'
                >
                  <div
                    data-slot='card-content'
                    className='group-data-[size=sm]/card:px-3 p-0'
                  >
                    <div className='flex flex-col gap-6'>
                      <div className='flex flex-col gap-4'>
                        <div style={{ opacity: 1, transform: "none" }}>
                          <span
                            data-slot='badge'
                            data-variant='outline'
                            className='gap-1 rounded-4xl border transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground px-3 py-1 h-7 text-sm font-normal'
                          >
                            Features
                          </span>
                        </div>
                        <p
                          className='text-3xl sm:text-4xl font-semibold'
                          style={{ opacity: 1, transform: "none" }}
                        >
                          Leading with innovative solution.
                        </p>
                        <p
                          className='text-base font-normal text-muted-foreground'
                          style={{ opacity: 1, transform: "none" }}
                        >
                          We're west coast change-makers in a complex world,
                          crafting purposeful and powerful brands with fluidity
                        </p>
                      </div>
                      <div
                        className='hidden sm:block'
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <div className='p-5 border rounded-2xl flex flex-col gap-8'>
                          <div className='flex gap-4'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              className='lucide lucide-layers shrink-0'
                              aria-hidden='true'
                            >
                              <path d='M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z' />
                              <path d='M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12' />
                              <path d='M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17' />
                            </svg>
                            <div className='flex flex-col gap-1'>
                              <p className='text-xl font-medium'>
                                Data Processing
                              </p>
                              <p className='text-base text-muted-foreground'>
                                Develop a unique and cohesive{/* */}{" "}
                                <strong className='text-foreground'>
                                  brand identity
                                </strong>
                                , including the design.
                              </p>
                            </div>
                          </div>
                          <div
                            data-orientation='horizontal'
                            role='separator'
                            aria-orientation='horizontal'
                            data-slot='separator'
                            className='bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch'
                          />
                          <div className='flex gap-4'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              className='lucide lucide-shapes shrink-0'
                              aria-hidden='true'
                            >
                              <path d='M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z' />
                              <rect
                                x={3}
                                y={14}
                                width={7}
                                height={7}
                                rx={1}
                              />
                              <circle
                                cx='17.5'
                                cy='17.5'
                                r='3.5'
                              />
                            </svg>
                            <div className='flex flex-col gap-1'>
                              <p className='text-xl font-medium'>
                                Generating a response
                              </p>
                              <p className='text-base text-muted-foreground'>
                                Develop a unique and cohesive{/* */}{" "}
                                <strong className='text-foreground'>
                                  brand identity
                                </strong>
                                , including the design.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ opacity: 1, transform: "none" }}>
                        <button
                          type='button'
                          tabIndex={0}
                          data-slot='button'
                          className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground [a]:hover:bg-primary/80 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-12 w-full rounded-full cursor-pointer"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*$*/}
        {/*/$*/}
      </div>

      <section>
        <div className='dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-300 shadow md:px-10 py-5 md:py-16 px-5 mb-5 md:mb-16 my-2 md:my-16 mx-2 md:mx-16 rounded-neat relative overflow-hidden'>
          <div className='w-72 h-72 absolute -right-20 -top-16 z-20 opacity-10 -rotate-45'>
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              <img
                alt='Non-Stop Series Feedback'
                src='/images/feedback.svg'
                decoding='async'
                data-nimg='fill'
                className='object-fit'
                sizes='100vw'
                srcSet='/images/feedback.svg 640w, /images/feedback.svg 750w, /images/feedback.svg 828w, /images/feedback.svg 1080w, /images/feedback.svg 1200w, /images/feedback.svg 1920w, /images/feedback.svg 2048w, /images/feedback.svg 3840w'
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
              <noscript />
            </span>
          </div>
          <div className='font-[montserrat] text-4xl '>Feedback</div>
          <div className='my-2 text-base dark:text-white line-clamp-2'>
            Let you know how we're doing. (We read everything, butsometimes we
            can't answer.) <br />
            Please choose the relevant feedback option.
          </div>
          <br />
          <div className='flex md:gap-4 gap-8 flex-col md:flex-row justify-between '>
            <div>
              <h1 className='font-[anton] leading-relaxed tracking-wider text-xl font-bold mb-3'>
                Testimonies
              </h1>
              <p className='leading-relaxed mb-3 line-clamp-3'>
                Share your tesimonies with us with regards to what the Lord has
                done in your life through this experience.{" "}
              </p>
              <div className='flex items-center flex-wrap '>
                <a
                  className='text-yellow-500 dark:text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0'
                  href='mailto:info@thenonstop.org'
                >
                  Click Here
                  <svg
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14' />
                    <path d='M12 5l7 7-7 7' />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h1 className='font-[anton] leading-relaxed tracking-wider text-xl font-bold mb-3'>
                Suggestions
              </h1>
              <p className='leading-relaxed mb-3 line-clamp-3'>
                We welcome your Spirit led suggestions on the overall
                organisation of the next Non-Stop Worship experience.
              </p>
              <div className='flex items-center flex-wrap '>
                <a
                  className='text-yellow-500 dark:text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0'
                  href='mailto:info@thenonstop.org'
                >
                  Click Here
                  <svg
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14' />
                    <path d='M12 5l7 7-7 7' />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h1 className='font-[anton] leading-relaxed tracking-wider text-xl font-bold mb-3'>
                Website Feedback
              </h1>
              <p className='leading-relaxed mb-3 line-clamp-3'>
                We shall be glad to know your thoughts on ways we can improve
                the overall web presence to better serve you.
              </p>
              <div className='flex items-center flex-wrap '>
                <a
                  className='text-yellow-500 dark:text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0'
                  href='mailto:webmaster@thenonstop.org'
                >
                  Click Here
                  <svg
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14' />
                    <path d='M12 5l7 7-7 7' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
