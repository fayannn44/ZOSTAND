import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useProfile } from '@/stores/useProfileStore';

function Navbar() {
  const { profile } = useProfile();

  return (
    <nav className="h-16 border-b flex items-center justify-end px-6 gap-3">
      <div className="text-right">
        <p className="font-semibold">{profile.name}</p>
        <p className="text-sm text-muted-foreground">
          {profile.role}
        </p>
      </div>

      <Avatar>
        <AvatarImage src={profile.avatar} />
        <AvatarFallback>
          {profile.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </nav>
  );
}

export default Navbar;