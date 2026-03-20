import React from "react";
import { Button } from "./ui/button";
import { Marquee } from "./ui/marquee";
import { FooterComponent } from "./footer-main";
import CTASection from "./cta-section";
const footer = () => {
  return (
    <>
    <CTASection />
    <FooterComponent />
    </>
    // <footer className='bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'>
    //   <div className='mx-auto max-w-7xl px-6 lg:px-8'>
    //     <div className='py-16 lg:py-20'>
    //       <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
    //         {/* Newsletter */}
    //         <div>
    //           <h3 className='text-2xl font-bold   text-gray-900 dark:text-white'>
    //             Subscribe to our
    //             <br />
    //             Newsletter
    //           </h3>
    //           <p className='mt-4 text-base text-gray-600 dark:text-gray-400'>
    //             Signup for latest news and insights from TailGrids
    //           </p>
    //           <form className='mt-6'>
    //             <input
    //               type='email'
    //               placeholder='Enter your email address'
    //               className='w-full px-5 py-3.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
    //             />
    //             <Button
    //               type='submit'
    //               className='mt-4 w-full text-white font-medium py-6 px-6 rounded-lg transition-colors duration-200'
    //             >
    //               Subscribe
    //             </Button>
    //           </form>
    //         </div>
    //         {/* Links */}
    //         <div className='grid grid-cols-3 gap-8 lg:gap-12'>
    //           {/* Company */}
    //           <div>
    //             <h4 className='text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-5'>
    //               Company
    //             </h4>
    //             <ul className='space-y-3.5 text-sm text-gray-600 dark:text-gray-400'>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   About Us
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   Careers
    //                   <span className='ml-1.5 text-green-500 font-bold'>•</span>
    //                   <span className='text-green-600 font-medium'>Hiring</span>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   Blog
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   Press
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   Contact
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           {/* Resources */}
    //           <div>
    //             <h4 className='text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-5'>
    //               Resources
    //             </h4>
    //             <ul className='space-y-3.5 text-sm text-gray-600 dark:text-gray-400'>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   Guides &amp; Tutorials
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   Community Forum
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   API Docs
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   Webinars
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           {/* Connect */}
    //           <div>
    //             <h4 className='text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-5'>
    //               Connect
    //             </h4>
    //             <ul className='space-y-3.5 text-sm text-gray-600 dark:text-gray-400'>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   X(Twitter)
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   LinkedIn
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   Instagram
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='#'
    //                   className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //                 >
    //                   YouTube
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //      <div className='text-[6.5rem] md:text-[12.5rem] md:leading-[0.8] md:mt-10 absolute -left-14 bottom-16 md:bottom-5 '>
       
    //   </div>
    //     {/* Bottom bar */}
    //     <div className='border-t border-gray-200 dark:border-gray-800 py-8'>
    //       <div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
    //         <div>
    //           &copy; Copyright {new Date().getFullYear()} &mdash; The Non-Stop
    //           Series&trade;
    //         </div>
    //         <div className='flex gap-6'>
    //           <a
    //             href='/terms'
    //             className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //           >
    //             Terms &amp; Conditions
    //           </a>
    //           <a
    //             href='/privacy'
    //             className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //           >
    //             Privacy Policy
    //           </a>
    //           <a
    //             href='#'
    //             className='hover:text-gray-900 dark:hover:text-gray-200 hover:underline'
    //           >
    //             Cookies Settings
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default footer;



