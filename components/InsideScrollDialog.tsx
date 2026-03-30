"use client";

import * as React from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	CreditCard,
	Smartphone,
	Gift,
	Heart,
	Info,
	Copy,
	ExternalLink,
	LeafyGreen,
} from "lucide-react";
import { toast } from "sonner";
import { phone, email } from '@/config/site';

export default function InsideScrollDialog({ children }: { children: React.ReactElement }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		toast.success("Number copied to clipboard");
	};

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger render={children} />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black opacity-20 transition-opacity duration-[250ms] ease-[cubic-bezier(0.45,1.005,0,1.005)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 dark:opacity-70 supports-[-webkit-touch-callout:none]:absolute" />
        <Dialog.Viewport className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden py-6 [@media(min-height:600px)]:pb-12 [@media(min-height:600px)]:pt-8">
          <Dialog.Popup
            data-lenis-prevent
            className="relative flex w-[min(40rem,calc(100vw-2rem))] max-h-full max-w-full min-h-0 flex-col overflow-hidden rounded-lg bg-background p-8 text-foreground shadow-[0_24px_45px_rgba(0,0,0,0.2)] border border-border transition-all duration-[300ms] ease-[cubic-bezier(0.45,1.005,0,1.005)] data-[starting-style]:scale-[0.98] data-[starting-style]:opacity-0 data-[ending-style]:scale-[0.98] data-[ending-style]:opacity-0"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <Dialog.Title className="m-0 text-3xl font-bebas tracking-wider leading-[1.875rem]">
                Partner with the Non-Stop Series
              </Dialog.Title>
            </div>
            <Dialog.Description className="m-0 mb-4 text-base leading-[1.6rem] text-muted-foreground">
               Your sacrifice sustains the 144-hour altar of worship. Choose your preferred way to give.
            </Dialog.Description>
            <ScrollArea.Root className="relative flex min-h-0 flex-1 overflow-hidden before:absolute before:top-0 before:h-px before:w-full before:bg-border before:content-[''] after:absolute after:bottom-0 after:h-px after:w-full after:bg-border after:content-['']">
              <ScrollArea.Viewport className="flex-1 min-h-0 overflow-y-auto overscroll-contain py-6 pr-6 pl-1 focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-blue-800">
                <ScrollArea.Content className="flex flex-col gap-6">
                <Tabs defaultValue='cash' className='w-full'>
							<TabsList className='grid w-full grid-cols-2 bg-muted border border-border mb-8 h-14 min-h-[44px]'>
								<TabsTrigger
									value='cash'
									className='data-[state=active]:bg-amber-500 data-[state=active]:text-primary-foreground uppercase font-semibold text-xs sm:text-sm tracking-wide h-full'
								>
								Cash Donation
							</TabsTrigger>
							<TabsTrigger
								value='kind'
								className='data-[state=active]:bg-amber-500 data-[state=active]:text-primary-foreground uppercase font-semibold text-xs sm:text-sm tracking-wide h-full'
							>
								In-Kind Sacrifice
							</TabsTrigger>
						</TabsList>

						<TabsContent value='cash' className='space-y-5'>
							<Accordion
								type='single'
								collapsible
								className='w-full space-y-4'
							>
								{/* Mobile Money */}
								<AccordionItem
									value='momo'
									className='bg-card dark:border-white/10 dark:bg-white/5 border-border data-[state=open]:border-amber-500/50 data-[state=open]:bg-amber-500/10 rounded-xl border transition-all duration-300 px-5 group'
								>
									<AccordionTrigger className='hover:no-underline py-5 px-0'>
										<div className='flex flex-1 items-center justify-between pr-4'>
											<div className='flex items-center gap-5'>
												<div className='p-3 rounded-xl transition-colors bg-amber-500/10 group-data-[state=open]:bg-amber-500/20 group-hover:bg-amber-500/20'>
													<Smartphone className='size-7 text-amber-500 dark:text-amber-400' />
												</div>
												<div className='text-left space-y-1'>
													<p className='text-xl text-foreground tracking-tight'>
														Mobile Money
													</p>
													<p className='text-sm font-opensans text-muted-foreground'>
														MTN, Vodafone,
														AirtelTigo
													</p>
												</div>
											</div>
											<div
												className='text-xs font-bold font-opensans tracking-wider text-amber-600 dark:text-amber-400 
											bg-amber-500/10 px-3 py-1.5 rounded-md uppercase'
											>
												GHANA
											</div>
										</div>
									</AccordionTrigger>
									<AccordionContent className='pt-0 pb-5'>
										<div className='pt-5 border-t border-border space-y-4'>
											<div className='flex items-center justify-between bg-muted/50 p-4 rounded-xl border border-border'>
												<div>
													<p className='text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1'>
														MTN / Telecel Cash
													</p>
													<p className='font-mono text-xl text-amber-600 dark:text-amber-400 font-bold tracking-wider'>
														{phone}
													</p>
												</div>
												<Button
													size='icon'
													variant='ghost'
													className='hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-500/10 h-12 w-12 text-muted-foreground rounded-full'
													onClick={(e) => {
														e.stopPropagation();
														copyToClipboard(phone);
													}}
												>
													<Copy className='size-6' />
												</Button>
											</div>
											<div className='flex items-center justify-between bg-muted/50 p-4 rounded-xl border border-border'>
												<div>
													<p className='text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1'>
														AT Money
													</p>
													<p className='font-mono text-xl text-amber-600 dark:text-amber-400 font-bold tracking-wider'>
														{phone}
													</p>
												</div>
												<Button
													size='icon'
													variant='ghost'
													className='hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-500/10 h-12 w-12 text-muted-foreground rounded-full'
													onClick={(e) => {
														e.stopPropagation();
														copyToClipboard(phone);
													}}
												>
													<Copy className='size-6' />
												</Button>
											</div>
											<p className='text-center text-[15px]  font-opensans  text-muted-foreground mt-4 font-medium'>
												Account Name:{" "}
												<span className='text-foreground font-semibold'>
													The Non-Stop Worship
												</span>
											</p>
										</div>
									</AccordionContent>
								</AccordionItem>

								{/* PayPal */}
								<AccordionItem
									value='paypal'
									className='bg-card dark:border-white/10 dark:bg-white/5 border-border data-[state=open]:border-blue-500/50 data-[state=open]:bg-blue-500/10 rounded-xl border transition-all duration-300 px-5 group'
								>
									<AccordionTrigger className='hover:no-underline py-5 px-0'>
										<div className='flex flex-1 items-center justify-between pr-4'>
											<div className='flex items-center gap-5'>
												<div className='p-3 rounded-xl transition-colors bg-blue-500/10 group-data-[state=open]:bg-blue-500/20 group-hover:bg-blue-500/20'>
													<svg
														className='size-7 text-blue-600 dark:text-blue-400'
														viewBox='0 0 24 24'
														fill='currentColor'
													>
														<path d='M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.729C5.01 3.312 5.39 3 5.82 3h8.344c3.153 0 5.03 1.545 4.69 4.306-.356 2.898-2.14 4.545-5.013 4.545h-1.928a.48.48 0 0 0-.464.385l-1.07 6.786a.48.48 0 0 1-.47.412h.016zM12.5 13.5c3.0 0 5.5-1.5 6.0-5.0.4-3.5-1.5-5.0-5.5-5.0H6.5L3.5 21h4.0l1.0-6.5h4.0z' />
													</svg>
												</div>
												<div className='text-left space-y-1'>
													<p className='text-xl text-foreground tracking-tight'>
														PayPal
													</p>
													<p className='text-sm  font-opensans  text-muted-foreground'>
														Global Payments
													</p>
												</div>
											</div>
											<div className='text-xs font-bold  font-opensans  tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-md uppercase'>
												GLOBAL
											</div>
										</div>
									</AccordionTrigger>
									<AccordionContent className='pt-0 pb-5'>
										<div className='pt-5 border-t border-border text-center'>
											<p className='text-[15px]  font-opensans  text-muted-foreground leading-relaxed mb-6'>
												Send your contribution securely
												via PayPal. You will be
												redirected to our official
												gateway.
											</p>
											<a
												href='#'
												target='_blank'
												className='inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold transition-colors'
											>
												Proceed to PayPal{" "}
												<ExternalLink className='size-5' />
											</a>
										</div>
									</AccordionContent>
								</AccordionItem>

								{/* Credit Card */}
								<AccordionItem
									value='card'
									className='bg-card dark:border-white/10 dark:bg-white/5 border-border data-[state=open]:border-emerald-500/50 data-[state=open]:bg-emerald-500/10 rounded-xl border transition-all duration-300 px-5 group'
								>
									<AccordionTrigger className='hover:no-underline py-5 px-0'>
										<div className='flex flex-1 items-center justify-between pr-4'>
											<div className='flex items-center gap-5'>
												<div className='p-3 rounded-xl transition-colors bg-emerald-500/10 group-data-[state=open]:bg-emerald-500/20 group-hover:bg-emerald-500/20'>
													<CreditCard className='size-7 text-emerald-600 dark:text-emerald-400' />
												</div>
												<div className='text-left space-y-1'>
													<p className='text-xl text-foreground tracking-tight'>
														Credit / Debit Card
													</p>
													<p className='text-sm  font-opensans  text-muted-foreground'>
														Visa, Mastercard, Amex
													</p>
												</div>
											</div>
											<div className='text-xs font-bold  font-opensans  tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-md uppercase'>
												SECURE
											</div>
										</div>
									</AccordionTrigger>
									<AccordionContent className='pt-0 pb-5'>
										<div className='pt-5 border-t border-border text-center'>
											<p className='text-[15px]  font-opensans  text-muted-foreground leading-relaxed mb-6'>
												Support us globally using any
												major credit or debit card
												through our secure Stripe
												portal.
											</p>
											<a
												href='#'
												target='_blank'
												className='inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold transition-colors'
											>
												Pay via Card{" "}
												<ExternalLink className='size-5' />
											</a>
										</div>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</TabsContent>

						<TabsContent value='kind' className='space-y-5'>
							<div className='p-5 rounded-xl border border-amber-500/30 bg-amber-500/10 mb-2'>
								<div className='flex gap-4 items-start'>
									<Info className='size-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5' />
									<p className='text-[15px]  font-opensans  text-foreground/80 leading-relaxed font-medium'>
										We gratefully accept sacrifices in kind
										to support the hospitality and logistics
										of the Non-Stop.
									</p>
								</div>
							</div>

							<Accordion
								type='single'
								collapsible
								className='w-full space-y-4'
							>
								<AccordionItem
									value='livestock'
									className='bg-card dark:border-white/10 dark:bg-white/5 border-border data-[state=open]:border-amber-500/50 data-[state=open]:bg-amber-500/10 data-[state=open]:shadow-[0_0_15px_rgba(245,158,11,0.1)] rounded-xl border transition-all duration-300 px-5 group'
								>
									<AccordionTrigger className='hover:no-underline py-5 px-0'>
										<div className='flex flex-1 items-center justify-between pr-4'>
											<div className='flex items-center gap-5'>
												<div className='p-3 rounded-xl transition-colors bg-amber-500/10 group-data-[state=open]:bg-amber-500/20 group-hover:bg-amber-500/20'>
													<Gift className='size-7 text-amber-600 dark:text-amber-400 group-data-[state=open]:text-amber-600 dark:group-data-[state=open]:text-amber-400' />
												</div>
												<div className='text-left space-y-1'>
													<p className='text-xl text-foreground tracking-tight'>
														Livestock
													</p>
													<p className='text-[13px]  font-opensans  font-medium text-muted-foreground uppercase tracking-wider'>
														Cows, Sheep, Goats
													</p>
												</div>
											</div>
										</div>
									</AccordionTrigger>
									<AccordionContent className='pt-0 pb-5'>
										<div className='pt-5 border-t border-border'>
											<p className='text-[15px]  font-opensans  text-muted-foreground mb-5 text-center leading-relaxed'>
												To deliver{" "}
												<strong className='text-foreground font-semibold'>
													Live Animals (Cow, Sheep,
													etc.)
												</strong>
												, please contact our logistics
												coordinator directly:
											</p>
											<div className='flex flex-col gap-3'>
												<a
													href={`tel:${phone}`}
													className='flex items-center justify-center h-14 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-mono text-lg font-medium transition-colors border border-transparent hover:border-border'
												>
													📞 {phone}
												</a>
												<a
													href={`mailto:${email}`}
													className='flex items-center justify-center h-14 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-mono text-lg font-medium transition-colors border border-transparent hover:border-border'
												>
													✉️ {email}
												</a>
											</div>
										</div>
									</AccordionContent>
								</AccordionItem>

								<AccordionItem
									value='food'
									className='bg-card dark:border-white/10 dark:bg-white/5 border-border data-[state=open]:border-green-500/50 data-[state=open]:bg-green-500/10 data-[state=open]:shadow-[0_0_15px_rgba(34,197,94,0.1)] rounded-xl border transition-all duration-300 px-5 group'
								>
									<AccordionTrigger className='hover:no-underline py-5 px-0'>
										<div className='flex flex-1 items-center justify-between pr-4'>
											<div className='flex items-center gap-5'>
												<div className='p-3 rounded-xl transition-colors bg-green-500/10 group-data-[state=open]:bg-green-500/20 group-hover:bg-green-500/20'>
													<LeafyGreen className='size-7 text-green-600 dark:text-green-400 group-data-[state=open]:text-green-600 dark:group-data-[state=open]:text-green-400' />
												</div>
												<div className='text-left space-y-1'>
													<p className='text-xl text-foreground tracking-tight'>
														Food Supplies
													</p>
													<p className='text-[13px]  font-opensans  font-medium text-muted-foreground uppercase tracking-wider'>
														Rice, Oil, Water
													</p>
												</div>
											</div>
										</div>
									</AccordionTrigger>
									<AccordionContent className='pt-0 pb-5'>
										<div className='pt-5 border-t border-border'>
											<p className='text-[15px]  font-opensans  text-muted-foreground mb-5 text-center leading-relaxed'>
												To deliver{" "}
												<strong className='text-foreground font-semibold'>
													Food & Water Supplies
												</strong>
												, please contact our logistics
												coordinator directly:
											</p>
											<div className='flex flex-col gap-3'>
												<a
													href={`tel:${phone}`}
													className='flex items-center justify-center h-14 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-mono text-lg font-medium transition-colors border border-transparent hover:border-border'
												>
													📞 {phone}
												</a>
												<a
													href={`mailto:${email}`}
													className='flex items-center justify-center h-14 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-mono text-lg font-medium transition-colors border border-transparent hover:border-border'
												>
													✉️ {email}
												</a>
											</div>
										</div>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</TabsContent>
					</Tabs>

					<p className='mt-8 text-center text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]'>
						Thank you for your generosity
					</p>
                </ScrollArea.Content>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar className="pointer-events-none absolute m-1 flex w-[0.25rem] justify-center rounded-[1rem] opacity-0 transition-opacity duration-[250ms] data-[hovering]:pointer-events-auto data-[hovering]:opacity-100 data-[hovering]:duration-[75ms] data-[scrolling]:pointer-events-auto data-[scrolling]:opacity-100 data-[scrolling]:duration-[75ms] md:w-[0.325rem]">
                <ScrollArea.Thumb className="w-full rounded-[inherit] bg-muted-foreground/30 before:absolute before:left-1/2 before:top-1/2 before:h-[calc(100%+1rem)] before:w-[calc(100%+1rem)] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
            <div className="mt-4 flex justify-end gap-3">
              <Dialog.Close render={<Button variant="outline">Close</Button>} />
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
