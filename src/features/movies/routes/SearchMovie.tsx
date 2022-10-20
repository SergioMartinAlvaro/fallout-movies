import { ContentLayout, MainLayout } from '@/components/Layout';
import { useNavigate } from 'react-router-dom';

import { MoviesForm } from '../components/MoviesForm';

export const SearchMovie = () => {
  const navigate = useNavigate();

  const onSuccess = () => {

  }

  return (
    <MainLayout>
    <ContentLayout title="Search into our catalog">
      <MoviesForm onSuccess={onSuccess} />
    </ContentLayout>
    </MainLayout>
  );
};
