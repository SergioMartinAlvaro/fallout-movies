import { LandingHome } from '@/components/LandingHome/LandingHome';
import { ContentLayout, MainLayout } from '@/components/Layout';
import React from 'react';
import { Reducer, useEffect, useReducer, useRef, useState } from 'react';
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
    <ContentLayout title="">
        <LandingHome />
        <MoviesForm onSuccess={onSuccess} query={query} movies={query ? searchMovies : displayMovies} />
    </ContentLayout>
    </MainLayout>
  );
};
