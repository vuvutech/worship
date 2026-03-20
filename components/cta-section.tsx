import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 container max-w-(--breakpoint-xl) mx-auto ">
      <div className="container mx-auto px-4 text-center lg:text-start">
        <div className="bg-muted flex w-full flex-col-reverse gap-6 rounded-lg p-12 md:rounded-xl lg:flex-row lg:items-center lg:px-10 lg:py-6 h-[400px]">
          <div className="grow space-y-6">
            <h3 className="text-3xl font-bold md:text-4xl">Ready to Supercharge Your SaaS?</h3>
            <p className="text-muted-foreground lg:text-lg">
              Start your free trial today and discover how our platform can help you streamline your
              operations, boost productivity, and grow faster.
            </p>
            <Button asChild variant="default" size="lg">
              <a href="#">Start Free Trial</a>
            </Button>
          </div>
          <div className="m-auto flex shrink-0 flex-col gap-4 sm:flex-row lg:m-0">
            <figure className="relative aspect-square w-36 lg:w-52">
              <Image src="/images/cta.webp" fill alt="..." />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
