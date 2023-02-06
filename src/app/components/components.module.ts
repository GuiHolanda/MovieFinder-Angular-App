import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchMovieFieldComponent } from './search-movie-field/search-movie-field.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchMovieFieldComponent,
    MovieCardComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchMovieFieldComponent,
    MovieCardComponent,
  ],
})
export class ComponentsModule {}
