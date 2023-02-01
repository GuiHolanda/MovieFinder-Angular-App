import { createAction, props } from '@ngrx/store';
import { IMovie } from 'src/app/app.types';

export const CURRENT_MOVIE_GET = '[CURRENT-MOVIE] Get the movie inputed';
export const CURRENT_MOVIE_GET_SUCCESS =
  '[CURRENT-MOVIE] Success in getting the movie inputted';
export const CURRENT_MOVIE_CLEAR = '[CURRENT-MOVIE] Cleared the movie inputted';

export const getCurrentMovieAction = createAction(
  CURRENT_MOVIE_GET,
  props<{ movieTitle: string }>()
);

export const getCurrentMovieActionSuccess = createAction(
  CURRENT_MOVIE_GET_SUCCESS,
  props<{ movie: IMovie }>()
);

export const clearCurrentMovieAction = createAction(CURRENT_MOVIE_CLEAR);
