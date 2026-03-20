import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

interface AboutComplimentProps {
  className?: string;
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src?: string;
    alt?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companies?: Array<{
    src: string;
    alt: string;
  }> | null;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  contentSections?: Array<{
    title: string;
    content: string;
  }>;
}

const AboutCompliment = ({
  className,
  title = "Why the Tabernacle of David?",
  description = "Thousands of years ago, King David set a precedent: 24/7 worship without a veil. He understood that God inhabits the praises of His people. At The Non-Stop, we are stepping into that ancient rhythm. For 144 hours, we remove the distractions of the world to sit at His feet, just as they did in the city of Zion. When the worship is non-stop, the atmosphere changes. Lives are recovered. Spirits are revived.",
  mainImage = {
    src: "/images/john_shofar.jpg",
    alt: "about",
  },
  secondaryImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg",
    alt: "about",
  },
  breakout = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "logo",
    title: "Logos-Rhema Foundation",
    description:
      "For 22 years, the Logos-Rhema Foundation has spearheaded spiritual revival through the Non-Stop Series across Ghana and beyond.",
    buttonText: "Our Mission",
    buttonUrl: "#mission",
  },
  companies = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      alt: "Arc",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      alt: "Descript",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      alt: "Mercury",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      alt: "Ramp",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
      alt: "Retool",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
      alt: "Watershed",
    },
  ],
  achievementsTitle = "A Legacy of Sacred Worship",
  achievementsDescription = "What began as a 24-hour sacrifice has grown into a 144-hour global movement, restoring the altar of praise and transforming countless lives.",
  achievements = [
    { label: "Faithful Years ", value: "22+" },
    { label: "Hours per Session", value: "144h" },
    { label: "Global Souls Met", value: "500k+" },
    { label: "Ministries United", value: "30+" },
  ],
  contentSections = [
    {
      title: "Vision Statement: The Altar of Restoration",
      content: `"In that day I will restore David’s fallen shelter—I will repair its broken walls and restore its ruins—and will rebuild it as it used to be." — Amos 9:11

       The Non-Stop is more than a gathering; it is a prophetic response to a divine mandate. Just as King David established a tent where worship ascended 24/7 without a veil, we are setting a stage for Recovery, Revival, and Restoration.`,
    },
    {
      title: "The Non-Stop is more than a gathering",
      content:
       `For 144 hours, we refuse to let the fire go out. We believe that as we saturate the atmosphere with the Word (Bible Reading) and the Sound (Praise & Worship), the "fallen shelter" is repaired in our personal lives, our families, and our nation.`,
    },
  ],
}: AboutComplimentProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className='container'>
        <div className='mb-14 flex flex-col gap-5 lg:w-4/5'>
          <h1 className='text-5xl font-semibold  er lg:text-6xl'>
            {title}
          </h1>
          <p className='text-xl text-muted-foreground md:text-xl'>
            {description}
          </p>
        </div>
        <div className='grid gap-7 lg:grid-cols-3'>
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className='size-full max-h-[620px] rounded-xl object-cover object-top lg:col-span-2'
          />
          <div className='flex flex-col gap-7 md:flex-row lg:flex-col'>
            <div className='flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto'>
              <img
                src={breakout.src}
                alt={breakout.alt}
                className='mr-auto h-12 dark:invert'
              />
              <div>
                <p className='mb-2 text-xl font-semibold'>{breakout.title}</p>
                <p className='text-muted-foreground'>{breakout.description}</p>
              </div>
              <Button
                variant='outline'
                className='mr-auto'
                asChild
              >
                <a
                  href={breakout.buttonUrl}
                  target='_blank'
                >
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className='grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto'
            />
          </div>
        </div>
        {companies && (
          <div className='py-32'>
            <Marquee>
              <MarqueeContent speed={40}>
                {companies.map(
                  (
                    company: {
                      src: string | Blob | undefined;
                      alt: string | undefined;
                    },
                    idx: any,
                  ) => (
                    <MarqueeItem
                      key={company.src + idx}
                      className='mx-8 flex items-center'
                    >
                      <img
                        src={company.src}
                        alt={company.alt}
                        className='h-7 w-auto md:h-8 dark:invert'
                      />
                    </MarqueeItem>
                  ),
                )}
              </MarqueeContent>
              <MarqueeFade side='left' />
              <MarqueeFade side='right' />
            </Marquee>
          </div>
        )}
        <div className='relative overflow-hidden rounded-xl bg-muted p-7 md:p-16'>
          <div className='flex flex-col gap-4 text-center md:text-left'>
            <h2 className='text-3xl font-medium md:text-4xl'>
              {achievementsTitle}
            </h2>
            <p className='max-w-xl text-muted-foreground'>
              {achievementsDescription}
            </p>
          </div>
          <div className='mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-between'>
            {achievements.map(
              (
                item: {
                  label:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactPortal
                        | ReactElement<
                            unknown,
                            string | JSXElementConstructor<any>
                          >
                        | Iterable<ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                  value:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactPortal
                        | ReactElement<
                            unknown,
                            string | JSXElementConstructor<any>
                          >
                        | Iterable<ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                },
                idx: any,
              ) => (
                <div
                  className='flex flex-col gap-2 text-center md:text-left'
                  key={item.label + idx}
                >
                  <span className='font-mono text-4xl font-semibold md:text-5xl'>
                    {item.value}
                  </span>
                  <p className='text-sm md:text-base'>{item.label}</p>
                </div>
              ),
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export { AboutCompliment };
