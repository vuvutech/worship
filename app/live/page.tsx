import { prisma } from "@/lib/prisma";
import { LiveDashboard } from "./live-dashboard";

export const dynamic = "force-dynamic"; // Ensure fresh data on load

export default async function LivePage() {
  // Fetch all videos, ordering newest first
  const data = await prisma.video.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // Prisma objects to POJOs for passing to Client Component
  const videos = data.map((video: { id: any; title: any; url: any; thumbnail: any; type: any; createdAt: any; }) => ({
    id: video.id,
    title: video.title,
    url: video.url,
    thumbnail: video.thumbnail,
    type: video.type, // VOD | LIVE
    createdAt: video.createdAt,
  }));

  return <LiveDashboard videos={videos} />;
}
