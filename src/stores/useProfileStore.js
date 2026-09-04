import { create } from 'zustand';

export const useProfile = create((set) => ({
  profile: {
    name: 'Luthfian',
    role: 'Frontend Developer',
    email: 'luthfian@gmail.com',
    bio: 'Saya sedang belajar React dan Zustand.',
    status: true,
    avatar:'https://i.pinimg.com/736x/45/50/17/455017b7277c1b23577754b4d45446d3.jpg',
  },

  action: {
    setProfile: (profile) => set({ profile }),
  },
}));