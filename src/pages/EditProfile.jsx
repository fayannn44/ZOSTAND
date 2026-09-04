import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useProfile } from '@/stores/useProfileStore';

function EditProfile() {
  const { profile, action } = useProfile();
  const navigate = useNavigate();

  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    action.setProfile(form);
    navigate('/profile');
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">
        Edit Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label>Nama</Label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>Role</Label>
          <Input
            name="role"
            value={form.role}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>Email</Label>
          <Input
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>Bio</Label>
          <Textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">
          Simpan
        </Button>
      </form>
    </div>
  );
}

export default EditProfile;