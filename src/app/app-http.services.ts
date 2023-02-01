import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppHttpServices {
  constructor(private http: HttpClient) {}

  url = 'http://www.omdbapi.com/';

  getCurrentMovie(movieTitle: string) {
    const queryParams = new HttpParams({
      fromObject: {
        t: movieTitle,
        plot: 'full',
        apikey: 'bdae4255',
      },
    });
    return this.http.get(this.url, { params: queryParams });
  }
}
