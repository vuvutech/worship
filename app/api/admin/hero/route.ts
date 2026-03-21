import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const h = await headers();
    const session = await auth.api.getSession({
      headers: h,
    });

    if (!session || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const settings = await prisma.heroSettings.findFirst();
    return NextResponse.json(settings || { videoId: "bDk_nNbccnc", startTime: 108 });
  } catch (error) {
    console.error("[ADMIN_HERO_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const h = await headers();
    const session = await auth.api.getSession({
      headers: h,
    });

    if (!session || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { videoId, startTime } = body;

    if (!videoId) {
      return new NextResponse("Missing videoId", { status: 400 });
    }

    const currentSettings = await prisma.heroSettings.findFirst();

    let settings;
    if (currentSettings) {
      settings = await prisma.heroSettings.update({
        where: { id: currentSettings.id },
        data: {
          videoId,
          startTime: parseInt(startTime) || 0,
        },
      });
    } else {
      settings = await prisma.heroSettings.create({
        data: {
          videoId,
          startTime: parseInt(startTime) || 0,
        },
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error("[ADMIN_HERO_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
