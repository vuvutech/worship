export default function SchedulePage() {
  return (
    <main className='w-full py-20' id="UpNextCard">
      {/* Hero Banner */}
      <div
        className='w-full h-[220px] sm:h-[320px] bg-center bg-cover relative flex items-end pt-20'
        style={{ backgroundImage: "url('/images/community_worship.jpg')" }}
      >
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative z-10 max-w-4xl mx-auto w-full px-4 pb-6 sm:pb-10'>
          <p className='text-xs sm:text-sm uppercase tracking-widest text-white/70 mb-1 sm:mb-2 font-medium'>
            Upcoming Event
          </p>
          <h1 className='text-3xl sm:text-5xl font-bold text-white leading-tight'>
            The Non-Stop
          </h1>
        </div>
      </div>

      {/* Event Card */}
      <div className='max-w-5xl mx-auto py-8 sm:py-12'>
        <div className='flex flex-col md:flex-row rounded-2xl overflow-hidden border shadow-md bg-card text-card-foreground'>

          {/* Date Strip — horizontal on mobile, vertical column on md+ */}
          <div className='flex flex-row items-center justify-center gap-3 md:flex-col md:justify-center md:items-center py-4 px-6 md:py-8 md:w-1/4 bg-primary text-primary-foreground font-bold uppercase leading-none shrink-0'>
            <div className='text-base md:text-2xl'>Oct</div>
            <div className='text-4xl md:text-7xl font-extrabold'>10</div>
            <div className='text-base md:text-lg'>2026</div>
          </div>

          {/* Content Column */}
          <div className='p-5 sm:p-8 flex flex-col gap-4'>
            <div>
              <h2 className='text-xl sm:text-3xl font-bold   mb-1'>
                The Non-Stop — Worship Without Ceasing
              </h2>
              <p className='text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-medium'>
                6 Days · 6 Nights · One Unbroken Flame
              </p>
            </div>

            <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
              Rooted in the biblical mandate of Leviticus 6:13 —{" "}
              <em>
                "The fire must be kept burning on the altar continuously; it
                must not go out"
              </em>{" "}
              — The Non-Stop is a sacred gathering where music, prayer, and
              the Word never cease. For six days and six nights, we press
              into the Presence of God together, recovering the tabernacle of
              David and restoring the ancient pattern of continuous worship.
            </p>

            <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
              This is not a concert. It is a sacrifice. Every hour is an act
              of consecration, every song a declaration that God alone is
              worthy of our undivided attention. Come for an hour. Stay for
              the week. Leave transformed.
            </p>

            <div className='pt-3 border-t flex flex-col gap-3 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='shrink-0'
                >
                  <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
                  <line x1='16' x2='16' y1='2' y2='6' />
                  <line x1='8' x2='8' y1='2' y2='6' />
                  <line x1='3' x2='21' y1='10' y2='10' />
                </svg>
                <span>October 10 – 16, 2026 &bull; Begins at 6:00 PM</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='shrink-0'
                >
                  <path d='M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
                <span>Logos-Rhema Community Assembly, Trade Fair, La, Accra</span>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className='mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
          {[
            {
              title: "Continuous Worship",
              description:
                "Live music and prayer spanning every hour — day and night — from opening night through the final morning.",
            },
            {
              title: "The Word",
              description:
                "Ministration from diverse voices, each carrying a piece of the revelation God is releasing in this hour.",
            },
            {
              title: "Corporate Prayer",
              description:
                "Intercession, declaration, and prophetic worship woven into every session to ignite and sustain the fire.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className='rounded-xl border p-5 sm:p-6 bg-card text-card-foreground hover:shadow-md transition-shadow'
            >
              <h3 className='font-semibold text-base sm:text-lg mb-1 sm:mb-2'>
                {item.title}
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-8 sm:mt-12 text-center px-4'>
          <p className='text-muted-foreground mb-4 text-sm sm:text-base'>
            More details — including venue, schedule, and speakers — coming
            soon.
          </p>
          <a
            href='/get-involved'
            className='inline-flex items-center justify-center h-12 w-full sm:w-auto px-8 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity'
          >
            Get Involved
          </a>
        </div>
      </div>
    </main>
  );
}
