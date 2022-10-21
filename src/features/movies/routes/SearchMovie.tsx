import { ContentLayout, MainLayout } from '@/components/Layout';
import { useEffect, useState } from 'react';
import { useMovieFiltered } from '../api/getMovieFiltered';
import { usePopularMovies } from '../api/getPopularMovies';

import { MoviesForm } from '../components/MoviesForm';

export const SearchMovie = () => {
  const [query, setQuery] = useState('');

  const onSuccess = (value: string) => {
    setQuery(value);
  }

  const displayMovies = !query && usePopularMovies({});
  const searchMovies = query && useMovieFiltered({ query });

  return (
    <MainLayout>
    <ContentLayout title="Search into our catalog">
      <MoviesForm onSuccess={onSuccess} query={query} movies={query ? searchMovies : displayMovies} />
    </ContentLayout>
    </MainLayout>
  );
};
