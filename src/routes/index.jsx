import { createBrowserRouter } from 'react-router';

import MainLayout from '@/layouts/MainLayout';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import EditProfile from '@/pages/EditProfile';
import Stats from '@/pages/Stats';
import LoginFrom from '@/pages/LoginFrom';

export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'profile/edit',
        element: <EditProfile />,
      },
      {
        path: 'stats',
        element: <Stats />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginFrom  />,
  }
]);