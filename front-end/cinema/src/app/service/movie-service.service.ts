import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  private apiUrl = `${APP_CONFIG.root_api_uri}admin/movies`; 

  constructor(private http: HttpClient) {}

  // Get all movies
  getMovie(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Insert a new movie
  insertMovie(dataMovie: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, dataMovie);
  }

  // Delete a movie by ID
  deleteMovie(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Get a movie by ID
  getMovieById(id: any) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update a movie by ID
  updateMovie(id: number, dataCategory: FormData) {  
    return this.http.put<any>(`${this.apiUrl}/${id}`, dataCategory);
  }

  // Get movies by category
  getMoviesByCategory(categoryId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/category/${categoryId}`)
  }
  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/searchMovie`, {
      params: { searchMovie: query }
    });
  }


}
