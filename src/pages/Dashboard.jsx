import { useProfile } from '@/stores/useProfileStore';
import { useStats } from '@/stores/useStatStore';

function Dashboard() {
  const { profile } = useProfile();
  const { stats } = useStats();

  const cards = [
    ['Total Proyek', stats.projects],
    ['Tugas Selesai', stats.completed],
    ['Poin', stats.points],
    ['Status Akun', profile.status ? 'Aktif' : 'Nonaktif'],
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Halo, {profile.name} 
      </h1>

      <p className="text-muted-foreground mt-2">
        {profile.bio}
      </p>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {cards.map(([title, value]) => (
          <div
            key={title}
            className="border rounded-lg p-5"
          >
            <p className="text-sm text-muted-foreground">
              {title}
            </p>

            <p className="text-2xl font-bold mt-2">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;