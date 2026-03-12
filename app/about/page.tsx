import { AboutCompliment } from "@/components/about-compliment";
import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper";

export default function Home() {
  return (
    <LocomotiveScrollWrapper>
        <div className='flex flex-1 items-center justify-center'>
          <section className='py-6 w-full'>
            <div className='container'>
              <div className='flex flex-col items-center justify-start gap-6 lg:flex-row'>
                <div className='flex w-full flex-col items-start justify-start gap-2 lg:w-1/2'>
                  <div className='pr-2'>
                    <h1 className='mb-6 text-2xl uppercase md:text-4xl lg:mb-8 lg:text-5xl'>
                      The Non-Stop Series
                    </h1>
                    <p className='mb-9 text-muted-foreground lg:text-xl'>
                      For the past 22 years , the Logos-Rhema Foundation for
                      Leadership Resource Development, based in Accra, Ghana,
                      has organised and held under its auspices, a series of
                      non-stop praise & worship programmes. The series began
                      with 24-hour sessions which progressed to 48 hours, 72
                      hours, 96 hours, 120 hours, and now 144 hours; the first
                      session of which was held 2021.
                    </p>
                  </div>

                  <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
                    <img
                      alt='about 1'
                      className='aspect-[0.7] w-full rounded-lg object-cover md:w-1/2'
                      src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg'
                    />

                    <div className='flex w-full flex-col items-center justify-center gap-6 md:w-1/2'>
                      <img
                        alt='about 2'
                        className='aspect-[1.1] rounded-lg object-cover'
                        src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg'
                      />
                      <img
                        alt='about 3'
                        className='aspect-[0.7] rounded-lg object-cover'
                        src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-vGgn0xLdy8s-unsplash.jpg'
                      />
                    </div>
                  </div>
                </div>

                <div className='flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48'>
                  <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
                    <img
                      alt='about 4'
                      className='aspect-[0.9] w-full rounded-lg object-cover md:w-1/2'
                      src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg'
                    />

                    <div className='flex w-full flex-col items-center justify-center gap-6 md:w-1/2'>
                      <img
                        alt='about 5'
                        className='aspect-[0.8] rounded-lg object-cover'
                        src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg'
                      />
                      <img
                        alt='about 6'
                        className='aspect-[0.9] rounded-lg object-cover'
                        src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg'
                      />
                    </div>
                  </div>

                  <div className='px-8'>
                    <h1 className='mb-8 text-2xl font-semibold lg:mb-6'>
                      Around-The-Clock Ministration
                    </h1>
                    <p className='mb-9 lg:text-xl'>
                      Jesus said, “The hour is coming and is already here when
                      the true worshipers will worship the Father in spirit and
                      truth; for the Father is looking for those who will
                      worship Him that way.” (John 4:23-25)
                    </p>
                    <p className='text-muted-foreground'>
                      In the Old Testament days, there was one saint, David,
                      tasted the fruits of the truth of the word of God and the
                      powers of the world to come, he also tasted salvation and
                      experienced the Holy Spirit (Psalm 51). He was able to
                      experience all that because he understood how to touch the
                      heart of the Father (Acts 13:22). Regardless of his
                      weaknesses and many flaws, David genuinely, was out all
                      time to please God and to give Him pleasure. Because the
                      purpose of everyone’s creation as found in Revelations
                      4:11 is to please and give the Lord, pleasure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      <AboutCompliment />
    </LocomotiveScrollWrapper>
  );
}
