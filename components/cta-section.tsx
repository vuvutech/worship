import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className='px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 container max-w-(--breakpoint-xl) mx-auto '>
      <div className='container mx-auto px-4 text-center lg:text-start'>
        <div className='bg-primary/5 dark:bg-muted/30 border border-primary/10 flex w-full flex-col-reverse gap-4 rounded-lg p-12 md:rounded-3xl lg:flex-row lg:items-center lg:px-14 lg:py-10 min-h-[400px] overflow-hidden relative'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none' />

          <div className='grow space-y-6 relative z-10'>
            <h6 className='text-3xl font-bold md:text-4xl lg:text-5xl tracking-tight leading-tight'>
              Join the <span className='text-primary'>Eternal Sound</span> of
              Heaven
            </h6>
            <p className='text-muted-foreground lg:text-xl max-w-3xl leading-relaxed'>
              Become part of a 22-year spiritual legacy. Join thousands across
              the globe in a movement of recovery, revival, and restoration
              through the power of unending worship.
            </p>
            <div className='pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Button
                asChild
                variant='default'
                size='lg'
                className='rounded-full px-10 h-14 text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95'
              >
                <a href='/partner'>Partner with the Mission</a>
              </Button>
            </div>
          </div>
          <div className='m-auto flex shrink-0 flex-col gap-4 sm:flex-row lg:m-0 relative z-10'>
            <figure className='relative aspect-square w-48 lg:w-72 drop-shadow-2xl'>
              <Image
                src='/images/cta.webp'
                fill
                alt='The Non-Stop Series Call to Action'
                className='object-contain'
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
