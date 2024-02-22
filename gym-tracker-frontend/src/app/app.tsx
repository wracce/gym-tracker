import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from 'pages/login';
import { HomeLayout } from '../pages/layouts/home-layout';
import { WorkoutsPage } from 'pages/workouts';
import { JournalPage } from 'pages/journal';
import { ExercisesPage } from 'pages/exercises';
import { BaseLayout } from 'pages/layouts/base-layout';
import { ProfilePage } from 'pages/profile';
import { RegisterPage } from 'pages/register';

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'home',
        element: <HomeLayout />,
        children: [
          {
            path: 'exercises',
            element: <ExercisesPage />,
          },
          {
            path: 'journal',
            element: <JournalPage />,
          },
          {
            path: 'workouts',
            element: <WorkoutsPage />,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
