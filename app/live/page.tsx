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
  const videos = data.map((v: { id: any; title: any; url: any; thumbnail: any; type: any; createdAt: any; }) => ({
    id: v.id,
    title: v.title,
    url: v.url,
    thumbnail: v.thumbnail,
    type: v.type, // VOD | LIVE
    createdAt: v.createdAt,
  }));

  return <LiveDashboard videos={videos} />;
}
