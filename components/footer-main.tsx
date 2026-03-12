import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  href: string;
}

interface SocialItem {
  name: string;
  href: string;
}

interface FooterComponentProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  navigation?: NavItem[];
  social?: SocialItem[];
  legal?: NavItem[];
  brandName?: string;
  className?: string;
}

const FooterComponent = ({
  heading = "Start your free trial today",
  description = "The fit-for-purpose tool for planning and building modern software products.",
  ctaText = "Get started",
  ctaHref = "#",
  navigation = [
    { name: "Home", href: "/" },
    { name: "Privacy", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  social = [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
  legal = [{ name: "Privacy Policy", href: "/privacy" }],
  brandName = "NONSTOP",
  className,
}: FooterComponentProps) => {
  return (
    <footer
      className={cn(
        "flex flex-col items-center gap-14 pt-28 lg:pt-32",
        className,
      )}
    >
      <div className='container space-y-3 text-center'>
        <h2 className='text-2xl tracking-tight md:text-4xl lg:text-5xl'>
          {heading}
        </h2>
        <p className='mx-auto max-w-xl leading-snug text-balance text-muted-foreground'>
          {description}
        </p>
        <div>
          <Button
            size='lg'
            className='mt-4'
            asChild
          >
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </div>
      </div>

      <nav className='container flex flex-col items-center gap-4'>
        <ul className='flex flex-wrap items-center justify-center gap-6'>
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className='font-medium transition-opacity hover:opacity-75'
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className='flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75'
              >
                {item.name} <ArrowUpRight className='size-4' />
              </a>
            </li>
          ))}
        </ul>
        <ul className='flex flex-wrap items-center justify-center gap-6'>
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className='text-sm text-muted-foreground transition-opacity hover:opacity-75'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <svg
        width='100%'
        height='auto'
        viewBox='0 0 1200 300' // adjust viewBox to fit your desired proportions
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='w-full'
        aria-label='NONSTOP'
      >
        <defs>
          <linearGradient
            id='paint0_linear_FooterComponent'
            x1='600'
            y1='0'
            x2='600'
            y2='218.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='currentColor' />
            <stop
              offset='1'
              stopColor='currentColor'
              stopOpacity='0.2'
            />
          </linearGradient>
        </defs>

        <text
          x='600'
          y='220'
          textAnchor='middle'
          dominantBaseline='middle'
          fill='url(#paint0_linear_FooterComponent)'
          fontFamily='Suisse Intl, system-ui, sans-serif'
          fontSize='270'
          fontWeight='500'
          letterSpacing='-0.04em'
        >
          NONSTOP
        </text>
      </svg>
    </footer>
  );
};

export { FooterComponent };
