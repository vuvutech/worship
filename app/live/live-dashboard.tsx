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
                <div>
                  <h1 className='text-3xl md:text-4xl font-bold   mt-4'>
                    {selectedVideo.title}
                  </h1>
                  <p className='text-neutral-400 mt-2'>
                    {selectedVideo.type === "LIVE"
                      ? "Broadcasting live from The Non-Stop"
                      : `Added on ${new Date(selectedVideo.createdAt).toLocaleDateString()}`}
                  </p>
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
      <section className='w-full relative z-10 px-4 md:px-8 max-w-[1600px] mx-auto mt-16'>
        <h2 className='text-3xl font-bold mb-8'>Upcoming Events</h2>
        {events.length > 0 ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8'>
            {events.map((event) => (
              <div
                key={event.id}
                className='bg-transparent border border-white/10 rounded-[2rem] p-4 flex flex-col sm:flex-row gap-6 hover:bg-white/5 transition-colors group'
              >
                {/* Left side: Image container */}
                <div className='w-full sm:w-[45%] xl:w-[40%] relative aspect-[4/3] overflow-hidden rounded-2xl shrink-0'>
                  {event.poster ? (
                    <img
                      src={event.poster}
                      alt={event.title}
                      className='w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105'
                    />
                  ) : (
                    <div className='w-full h-full bg-neutral-900 flex items-center justify-center rounded-2xl'>
                      <span className='text-neutral-600'>No poster</span>
                    </div>
                  )}
                  {/* Badge */}
                  <div className='absolute top-3 right-3 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md'>
                    event
                  </div>
                </div>

                {/* Right side: Content */}
                <div className='flex-1 flex flex-col py-2 pr-2 justify-center'>
                  {/* Date and Time */}
                  <div className='flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3'>
                    <span>
                      {new Date(event.startDate).toLocaleDateString(undefined, {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {new Date(event.startDate).toLocaleTimeString(undefined, {
                        hour: '2-digit', minute: '2-digit'
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className='text-xl xl:text-2xl font-bold leading-snug mb-3 text-white group-hover:text-red-100 transition-colors'>
                    {event.title}
                  </h3>

                  {/* Description */}
                  {event.description && (
                    <p className='text-sm text-neutral-400 line-clamp-3 leading-relaxed mb-4'>
                      {event.description}
                    </p>
                  )}

                  {/* Link at bottom */}
                  <div className='mt-auto pt-2'>
                    <a href={`/schedule#${event.slug || event.id}`} className='inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-500 transition-colors'>
                      Read article
                      <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='w-full py-12 text-center text-neutral-500 border border-white/10 border-dashed rounded-xl'>
            Stay tuned for our upcoming spiritual gatherings.
          </div>
        )}
      </section>
    </div>
  );
}
