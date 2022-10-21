import { ContentLayout, MainLayout } from '@/components/Layout';
import { useContext, useEffect, useState } from 'react';
import { useMovieFiltered } from '../api/getMovieFiltered';
import { usePopularMovies } from '../api/getPopularMovies';
import { MovieInfo } from '../components/MovieInfo';

import { MovieContext } from '../context';

export const MovieDetails = () => {
  const { movieState } = useContext(MovieContext);

  return (
    <MainLayout>
    <ContentLayout title={movieState.movie.title}>
      <MovieInfo />
    </ContentLayout>
    </MainLayout>
  );
};
