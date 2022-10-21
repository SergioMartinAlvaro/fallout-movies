import React from 'react';
import { MoviesInfoTypes } from '../types';

export interface IMovieState {
    movie: MoviesInfoTypes
}

export type Action =
    | 'SET_MOVIE';

export interface IAction {
    type: Action;
    value?: any;
}

export type ContextProps = {
    movieState: IMovieState ;
    dispatch: (action: IAction) => void;
};

export const initialState: IMovieState = {
    movie: {
        adult: false,
        backdrop_path: '',
        genre_ids: '',
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
    }
}

export const MovieContext = React.createContext<ContextProps>({
    movieState: initialState,
    dispatch: () => {}
});

export const stateReducer = (state: IMovieState, action: IAction) => {
    switch(action.type) {
        case 'SET_MOVIE': 
            return {...state, movie: action.value};
        default:
            return {
                ...state,
                message: {type: 'error', text: `Action not available ${action.type}`}
            }
    }
}