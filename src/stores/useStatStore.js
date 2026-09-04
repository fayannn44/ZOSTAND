import { create } from 'zustand';

export const useStats = create((set) => ({
  stats: {
    projects: 6,
    completed: 67,
    points: 6767,
  },

  action: {
    setStats: (stats) => set({ stats }),
  },
}));