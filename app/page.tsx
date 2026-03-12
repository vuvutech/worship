import HeroSection from "@/components/hero-section";
import { Ministration } from "../components/ministrations-main";
import FAQ from "@/components/faq";

export default function Page() {
  return (
    <main className='w-full  '>
      <HeroSection />

      {/* Additional content sections can be added here */}
      <section className='py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
            Diverse Voices, One Throne
          </h2>
          <p className='text-2xl text-muted-foreground leading-relaxed'>
            In an era of distractions, we choose to focus. Based on the biblical
            mandate to keep the fire on the altar burning (Leviticus 6:13), The
            Non-Stop is more than an event—it is a sacrifice of time. For 6 days
            and 6 nights, the music never stops, and the Word never ceases. We
            are recovering, reviving and restoring the tabernacle of David.
          </p>
        </div>
      </section>
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
                      {/* <div className='flex flex-col gap-4'>
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
                      </div> */}
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
                              <p className='text-lg font-medium'>
                                Recovery
                              </p>
                              <p className='text-base text-muted-foreground'>
                               Reclaiming every spiritual inheritance that has been stolen or dormant.
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
                              className='lucide lucide-layers shrink-0'
                              aria-hidden='true'
                            >
                              <path d='M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z' />
                              <path d='M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12' />
                              <path d='M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17' />
                            </svg>
                            <div className='flex flex-col gap-1'>
                              <p className='text-lg font-medium'>
                                Revival
                              </p>
                              <p className='text-base text-muted-foreground'>
                                Igniting a fresh passion for the Presence of God that outlasts the event.
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
                              <p className='text-lg font-medium'>
                                Restoration
                              </p>
                              <p className='text-base text-muted-foreground'>
                                Returning to the original pattern of intimacy where every believer has direct access to the Throne.
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
      <Ministration />
      <FAQ />
    </main>
  );
}
