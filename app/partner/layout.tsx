import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Partner With Us — Support Non-Stop Worship",
  description:
    "Partner with The Non-Stop Series™ and help sustain 144 hours of continuous praise and worship. Your financial and in-kind support fuels the fire of revival and restoration across Africa and the world.",
  alternates: { canonical: "https://thenonstop.org/partner" },
  openGraph: {
    url: "https://thenonstop.org/partner",
    title: "Partner With The Non-Stop Series™",
    description:
      "Support Africa's premier 144-hour continuous worship event. Partner with us and become part of the story of recovery, revival, and restoration.",
  },
};

const layouts = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 container max-w-(--breakpoint-2xl) mx-auto '>
        {children}
    </div>
  )
}

export default layouts
