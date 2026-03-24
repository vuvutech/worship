"use client";

import { useState } from "react";
import { VideoPlayer } from "@/components/video-player";
import { Play } from "lucide-react";

type VideoType = "VOD" | "LIVE";

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string | null;
  type: VideoType;
  createdAt: Date;
}

interface Event {
  id: string;
  title: string;
  slug: string;
  startDate: Date;
  endDate: Date;
  poster: string | null;
  description: string | null;
  ministers: any[];
  sponsors: any[];
}

interface LiveDashboardProps {
  videos: Video[];
  events: Event[];
}

export function LiveDashboard({ videos, events }: LiveDashboardProps) {
  const liveStream = videos.find((video) => video.type === "LIVE");
  const vods = videos.filter((video) => video.type === "VOD");

  // Default to live stream, or the first VOD if no live stream is available
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(
    liveStream || vods[0] || null,
  );

  return (
    <div className='min-h-screen bg-background text-foreground selection:bg-red-600 selection:text-white pb-24'>
      {/* Hero Player Section */}
      <section className='w-full relative pt-8 px-4 md:px-8 max-w-[1600px] mx-auto'>
        {/* <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-red-900/10 to-black z-20" /> */}

        <div className='relative z-10 w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4'>
          {/* Main Video Player */}
          <div className='lg:col-span-4 space-y-4'>
            {selectedVideo ? (
              <>
                <VideoPlayer
                  key={selectedVideo.id}
                  url={selectedVideo.url}
                  isLive={selectedVideo.type === "LIVE"}
                  playing={true}
                  thumbnail={selectedVideo.thumbnail}
                />
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mt-4">
                  <div>
                    <h1 className='text-3xl md:text-4xl font-bold'>
                      {selectedVideo.title}
                    </h1>
                    <p className='text-neutral-400 mt-2'>
                      {selectedVideo.type === "LIVE"
                        ? "Broadcasting live from The Non-Stop"
                        : `Added on ${new Date(selectedVideo.createdAt).toLocaleDateString()}`}
                    </p>
                  </div>
                  {liveStream && selectedVideo.id !== liveStream.id && (
                    <button 
                      onClick={() => setSelectedVideo(liveStream)}
                      className="group flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-red-600/20 shrink-0"
                    >
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                      </span>
                      Return to Live Stream
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className='w-full aspect-video bg-neutral-900 rounded-xl flex items-center justify-center font-medium text-neutral-500'>
                No videos available.
              </div>
            )}
          </div>

          {/* Sidebar / Chat Simulator */}
          {/* <div className='lg:col-span-1 hidden lg:flex flex-col h-full  bg-neutral-900/50 border-white/10 rounded-xl overflow-hidden backdrop-blur-sm'>
            <div className='p-4 border-b border-white/10 bg-black/40'>
              <h3 className='font-medium text-sm text-neutral-300 uppercase tracking-wider'>
                Live Chat (Coming Soon)
              </h3>
            </div>
            <div className='flex-1 flex items-center justify-center p-8 text-center text-neutral-500 italic text-sm'>
              Connect with worshippers globally. Chat will be available during
              the 144-hour live stream.
            </div>
            <div className='p-4 border-t border-white/10 bg-black/40'>
              <input
                disabled
                placeholder='Log in to chat...'
                className='w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 cursor-not-allowed'
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* VOD Grid Section */}
      <section className='w-full relative z-10 px-4 md:px-8 max-w-[1600px] mx-auto mt-16'>
        <h2 className='text-2xl font-semibold mb-6'>Past Ministrations</h2>

        {vods.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {vods.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className={`group relative aspect-video bg-neutral-900 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-white/50 hover:shadow-2xl ${selectedVideo?.id === video.id ? "ring-2 ring-red-600" : "ring-1 ring-white/10"}`}
              >
                {/* Thumbnail */}
                <img
                  src={
                    video.thumbnail ||
                    "/images/placeholders/original/1600x1200-video.png"
                  }
                  alt={video.title}
                  className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60'
                />

                {/* Overlay Play Icon */}
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='bg-red-600 p-4 rounded-full shadow-lg'>
                    <Play className='size-6 text-white fill-white ml-1' />
                  </div>
                </div>

                {/* Title overlay gradient */}
                <div className=' absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent'>
                  <p className='font-medium truncate text-white'>
                    {video.title}
                  </p>
                </div>

                {/* Playing Indicator */}
                {selectedVideo?.id === video.id && (
                  <div className='absolute top-2 right-2 bg-red-600 text-xs font-bold px-2 py-1 rounded shadow-md uppercase tracking-wider'>
                    Playing
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className='w-full py-12 text-center text-neutral-500 border border-white/10 border-dashed rounded-xl'>
            Check back later for past ministrations and recorded sessions.
          </div>
        )}
      </section>

      {/* Upcoming Events Section */}
      <section className='w-full relative z-10 px-4 md:px-8 max-w-[1600px] mx-auto mt-24'>
        {/* Header Section */}
        <div className='text-left mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Upcoming Ministrations
          </h2>
          <p className='text-muted-foreground text-lg'>
            Discover upcoming gatherings and experiences crafted for unforgettable moments in His presence.
          </p>
        </div>

        {events.length > 0 ? (
          <>
            {/* Event Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16'>
              {events.map((event, idx) => {
                const fallbackImages = [
                  "/nonstop/nonstop-032.jpg",
                  "/nonstop/nonstop-038.jpg",
                  "/nonstop/nonstop-054.jpg",
                  "/nonstop/nonstop-009.jpg",
                  "/nonstop/nonstop-011.jpg",
                ];
                const displayPoster =
                  event.poster ||
                  fallbackImages[idx % fallbackImages.length];

                return (
                  <div
                    key={event.id}
                    className='bg-none dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 overflow-hidden group flex flex-col'
                  >
                    <div className='relative overflow-hidden'>
                      <img
                        src={displayPoster}
                        alt={event.title}
                        className='w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                      />
                      <div className='absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3.5 py-2 text-center shadow-xl'>
                        <div className='text-2xl font-black text-black leading-none'>
                          {new Date(event.startDate).getDate()}
                        </div>
                        <div className='text-xs text-neutral-600 font-bold uppercase mt-1'>
                          {new Date(event.startDate).toLocaleString("default", {
                            month: "short",
                          })}
                        </div>
                      </div>
                    </div>
                    <div className='p-6 md:p-8 flex flex-col flex-grow'>
                      <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-red-600 dark:group-hover:text-yellow-400 transition-colors'>
                        {event.title}
                      </h3>
                      <p className='text-muted-foreground text-sm md:text-base leading-relaxed mb-6 line-clamp-3'>
                        {event.description ||
                          "Join us for a powerful time of worship, prayer, and ministry as we keep the altar burning."}
                      </p>
                      
                      <div className='mt-auto pt-4 flex items-center justify-between border-t border-black/10 dark:border-white/10'>
                        <a
                          href={`/schedule#${event.slug || event.id}`}
                          className='inline-flex items-center text-sm font-semibold text-teal-500 hover:text-teal-400 transition-colors group/link'
                        >
                          View Details
                          <svg
                            className='ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2.5'
                              d='M9 5l7 7-7 7'
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* See More Button */}
            <div className='text-center'>
              <a
                href='/schedule'
                className='inline-flex items-center px-8 py-4 text-sm font-bold text-foreground bg-transparent border-2 border-black/20 dark:border-white/20 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300'
              >
                <span>See Full Schedule</span>
                <svg
                  className='ml-2 w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    d='M9 5l7 7-7 7'
                  ></path>
                </svg>
              </a>
            </div>
          </>
        ) : (
          <div className='w-full py-20 text-center text-muted-foreground border border-black/10 dark:border-white/10 border-dashed rounded-3xl bg-black/5 dark:bg-white/5'>
            Stay tuned for our upcoming spiritual gatherings.
          </div>
        )}
      </section>
    </div>
  );
}
