import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Calendar, Mail, MapPin } from "lucide-react";
import { format } from "date-fns";

interface ProfileHeaderProps {
  user: any;
  profile: any;
}

export default function ProfileHeader({ user, profile }: ProfileHeaderProps) {
  const joinedDate = user.createdAt ? new Date(user.createdAt) : new Date();
  const initials = user.name
    ? user.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
    : "??";

  const isVolunteer = profile.volunteerAreas && profile.volunteerAreas.length > 0;

  return (
    <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-primary/5 via-background to-background">
      <CardContent className="p-0">
        <div className="relative h-32 w-full bg-gradient-to-r from-primary/20 to-primary/5 md:h-40">
           {profile.bannerUrl && (
             <img src={profile.bannerUrl} alt="Banner" className="h-full w-full object-cover opacity-50" />
           )}
        </div>
        <div className="flex flex-col items-start gap-6 px-6 pb-6 md:flex-row md:items-end md:gap-8 -mt-12 md:-mt-16">
          <div className="relative group">
            <Avatar className="h-24 w-24 border-4 border-background shadow-xl md:h-32 md:w-32">
              <AvatarImage src={user.image || undefined} alt={user.name} />
              <AvatarFallback className="text-3xl font-bold bg-muted text-muted-foreground">{initials}</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute right-0 bottom-0 h-9 w-9 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              title="Change Profile Picture"
            >
              <Camera className="size-4" />
            </Button>
          </div>
          <div className="flex-1 space-y-3 pt-2">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <h1 className="text-3xl font-extrabold   text-foreground">{user.name}</h1>
              <div className="flex gap-2">
                <Badge variant="default" className="bg-primary text-primary-foreground font-semibold px-3 uppercase tracking-wider text-[10px]">
                  {profile.membershipPlan || "Basic"}
                </Badge>
                {isVolunteer && (
                  <Badge variant="secondary" className="font-medium uppercase tracking-wider text-[10px]">Volunteer</Badge>
                )}
              </div>
            </div>
            <p className="text-lg font-medium text-primary/80">
              {profile.jobTitle || "Member"} {profile.company ? ` at ${profile.company}` : ""}
            </p>
            <div className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <div className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
                <Mail className="size-4 text-primary" />
                {user.email}
              </div>
              {profile.location && (
                <div className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
                  <MapPin className="size-4 text-primary" />
                  {profile.location}
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4 text-primary" />
                Joined {format(joinedDate, "MMMM yyyy")}
              </div>
            </div>
          </div>
          <div className="flex gap-3 pt-4 md:pt-0">
            <Button variant="default" className="font-bold shadow-md px-6">Save Changes</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
