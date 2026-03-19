"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const NavMenu = ({ className, ...props }: ComponentProps<"nav">) => {
  const items = [
    { label: "About", href: "/about" },
    { label: "Schedule", href: "/schedule" },
    { label: "Live", href: "/live" },
    { label: "Gallery", href: "/gallery" },
    { label: "Partner", href: "/partner" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn("flex items-center justify-center space-x-1", className)}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className='group relative block h-12 overflow-hidden px-4 font-bold '
        >
          <div className='flex flex-col transition-transform duration-300 group-hover:-translate-y-12 text-foreground '>
            <span className='flex h-12 items-center justify-center text-[12px] font-medium uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-foreground'>
              {item.label}
            </span>
            <span className='flex h-12 items-center justify-center text-[12px] font-medium uppercase tracking-wide text-foreground'>
              {item.label}
            </span>
          </div>
        </Link>
      ))}
    </nav>
  );
};
