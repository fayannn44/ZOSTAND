import { Link } from 'react-router';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useProfile } from '@/stores/useProfileStore';
import { useStats } from '@/stores/useStatStore';

function Profile() {
  const { profile } = useProfile();
  const { stats } = useStats();

  return (
    <div className="max-w-2xl border rounded-lg p-6">
      <div className="flex items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={profile.avatar} />
          <AvatarFallback>
            {profile.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-2xl font-bold">
            {profile.name}
          </h1>

          <p className="text-muted-foreground">
            {profile.role}
          </p>

          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
              profile.status
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
            }`}
          >
            {profile.status ? 'Aktif' : 'Nonaktif'}
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p><b>Email:</b> {profile.email}</p>
        <p><b>Bio:</b> {profile.bio}</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="border rounded-lg p-4">
          <p className="text-muted-foreground">Proyek</p>
          <b>{stats.projects}</b>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-muted-foreground">Selesai</p>
          <b>{stats.completed}</b>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-muted-foreground">Poin</p>
          <b>{stats.points}</b>
        </div>
      </div>

      <Button asChild className="mt-6">
        <Link to="/profile/edit">
          Edit Profile
        </Link>
      </Button>
    </div>
  );
}

export default Profile;