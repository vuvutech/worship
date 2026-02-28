import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper";

export default function Home() {
  return (
    <LocomotiveScrollWrapper>
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12 max-lg:flex-col sm:gap-16 lg:items-center lg:gap-24">
          {/* Text + CTA column */}
          <div className="min-w-xs grow space-y-4">
            <p className="text-primary text-sm font-medium uppercase">Gallery</p>
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              Our Story in Pictures
            </h2>
            <p className="text-muted-foreground text-xl">
              Every image tells a story—explore our gallery to see our journey unfold
            </p>
            <button
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 group rounded-lg text-base has-[>svg]:px-6"
            >
              See all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-33.png"
                alt="Gallery image 1"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg row-span-2">
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-31.png"
                alt="Gallery image 2 (tall)"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-29.png"
                alt="Gallery image 3"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg row-span-2">
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-32.png"
                alt="Gallery image 4 (tall)"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg md:row-span-2">
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-28.png"
                alt="Gallery image 5 (tall on md+)"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-30.png"
                alt="Gallery image 6"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </LocomotiveScrollWrapper>
  );
}
