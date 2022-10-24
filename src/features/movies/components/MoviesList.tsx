

import { Spinner } from '@/components/Elements';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context';
import { MoviesInfoTypes, MovieTypes } from '../types';
import strings from '@/utils/strings';


type MoviesListProps = {
  movies: MoviesInfoTypes[] | undefined;
};

export const MoviesList = ({ movies }: MoviesListProps) => {
    const { dispatch } = useContext(MovieContext);
  const navigate = useNavigate();
  const setSelectedMovie = (movie: MoviesInfoTypes) => {
    dispatch({ type: 'SET_MOVIE', value: movie });
    navigate(`/search/${movie.id}`)
  }

  return (
    <div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl justify-center'>
        {movies ? movies?.map((movie: MoviesInfoTypes) => {
            return (
            <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 m-auto dark:border-gray-700'>
                <img className="rounded-t-lg h-96 w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <div className='p-5'>
                    <a href="#">
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            {movie.title}
                        </h5>
                    </a>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        {movie.overview}
                    </p>
                    <a onClick={() => setSelectedMovie(movie)} className='inline-flex items-center cursor-pointer py-2 px-3 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-100 dark:bg-orange-300 dark:hover:bg-orange-400 dark:focus:ring-orange-400'>
                        {strings.movieList.button}
                    </a>
                </div>
            </div>
            )
        }) : <h1>{strings.movieList.NotFound}</h1>}
        </div>
    </div>
  );
};
