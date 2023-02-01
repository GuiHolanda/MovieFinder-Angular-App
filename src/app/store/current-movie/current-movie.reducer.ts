import {
  clearCurrentMovieAction,
  getCurrentMovieActionSuccess,
} from './current-movie.actions';
import { createReducer, on } from '@ngrx/store';
import { IMovie } from 'src/app/app.types';

const inicialState: IMovie = {
  Genre: '',
  Title: '',
  Plot: '',
  Poster: '',
  Year: '',
  Runtime: '',
  Actors: '',
  Country: '',
  Language: '',
  Director: '',
  Writer: '',
  Response: false,
  imdbRating: '',
};

export const movieReducer = createReducer(
  inicialState,
  on(getCurrentMovieActionSuccess, (state, { movie }) => movie),
  on(clearCurrentMovieAction, (state) => inicialState)
);
