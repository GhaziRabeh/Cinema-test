import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../model/movie';
import { MovieServiceService } from '../service/movie-service.service';
import { APP_CONFIG } from '../../config';

@Component({
  selector: 'app-movies',
  standalone: false,
  
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{

  categoryId: string | undefined;
  movies: any[] = [];
  
  root_movie_uri : string = APP_CONFIG.root_movie_uri;

  constructor(private route: ActivatedRoute, private movieService:MovieServiceService) {}



  showMore: boolean = false;

  toggleText(): void {
    this.showMore = !this.showMore;
  }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      console.log('Category ID:', this.categoryId);
      this.loadMovies();
    });
  }

  loadMovies() {
    if (this.categoryId) {
     
      this.movieService.getMoviesByCategory(this.categoryId).subscribe(
        (dataMovie: any) => {
          this.movies = dataMovie.movies;
          console.log('Movies for category: ', dataMovie.movies);
        },
        (error) => {
          console.error('Error fetching movies by category:', error);
        }
      );
    } else {
      // Fetch all movies if no categoryId
      this.movieService.getMovie().subscribe(
        (dataMovie: any) => {
          this.movies = dataMovie.movies;
          console.log('All Movies: ', dataMovie.movies);
        },
        (error) => {
          console.error('Error fetching all movies:', error);
        }
      );
    }
  }
  
  




}
