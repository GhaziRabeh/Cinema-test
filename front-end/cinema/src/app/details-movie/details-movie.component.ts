
import { Component, OnInit } from '@angular/core';

import { APP_CONFIG } from '../../config';
import { MovieServiceService } from '../service/movie-service.service';
import { Movies } from '../model/movie';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-movie',
  standalone: false,
  templateUrl: './details-movie.component.html',
  styleUrl: './details-movie.component.css'
})
export class DetailsMovieComponent implements OnInit{
  movie = new Movies()
  selectedMovie: any = null; 
  root_movies_uri: string = APP_CONFIG.root_movie_uri;

  constructor(private movieService: MovieServiceService,private router : ActivatedRoute) {}

  ngOnInit(): void {
  this.loadMovies();
  }


  loadMovies() {
    const id = this.router.snapshot.paramMap.get('id');
    this.movieService.getMovieById(id).subscribe(
      (dataMovie: any) => {
        this.movie = dataMovie;  
        console.log("datamovie",dataMovie);
        
      },
      (error) => {
        console.error('Error :', error);
      }
    );
  }

  


 

}
