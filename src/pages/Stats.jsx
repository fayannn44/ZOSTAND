import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useStats } from '@/stores/useStatStore';
import { useProfile } from '@/stores/useProfileStore';

function Stats() {
  const { stats, action } = useStats();
  const { profile, action: profileAction } = useProfile();

  const [form, setForm] = useState(stats);

  const handleSubmit = (e) => {
    e.preventDefault();

    action.setStats({
      projects: Number(form.projects),
      completed: Number(form.completed),
      points: Number(form.points),
    });
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">
        Statistik
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label>Total Proyek</Label>
          <Input
            type="number"
            value={form.projects}
            onChange={(e) =>
              setForm({
                ...form,
                projects: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Tugas Selesai</Label>
          <Input
            type="number"
            value={form.completed}
            onChange={(e) =>
              setForm({
                ...form,
                completed: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Poin</Label>
          <Input
            type="number"
            value={form.points}
            onChange={(e) =>
              setForm({
                ...form,
                points: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Status Akun</Label>

          <div className="flex gap-6 mt-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={profile.status === true}
                onChange={() =>
                  profileAction.setProfile({
                    ...profile,
                    status: true,
                  })
                }
              />
              Aktif
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={profile.status === false}
                onChange={() =>
                  profileAction.setProfile({
                    ...profile,
                    status: false,
                  })
                }
              />
              Nonaktif
            </label>
          </div>
        </div>

        <Button type="submit">
          Simpan
        </Button>
      </form>
    </div>
  );
}

export default Stats;