import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from './MovieDetails';

import { SearchMovie } from './SearchMovie';

import { IAction, IMovieState, initialState, MovieContext, stateReducer } from '../context';
import { Reducer, useMemo, useReducer, useRef } from 'react';

export const MoviesRoutes = () => {
  const [movieState, dispatch] = useReducer<Reducer<IMovieState, IAction>>(
    stateReducer,
    initialState
  );

  const stateRef = useRef(movieState);
  const store = useMemo(() => ({ movieState, dispatch }), [
    movieState,
    dispatch,
  ]);
  stateRef.current = movieState;
  
  return (
    <MovieContext.Provider value={store}>
      <Routes>
        <Route path="mylist" element={<SearchMovie />} />
        <Route path="mylist/:movieId" element={<MovieDetails />} />
      </Routes>
    </MovieContext.Provider>
  );
};
