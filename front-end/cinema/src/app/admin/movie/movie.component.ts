


import { Component, OnInit } from '@angular/core';
import { Movies } from '../../model/movie';
import { APP_CONFIG } from '../../../config';
import { MovieServiceService } from '../../service/movie-service.service';
import { Category } from '../../model/category';
import { CategoryServiceService } from '../../service/category-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie',
  standalone: false,
  
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  movies: any[] = [];
  movie = new Movies ()

  category : any [] = [];
  Category = new Category();

  imageFile: File | null = null;  
  root_media_uri : string = APP_CONFIG.root_movie_uri;
  
  
  constructor( private movieService : MovieServiceService, 
    private categoryService:CategoryServiceService,
  private router : Router ){}

  
    ngOnInit(): void {
      this.loadMovies();
      this.loadCategory();
    }


    loadCategory() {
 
  
      this.categoryService.getCategory().subscribe(
        (dataCategory: any) => {
          this.category = dataCategory;
         
        },
        (error: any) => {
          console.error('Error loading categories:', error);
        }
      );
    }



    loadMovies(){
      this.movieService.getMovie().subscribe((dataMovie : any) => {
        this.movies = dataMovie.movies
        console.log("movie : ",dataMovie.movies);
        
      })
    }

    onSaveMovie() {
      const formData = new FormData();
      formData.append('name', this.movie.name);
      formData.append('description', this.movie.description);
      formData.append('rate', this.movie.rate ? this.movie.rate.toString() : '0');  // Validate the rate
      if (this.movie.category_id) {
        formData.append('category_id', this.movie.category_id.toString());
      }
      if (this.imageFile instanceof File) {
        formData.append('image', this.imageFile);
      }
    
      this.movieService.insertMovie(formData).subscribe(
        dataMovie => {
          console.log('Movie saved successfully:', dataMovie);
          this.loadMovies(); 
        },
        error => {
          console.error('Error saving movie:', error);
          if (error.error && error.error.errors) {
            console.error('Validation errors:', error.error.errors);  // Check server validation errors
          }
        }
      );
    }
    onFileChange(event: any) {
      const file = event.target.files[0];
      if (file) {
        this.imageFile = file; 
        console.log('File selected:', file.name); 
      }
  }
  deleteMovie(id:any) {
    const isConfirmed = window.confirm('Are you sure you want to delete this show?');
    if(isConfirmed){
    
      console.log(id);
      this.movieService.deleteMovie(id).subscribe(data =>{
        this.loadMovies()
        
      })
    }
    
    } 
    update(movie:any){
      this.router.navigate(['/admin/movie/update',movie.id])
      }
}
