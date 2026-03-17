import ProfileHeader from "./components/profile-header";
import ProfileContent from "./components/profile-content";

interface ProfilePageProps {
  user: any;
  profile: any;
}

export default function ProfilePage({ user, profile }: ProfilePageProps) {
  return (
    <div className="container mx-auto space-y-6 px-4 py-10">
      <ProfileHeader user={user} profile={profile} />
      <ProfileContent user={user} profile={profile} />
    </div>
  );
}
