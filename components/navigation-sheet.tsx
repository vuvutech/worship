"use client";

import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { useCurrentSession } from "@/lib/use-current-session";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "Live", href: "/live" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, skewY: 4 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export const NavigationSheet = () => {
  const { user, isAuthenticated } = useCurrentSession();
  const [open, setOpen] = useState(false);

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button
          className='rounded-full text-white bg-transparent border-white/10 hover:bg-white/10 hover:text-white'
          size='icon'
          variant='ghost'
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side='top'
        className='h-dvh w-full border-none bg-black p-0 text-white [&>button]:hidden'
      >
        {/* Header */}
        <div className='flex items-center justify-between px-6 py-4 border-b border-white/10'>
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className='flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10'
            aria-label='Close menu'
          >
            <X className='h-5 w-5' />
          </button>
        </div>

        {/* Nav Links */}
        <AnimatePresence>
          {open && (
            <motion.nav
              className='flex flex-col justify-center gap-1 px-6 pt-6 pb-10 h-[calc(100dvh-73px)] overflow-hidden'
              variants={containerVariants}
              initial='hidden'
              animate='show'
              exit='exit'
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className='overflow-hidden border-b border-white/10 last:border-none'
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className='group flex items-center justify-between py-3 transition-colors hover:text-white/60'
                  >
                    <span
                      className='text-3xl font-normal leading-none tracking-tight text-white'
                      style={{ fontFamily: "var(--font-bebas)" }}
                    >
                      {item.label}
                    </span>
                    <span className='text-sm font-mono text-white/30 tabular-nums'>
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Footer of sheet */}
              <motion.div
                variants={itemVariants}
                className='mt-auto pt-6 flex flex-col gap-4'
              >
                {!isAuthenticated && (
                  <Link
                    href='/login'
                    onClick={() => setOpen(false)}
                    className='text-center rounded-full bg-white py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90'
                  >
                    Sign In
                  </Link>
                )}
                {isAuthenticated && user?.role === "admin" && (
                  <Link
                    href='/dashboard'
                    onClick={() => setOpen(false)}
                    className='text-center rounded-full bg-white py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90'
                  >
                    Dashboard
                  </Link>
                )}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
};
