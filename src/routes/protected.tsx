import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Spinner } from '@/components/Elements';
import { MainLayout } from '@/components/Layout';
import { lazyImport } from '@/utils/lazyImport';

const { Home } = lazyImport(() => import('@/features/misc'), 'Home');
const { MoviesRoutes } = lazyImport(() => import('@/features/movies'), 'MoviesRoutes');

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '*', element: <Navigate to="." /> },
     
    ],
  },
  {path: '/search/*', element: <MoviesRoutes /> },
  { path: '/', element: <Home /> },
  {
    path: "*", element: <Navigate to="." />
  }
];
