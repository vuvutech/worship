import React from "react";
import { Button } from "./ui/button";
import { Marquee } from "./ui/marquee";
import { FooterComponent } from "./footer-main";
import CTASection from "./cta-section";
import { Separator } from "./ui/separator";
const footer = () => {
  return (
    <>
      <Separator className='my-5 mb-8' />
      <CTASection />
      <FooterComponent />
    </>
  );
};

export default footer;
