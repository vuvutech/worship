"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TerminalIcon, LayoutDashboard, Calendar, Video, Users } from "lucide-react"
import { useCurrentSession } from "@/lib/use-current-session"

const defaultData = {
  user: {
    name: "User",
    email: "user@example.com",
    avatar: "/avatars/default.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboard />,
      isActive: true,
    },
    {
      title: "Admin",
      url: "/dashboard/admin",
      icon: <TerminalIcon />,
      items: [
        {
          title: "Video Management",
          url: "/dashboard/admin",
        },
        {
          title: "Event Management",
          url: "/dashboard/admin/events",
        },
        {
          title: "User Management",
          url: "/dashboard/admin/users",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useCurrentSession();

  const userData = {
    name: user?.name || defaultData.user.name,
    email: user?.email || defaultData.user.email,
    avatar: user?.image || defaultData.user.avatar,
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center justify-center h-16 border-b">
         <div className="flex items-center gap-2 px-4 py-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <TerminalIcon className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold">Worship Admin</span>
              <span className="text-xs text-muted-foreground">v0.1.0</span>
            </div>
          </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={defaultData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
