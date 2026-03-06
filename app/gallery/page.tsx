import React from 'react'

export default function GalleryPage() {
  return (
<header className="overflow-hidden bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)] pt-8 pb-24 text-slate-400 lg:py-16">

  <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mx-auto mt-24 lg:mt-56">
    <div className="lg:flex">
      <div className="flex-auto">
        <h1 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-19 lg:text-left">
          Make your ideas look awesome, without relying on a designer.
        </h1>
        <p className="mt-6 max-w-3xl text-2xl leading-10 tracking-tight sm:text-center lg:text-left">
          Learn how to design beautiful user interfaces by yourself using
          specific tactics explained from a developer’s point-of-view.
        </p>
        <div className="mt-12 hidden lg:flex">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-sky-300 px-6 py-2 text-base font-semibold text-slate-900 hover:bg-sky-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-hidden"
          >
            Get two free chapters
          </button>
          <a
            href="#get-refactoring-ui"
            className="ml-6 rounded-full border border-white/10 bg-slate-700/40 px-6 py-2 font-semibold text-white hover:border-white/20 hover:bg-slate-700/60 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-hidden"
          >
            Buy now
          </a>
        </div>
      </div>
      <div className="relative mt-24 flex-none lg:mt-0 lg:w-80">
        <div className="top-1/2 left-8 mx-auto w-77 rotate-12 lg:absolute lg:w-95 lg:-translate-y-1/2">
          <div className="pointer-events-none">
            <div className="absolute top-16 -right-14 h-px w-[400%] bg-linear-to-l from-slate-400 opacity-20" />
            <div className="absolute top-16 left-full ml-14 h-px w-screen bg-slate-400 opacity-20" />
            <div
              className="absolute top-[-135%] right-11 bottom-[-65%] w-px opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(148, 163, 184, 0) 30%, rgb(148, 163, 184), rgba(148, 163, 184, 0))"
              }}
            />
            <div
              className="absolute -right-24 -bottom-16 h-px w-[400%] opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(119, 185, 250, 0) 60%, rgb(119, 185, 250) 77%, rgba(119, 185, 250, 0) 94%)"
              }}
            />
            <div
              className="absolute top-[-120%] bottom-[-80%] -left-12 w-px opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(148, 163, 184, 0) 30%, rgb(148, 163, 184), rgba(148, 163, 184, 0))"
              }}
            />
            <div className="absolute top-16 -left-80 mt-[-0.5px] h-[2px] w-28 rounded-full bg-linear-to-r from-blue-500" />
            <div className="absolute bottom-8 -left-12 ml-[-0.5px] h-28 w-[2px] rounded-full bg-linear-to-t from-violet-400" />
          </div>
          <img
            src="/build/assets/book-CiJLZ6K5.png"
            alt=""
            className="relative"
          />
        </div>
        <div className="relative mt-16 flex flex-col sm:flex-row sm:justify-center lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-sky-300 px-6 py-2 text-base font-semibold text-slate-900 hover:bg-sky-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-hidden text-center"
          >
            Get two free chapters
          </button>
          <a
            href="#get-refactoring-ui"
            className="mt-6 rounded-full border border-white/10 bg-slate-700/40 px-6 py-2 text-center font-semibold text-white hover:border-white/20 hover:bg-slate-700/60 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-hidden sm:mt-0 sm:ml-6"
          >
            Buy now
          </a>
        </div>
      </div>
    </div>
    <ul className="relative mx-auto mt-24 max-w-sm text-white lg:mt-56 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-8">
      <li className="">
        <figure>
          <div className="flex justify-center space-x-2 text-slate-500">
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
          </div>
          <blockquote className="mt-6 text-center text-xl leading-8 tracking-tight before:content-['“'] after:content-['”']">
            This is the survival kit I wish I had when I was starting out
            building apps.
          </blockquote>
          <figcaption className="mt-6 flex justify-center">
            <img
              src="/build/assets/derrickreimer-eE6evVaD.jpg"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold">Derrick Reimer</p>
              <p className="text-sm text-slate-500">
                Founder of <a href="https://savvycal.com/">SavvyCal</a>
              </p>
            </div>
          </figcaption>
        </figure>
      </li>
      <li className="hidden lg:block">
        <figure>
          <div className="flex justify-center space-x-2 text-slate-500">
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
          </div>
          <blockquote className="mt-6 text-center text-xl leading-8 tracking-tight before:content-['“'] after:content-['”']">
            This book is fantastic for engineers learning how to design.
          </blockquote>
          <figcaption className="mt-6 flex justify-center">
            <img
              src="/build/assets/maccaw-D1rVQDsH.jpg"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold">Alex MacCaw</p>
              <p className="text-sm text-slate-500">
                Founder of <a href="https://clearbit.com/">Clearbit</a>
              </p>
            </div>
          </figcaption>
        </figure>
      </li>
      <li className="hidden lg:block">
        <figure>
          <div className="flex justify-center space-x-2 text-slate-500">
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
            <svg width={24} height={24} fill="currentColor">
              <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z" />
            </svg>
          </div>
          <blockquote className="mt-6 text-center text-xl leading-8 tracking-tight before:content-['“'] after:content-['”']">
            This book Refactoring UI is a no-brainer for anyone in the web
            industry.
          </blockquote>
          <figcaption className="mt-6 flex justify-center">
            <img
              src="/build/assets/mijustin-9UOSDlXM.jpg"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold">Justin Jackson</p>
              <p className="text-sm text-slate-500">
                Co-founder of <a href="https://transistor.fm/">Transistor</a>
              </p>
            </div>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
</header>

  )
}
