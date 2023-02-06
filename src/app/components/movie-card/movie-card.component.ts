import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { IMovie } from 'src/app/app.types';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  movie!: IMovie;

  ngOnInit(): void {
    this.store
      .select('currentMovie')
      .subscribe((movie) => (this.movie = movie));
  }
}
