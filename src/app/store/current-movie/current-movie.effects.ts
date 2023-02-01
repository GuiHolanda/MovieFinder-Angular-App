import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AppHttpServices } from 'src/app/app-http.services';
import {
  CURRENT_MOVIE_GET,
  getCurrentMovieActionSuccess,
} from './current-movie.actions';

@Injectable({
  providedIn: 'root',
})
export class CurrentMovieEffects {
  constructor(
    private actions$: Actions,
    private appHttpServices: AppHttpServices
  ) {}

  getCurrentMOvieEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(CURRENT_MOVIE_GET),
      switchMap((action: any) =>
        this.appHttpServices
          .getCurrentMovie(action.movieTitle)
          .pipe(
            map((movie: any) => getCurrentMovieActionSuccess({ movie: movie }))
          )
      )
    )
  );
}
