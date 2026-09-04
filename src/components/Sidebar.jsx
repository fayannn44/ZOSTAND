import { NavLink } from 'react-router';
import { useProfile } from '@/stores/useProfileStore';

function Sidebar() {
  const { profile } = useProfile();

  return (
    <aside className="w-60 min-h-screen border-r p-5 flex flex-col">
      <h1 className="text-xl font-bold mb-8">
        Dashboard
      </h1>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className="p-2 rounded hover:bg-muted">
          Dashboard
        </NavLink>

        <NavLink to="/profile" className="p-2 rounded hover:bg-muted">
          Profile
        </NavLink>

        <NavLink to="/stats" className="p-2 rounded hover:bg-muted">
          Statistik
        </NavLink>
      </nav>

      <div className="mt-auto border-t pt-4">
        <p className="text-sm text-muted-foreground">
          Email
        </p>
        <p className="text-sm">
          {profile.email}
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;