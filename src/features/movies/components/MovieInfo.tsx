

import { Spinner } from '@/components/Elements';
import { useState } from 'react';
import { MoviesInfoTypes, MovieTypes } from '../types';
import strings from '@/utils/strings';


type MovieDetailProps = {
  movie: MoviesInfoTypes
};

export const MovieInfo = ({ movie }: MovieDetailProps) => {
  return (
    <section className='w-11/12 h-screen md:w-4/5 m-auto flex items-center'>
      <div className='w-full flex flex-col md:flex-row md:justify-between md:space-x-10 items-center'>
        <div className='relative'>
          <img className='w-screen h-full' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
        </div>
        <div className='space-y-5 p-5'>
          <h4 className='text-xl font-semibold mb-2'>{strings.movieInfo.movieTitle}</h4>
          <h1 className='text-3xl font-bold mb-8'>{movie.title}</h1>
          <p className='text-sm font-bold mb-4'>{strings.movieInfo.movieOverview}</p>
          <p>{movie.overview}</p>
          <p className='text-sm font-bold mb-4'>
            {strings.movieInfo.releaseDate}
          </p>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </section>
  );
};
