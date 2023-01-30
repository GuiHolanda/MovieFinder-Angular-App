import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieFieldComponent } from './search-movie-field.component';

describe('SearchMovieFieldComponent', () => {
  let component: SearchMovieFieldComponent;
  let fixture: ComponentFixture<SearchMovieFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMovieFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
