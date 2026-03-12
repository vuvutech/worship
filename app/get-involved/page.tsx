import HeroIntro from "@/components/HeroIntro";
import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <LocomotiveScrollWrapper>
      <section className='bg-background py-8 sm:py-16 lg:py-24 '>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-9 lg:grid-cols-2'>
            <div
              className='flex flex-col gap-9 '
              data-scroll
              data-scroll-delay='-0.1'
            >
              <div className='flex items-center gap-6 overflow-hidden'>
                <div className='to-primary h-52 w-4 bg-gradient-to-t from-transparent' />
                <div
                  style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
                >
                  <div className='space-y-4'>
                    <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
                      Get Involved
                    </h2>
                    <p className='text-muted-foreground text-xl font-semibold md:text-3xl'>
                      Step Into the Gap. Keep the Fire Burning.{' '}
                      <span className='text-primary inline-block'>
                        Join The Non-Stop.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
              >
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-4.png'
                  alt='Team meeting office'
                  className='max-h-91 w-full rounded-lg object-cover'
                />
              </div>
            </div>
            <div
              className='flex flex-col gap-6'
              data-scroll
              data-scroll-speed='-0.2'
            >
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                <div
                  style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
                >
                  <div className='relative overflow-hidden rounded-md'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-3.png'
                      alt='Team collaboration'
                      className='h-52 w-full rounded-md object-cover'
                    />
                  </div>
                </div>
                <div
                  style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
                >
                  <div className='relative overflow-hidden rounded-md'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-2.png'
                      alt='Team collaboration'
                      className='h-52 w-full rounded-md object-cover'
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-1 flex-col justify-center gap-9'>
                <div
                  style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
                >
                  <p className='text-muted-foreground text-xl leading-relaxed'>
                    The Non-Stop is fueled entirely by believers willing to offer their time, voices, and skills to keep the altar burning. Whether you are a worship leader, an intercessor, a volunteer, or someone hungry for His presence, there is a place for you in this 144-hour sacrifice.
                  </p>
                </div>
                <div
                  style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
                >
                  <div className='grid gap-10 sm:grid-cols-3'>
                    <div className='flex flex-col items-center gap-2.5'>
                      <h3 className='text-foreground text-4xl font-medium'>
                        144
                      </h3>
                      <p className='text-muted-foreground text-center font-medium'>
                        Continuous Hours
                      </p>
                    </div>
                    <div className='flex flex-col items-center gap-2.5'>
                      <h3 className='text-foreground text-4xl font-medium'>
                        24/7
                      </h3>
                      <p className='text-muted-foreground text-center font-medium'>
                        Unbroken Worship
                      </p>
                    </div>
                    <div className='flex flex-col items-center gap-2.5'>
                      <h3 className='text-foreground text-4xl font-medium'>
                        1
                      </h3>
                      <p className='text-muted-foreground text-center font-medium'>
                        Unified Focus
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
                >
                  <div className='flex items-center gap-6'>
                    <div className='flex -space-x-3'>
                      <span
                        data-slot='avatar'
                        data-size='default'
                        className='group/avatar relative flex shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6 ring-background size-12 ring-2'
                      >
                        <img
                          data-slot='avatar-image'
                          className='aspect-square size-full'
                          alt='Olivia Sparks'
                          src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png'
                        />
                      </span>
                      <span
                        data-slot='avatar'
                        data-size='default'
                        className='group/avatar relative flex shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6 ring-background size-12 ring-2'
                      >
                        <img
                          data-slot='avatar-image'
                          className='aspect-square size-full'
                          alt='Howard Lloyd'
                          src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png'
                        />
                      </span>
                      <span
                        data-slot='avatar'
                        data-size='default'
                        className='group/avatar relative flex shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6 ring-background size-12 ring-2'
                      >
                        <img
                          data-slot='avatar-image'
                          className='aspect-square size-full'
                          alt='Hallie Richards'
                          src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
                        />
                      </span>
                      <span
                        data-slot='avatar'
                        data-size='default'
                        className='group/avatar relative flex shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6 ring-background size-12 ring-2'
                      >
                        <img
                          data-slot='avatar-image'
                          className='aspect-square size-full'
                          alt='Jenny Wilson'
                          src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png'
                        />
                      </span>
                    </div>
                    <a
                      href='#'
                      className='flex items-center gap-3'
                    >
                      <button
                        data-slot='button'
                        data-variant='outline'
                        data-size='icon-lg'
                        className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs size-10 border-primary text-primary rounded-full"
                        aria-label='Play video'
                      >
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
                          className='lucide lucide-play'
                          aria-hidden='true'
                        >
                          <path d='M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z' />
                        </svg>
                      </button>
                      <span className='text-base font-medium uppercase'>
                        Watch the Vision
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-background py-8 sm:py-16 lg:py-24 mx-auto  px-4 sm:px-6 lg:px-8'>
        <div className='container space-y-10 lg:space-y-20'>
          <div>
            <img
              alt='about us iamge'
              className='mt-4 h-132 w-full object-cover'
              src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png'
            />
          </div>
          <div className='grid grid-cols-1 gap-4 space-y-12 lg:grid-cols-6 lg:space-y-0'>
            <div className='order-2 col-span-2 lg:order-none lg:pr-16 lg:pl-10 flex items-center'>
              <p className='text-foreground/60 text-xl md:text-xl leading-relaxed'>
                We are calling for worshippers, intercessors, and servants to help sustain the momentum. The fire on the altar must not go out.
              </p>
            </div>
            <div className='order-1 col-span-4 lg:order-none lg:mt-0 lg:pl-6'>
              <h2 className='text-2xl font-medium tracking-tight lg:text-3xl leading-relaxed'>
                It takes the whole body of Christ to sustain 144 hours of unbroken worship. From the platform to the prayer room, from ushering to technical support, your contribution matters. Step into the story of recovery, revival, and restoration by signing up to serve, lead, or support today.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Separator className='my-5 mb-8' />
    </LocomotiveScrollWrapper>
  );
}
