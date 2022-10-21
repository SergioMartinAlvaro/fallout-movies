

import { Spinner } from '@/components/Elements';
import { useState } from 'react';
import { MoviesInfoTypes, MovieTypes } from '../types';


type MovieDetailProps = {
  movie: MoviesInfoTypes
};

export const MovieInfo = ({ movie }: MovieDetailProps) => {
  return (
    <section className='w-11/12 h-screen m-auto flex items-center'>
      <div className='w-full flex items-center'>
        <div className='relative'>
          <img className='w-screen h-full' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
        </div>
        <div className='ml-12'>
          <h4 className='text-xl font-semibold mb-2'>Movie</h4>
          <h1 className='text-3xl font-bold mb-8'>{movie.title}</h1>
          <p className='text-sm font-bold mb-4'>Overview</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
};
