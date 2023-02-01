import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import {
  clearCurrentMovieAction,
  getCurrentMovieAction,
} from 'src/app/store/current-movie/current-movie.actions';

@Component({
  selector: 'app-search-movie-field',
  templateUrl: './search-movie-field.component.html',
  styleUrls: ['./search-movie-field.component.scss'],
})
export class SearchMovieFieldComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  searchMovieForm: FormGroup = new FormGroup({
    movieTitle: new FormControl(null),
  });

  ngOnInit(): void {}

  onSubmit() {
    const isValidInput = this.searchMovieForm.valid;
    console.log(isValidInput);
    if (isValidInput) {
      const movieTitle = this.searchMovieForm.get('movieTitle')!.value;
      this.store.dispatch(getCurrentMovieAction({ movieTitle }));
      this.searchMovieForm.setValue({ movieTitle: '' });
    }
  }

  onClearButtonClick() {
    this.searchMovieForm.setValue({ movieTitle: '' });
    this.store.dispatch(clearCurrentMovieAction());
  }
}
