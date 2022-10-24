import { ContentLayout, MainLayout } from '@/components/Layout';
import { useContext } from 'react';
import { MovieInfo } from '../components/MovieInfo';


import { MovieContext } from '../context';

export const MovieDetails = () => {
  const { movieState } = useContext(MovieContext);

  return (
    <MainLayout>
    <ContentLayout title={''}>
      <MovieInfo movie={movieState.movie} />
    </ContentLayout>
    </MainLayout>
  );
};
