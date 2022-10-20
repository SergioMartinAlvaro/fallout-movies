import { ContentLayout, MainLayout } from '@/components/Layout';
import { useNavigate } from 'react-router-dom';

import { MoviesForm } from '../components/MoviesForm';

export const SearchMovie = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
    <ContentLayout title="Search into our catalog">
      <MoviesForm onSuccess={() => navigate('/app')} />
    </ContentLayout>
    </MainLayout>
  );
};
