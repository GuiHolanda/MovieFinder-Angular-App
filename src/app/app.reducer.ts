import { Actions } from '@ngrx/effects';
import { ActionReducerMap } from '@ngrx/store';
import { IMovie } from 'src/app/app.types';
import { movieReducer } from './store/current-movie/current-movie.reducer';

export interface AppState {
  currentMovie: IMovie;
}

export const AppReducer: ActionReducerMap<AppState> = {
  currentMovie: movieReducer,
};
