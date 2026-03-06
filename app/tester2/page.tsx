import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

export default function NonStopSeriesSlider() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden h-dvh'>
      <Marquee className=' '>
        <div className='text-[6.5rem] md:text-[12.5rem] md:leading-[0.8] md:mt-10 uppercase -left-14 bottom-16 md:bottom-5 '>
          <div className='w-full opacity-20'>
            <p> The Non-Stop Series &#x2014; </p>
          </div>
        </div>
      </Marquee>

      <div className='from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r'></div>
      <div className='from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l'></div>
    </div>
  );
}
