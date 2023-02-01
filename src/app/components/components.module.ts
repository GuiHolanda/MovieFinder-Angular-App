import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchMovieFieldComponent } from './search-movie-field/search-movie-field.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchMovieFieldComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent, SearchMovieFieldComponent],
})
export class ComponentsModule {}
