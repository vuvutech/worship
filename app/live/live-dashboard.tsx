"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { VideoPlayer } from "@/components/video-player";
import { Play, Mic2, Calendar, Users } from "lucide-react";

type VideoType = "VOD" | "LIVE";

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string | null;
  type: VideoType;
  createdAt: Date;
}

interface Minister {
  id: string;
  name: string;
  role: string | null;
  image: string | null;
}

interface Event {
  id: string;
  title: string;
  slug: string;
  startDate: Date;
  endDate: Date;
  poster: string | null;
  description: string | null;
  ministers: Minister[];
  sponsors: any[];
}

interface LiveStatusResponse {
  videos: Video[];
  activeEvent: Event | null;
  nextEvent: Event | null;
  serverTime: string;
}

interface LiveDashboardProps {
  initialVideos: Video[];
  initialEvents: Event[];
}

const fetcher = (url: string) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[SYNC] Refreshing live status: ${new Date().toLocaleTimeString()}`);
  }
  return fetch(url).then((res) => res.json());
};

export function LiveDashboard({ initialVideos, initialEvents }: LiveDashboardProps) {
  // Poll for live status every 60 seconds (using a generic sync path for obfuscation)
  const { data: status, error } = useSWR<LiveStatusResponse>(
    "/api/v1/sync",
    fetcher,
    {
      refreshInterval: 60000, // 1 minute
      fallbackData: {
        videos: initialVideos,
        activeEvent: null, 
        nextEvent: null,
        serverTime: new Date().toISOString(),
      },
    }
  );

  // Debug logging for status updates (Dev only)
  useEffect(() => {
    if (status && process.env.NODE_ENV === "development") {
      console.log("[SYNC] Live status synchronized:", {
        activeEvent: status.activeEvent?.title || "NONE",
        liveVideos: status.videos.filter(v => v.type === "LIVE").length,
        serverTime: status.serverTime
      });
    }
  }, [status]);

  const videos = status?.videos || initialVideos;
  const liveStream = videos.find((video) => video.type === "LIVE");
  const vods = videos.filter((video) => video.type === "VOD");

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(
    liveStream || vods[0] || null,
  );

  // Automatically switch to live stream if a new one appears and user hasn't manually selected a VOD
  useEffect(() => {
    if (liveStream && (!selectedVideo || selectedVideo.type !== "LIVE")) {
       if (!selectedVideo || selectedVideo.type === "LIVE") {
         if (process.env.NODE_ENV === "development") {
           console.log(`[SYNC] Auto-switching to live stream: ${liveStream.title}`);
         }
         setSelectedVideo(liveStream);
       }
    }
  }, [liveStream?.id]);

  const activeEvent = status?.activeEvent;

  return (
    <div className='min-h-screen bg-background text-foreground selection:bg-red-600 selection:text-white pb-24'>
      {/* Hero Player Section */}
      <section className='w-full relative pt-8 px-4 md:px-8 max-w-[1600px] mx-auto'>
        <div className='relative z-10 w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {/* Main Video Player Container */}
          <div className='lg:col-span-4 space-y-6'>
            
            {/* Now Playing Banner (Dynamic) */}
            {activeEvent && (
              <div className="bg-red-600/10 border border-red-600/20 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="size-12 md:size-16 rounded-full bg-red-600 animate-pulse overflow-hidden border-2 border-red-600">
                      {activeEvent.ministers?.[0]?.image ? (
                        <img 
                          src={activeEvent.ministers[0].image} 
                          alt={activeEvent.ministers[0].name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <Mic2 className="size-6 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-red-600 text-[10px] font-black px-1.5 py-0.5 rounded text-white uppercase tracking-tighter shadow-lg">
                      Live
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-red-600 text-xs font-black uppercase tracking-widest flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        Now Playing
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold line-clamp-1">{activeEvent.title}</h2>
                    <p className="text-sm text-neutral-500 font-medium">
                      Ministering: <span className="text-foreground">{activeEvent.ministers?.map(m => m.name).join(", ") || "The Body of Christ"}</span>
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:flex flex-col items-end text-right">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Users className="size-4" />
                    Join global worshippers
                  </div>
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="size-8 rounded-full border-2 border-background bg-neutral-800 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full grayscale opacity-50" />
                      </div>
                    ))}
                    <div className="size-8 rounded-full border-2 border-background bg-red-600 flex items-center justify-center text-[10px] font-bold text-white">
                      +1.2k
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedVideo ? (
              <>
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 bg-neutral-900 group/player relative">
                  <VideoPlayer
                    key={selectedVideo.id}
                    url={selectedVideo.url}
                    isLive={selectedVideo.type === "LIVE"}
                    playing={true}
                    thumbnail={selectedVideo.thumbnail}
                  />
                  {!activeEvent && selectedVideo.type === "LIVE" && (
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-30">
                       <p className="text-xs font-bold text-white flex items-center gap-2">
                         <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                         </span>
                         Continuous Praise & Worship is Active
                       </p>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mt-6">
                  <div>
                    <h1 className='text-3xl md:text-5xl font-bebas uppercase tracking-tight'>
                      {selectedVideo.title}
                    </h1>
                    <div className="flex items-center gap-3 mt-3">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${selectedVideo.type === "LIVE" ? "bg-red-600 text-white" : "bg-neutral-800 text-neutral-400"}`}>
                        {selectedVideo.type}
                      </span>
                      <p className='text-neutral-500 text-sm font-medium'>
                        {selectedVideo.type === "LIVE"
                          ? "Broadcasting live from The Non-Stop Series™"
                          : `Recorded session from ${new Date(selectedVideo.createdAt).toLocaleDateString()}`}
                      </p>
                    </div>
                  </div>
                  {liveStream && selectedVideo.id !== liveStream.id && (
                    <button 
                      onClick={() => setSelectedVideo(liveStream)}
                      className="group flex items-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white text-sm font-black uppercase rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/30 shrink-0"
                    >
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                      </span>
                      View Live Stream
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

        {initialEvents.length > 0 ? (
          <>
            {/* Event Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16'>
              {initialEvents.map((event, idx) => {
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
