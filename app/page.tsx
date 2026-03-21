import HeroSection from "@/components/hero-section";
import { Ministration } from "../components/ministrations-main";
import FAQ from "@/components/faq";
import { AboutCompliment } from "@/components/about-compliment";
import LocomotiveScroll from "locomotive-scroll";
import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper";
import HeroHeadline from "@/components/hero-headline";

export default function Page() {
  return (
    <LocomotiveScrollWrapper>
      <main className='w-full relative'>
        <div className="h-[100dvh] md:hidden" aria-hidden="true" /> {/* Spacer for absolute HeroSection on mobile */}
        <HeroSection />

        <section className='px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 container max-w-(--breakpoint-xl) mx-auto '>
          <AboutCompliment />

         

          <Ministration />
          <FAQ />
        </section>
      </main>
    </LocomotiveScrollWrapper>
  );
}
